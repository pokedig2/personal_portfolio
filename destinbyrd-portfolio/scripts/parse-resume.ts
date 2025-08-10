/*
  Heuristic PDF parser to populate src/data/content.ts from public/Destin_Resume.pdf
  - Looks for sections: Skills, Experience, Projects, Education, Contact
*/
import fs from 'node:fs'
import path from 'node:path'
import pdf from 'pdf-parse'

const ROOT = process.cwd()
const pdfPath = path.join(ROOT, 'public', 'Destin_Resume.pdf')
const contentPath = path.join(ROOT, 'src', 'data', 'content.ts')

function splitLines(text: string): string[] {
  return text.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
}

function extractSection(lines: string[], title: string): string[] {
  const idx = lines.findIndex(l => new RegExp(`^${title}\b`, 'i').test(l))
  if (idx === -1) return []
  const after = lines.slice(idx + 1)
  const stop = after.findIndex(l => /^(skills|experience|projects|education|contact)\b/i.test(l))
  return stop === -1 ? after : after.slice(0, stop)
}

function parseSkills(block: string[]): string[] {
  const joined = block.join(' ')
  return joined
    .split(/[,•\-\u2022]/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .slice(0, 40)
}

function parseExperience(block: string[]) {
  const experiences: any[] = []
  let current: any | null = null
  for (const line of block) {
    // detect role/company line (e.g., Role — Company) or (Company — Role)
    const dash = line.split(/\s[–—-]\s/)
    if (dash.length === 2) {
      if (current) experiences.push(current)
      const [a, b] = dash
      const looksLikePeriod = /\d{4}/.test(b)
      const role = looksLikePeriod ? a : b
      const company = looksLikePeriod ? undefined : a
      current = { role: role.trim(), company: company?.trim(), bullets: [] as string[] }
      continue
    }
    if (/\b(\d{4}).*(present|\d{4})/i.test(line)) {
      current = current || { role: '', bullets: [] as string[] }
      current.period = line.trim()
      continue
    }
    if (/^[•\-\u2022]/.test(line) || line.length > 40) {
      current = current || { role: '', bullets: [] as string[] }
      current.bullets.push(line.replace(/^[•\-\u2022]\s?/, '').trim())
    }
  }
  if (current) experiences.push(current)
  return experiences
}

function parseProjects(block: string[]) {
  const projects: any[] = []
  let current: any | null = null
  for (const line of block) {
    // Line that looks like a title
    if (/^[A-Z0-9].{0,60}$/.test(line) && !/\b(\d{4})\b/.test(line)) {
      if (current) projects.push(current)
      current = { title: line.trim(), description: '', tech: [] as string[] }
      continue
    }
    if (/\b(react|typescript|node|express|postgres|mongo|aws|next|tailwind|vite)\b/i.test(line)) {
      const parts = line.split(/[,•\-\u2022]/).map(s => s.trim()).filter(Boolean)
      current = current || { title: 'Project', description: '', tech: [] as string[] }
      current.tech.push(...parts)
      continue
    }
    if (line.length > 10) {
      current = current || { title: 'Project', description: '', tech: [] as string[] }
      current.description = (current.description ? current.description + ' ' : '') + line
    }
  }
  if (current) projects.push(current)
  return projects.slice(0, 6)
}

function parseContact(lines: string[]) {
  const text = lines.join(' ')
  const email = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/i)?.[0]
  const linkedin = text.match(/https?:\/\/[\w.\/\-]*linkedin[^\s)]+/i)?.[0]
  const github = text.match(/https?:\/\/[\w.\/\-]*github[^\s)]+/i)?.[0]
  return { email, linkedin, github }
}

async function main() {
  if (!fs.existsSync(pdfPath)) {
    console.error(`Missing PDF at ${pdfPath}`)
    process.exit(1)
  }
  const data = await pdf(fs.readFileSync(pdfPath))
  const lines = splitLines(data.text)

  const contact = parseContact(lines)
  const skills = parseSkills(extractSection(lines, 'Skills'))
  const exp = parseExperience(extractSection(lines, 'Experience'))
  const projects = parseProjects(extractSection(lines, 'Projects'))
  const educationBlock = extractSection(lines, 'Education')
  const education = educationBlock.length
    ? [{ school: educationBlock[0] ?? '', degree: educationBlock[1] ?? '', period: educationBlock.find(l => /\b\d{4}\b/.test(l)) }]
    : []

  // Build TS module text
  const ts = `// Generated from public/Destin_Resume.pdf\n` +
`export const content = ${JSON.stringify({
    name: 'Destin Byrd',
    title: 'Software Engineer',
    summary: 'Updated from resume.',
    projects: projects.map(p => ({
      title: p.title,
      description: p.description,
      tech: Array.from(new Set((p.tech || []).map((t: string) => t))).slice(0, 8),
    })),
    skills: Array.from(new Set(skills)).slice(0, 40),
    experience: exp.map((e: any) => ({
      role: e.role,
      company: e.company,
      period: e.period,
      bullets: (e.bullets || []).slice(0, 6),
    })),
    education,
    contact: {
      email: contact.email,
      linkedin: contact.linkedin,
      github: contact.github,
      website: 'https://destinbyrd.com',
    },
  }, null, 2)} as const\n`

  // Write to a sibling file to avoid type conflicts, then developer can review
  const outPath = path.join(ROOT, 'src', 'data', 'content.generated.ts')
  fs.writeFileSync(outPath, ts)
  console.log(`Wrote ${outPath}`)
  console.log('Review and optionally replace src/data/content.ts with generated content.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
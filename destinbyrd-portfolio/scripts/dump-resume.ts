import fs from 'node:fs'
import path from 'node:path'
import pdf from 'pdf-parse/lib/pdf-parse.js'

async function main() {
  const pdfPath = path.join(process.cwd(), 'public', 'Destin_Resume.pdf')
  if (!fs.existsSync(pdfPath)) {
    console.error('Resume PDF not found at', pdfPath)
    process.exit(1)
  }
  const data = await pdf(fs.readFileSync(pdfPath))
  const outDir = path.join(process.cwd(), 'tmp')
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, 'resume.txt')
  fs.writeFileSync(outPath, data.text, 'utf8')
  console.log('Wrote', outPath)
}

main().catch((e) => { console.error(e); process.exit(1) })
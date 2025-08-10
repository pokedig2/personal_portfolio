export type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
  repo?: string
}

export type Experience = {
  role: string
  company?: string
  period?: string
  summary?: string
  bullets?: string[]
}

export type Education = {
  school: string
  degree?: string
  period?: string
  details?: string
}

export type Content = {
  name: string
  title: string
  summary: string
  projects: Project[]
  skills: string[]
  experience: Experience[]
  education?: Education[]
  contact: {
    email?: string
    linkedin?: string
    github?: string
    website?: string
  }
}

export const content: Content = {
  name: "Destin Byrd",
  title: "Software Engineer",
  summary:
    "I build reliable, accessible web apps with React, TypeScript, and modern tooling.",
  projects: [
    {
      title: "Project Title",
      description: "Short description of the project, stack, and impact.",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#",
      repo: "#",
    },
    {
      title: "Project Title",
      description: "Short description of the project, stack, and impact.",
      tech: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Project Title",
      description: "Short description of the project, stack, and impact.",
      tech: ["Next.js", "Vercel"],
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "",
      period: "2023 — Present",
      summary:
        "Describe role, accomplishments, and impact in a few concise bullet points.",
      bullets: [
        "Led development of ...",
        "Improved performance by ...",
      ],
    },
  ],
  education: [
    {
      school: "Your University",
      degree: "B.S. in Computer Science",
      period: "",
      details: "",
    },
  ],
  contact: {
    email: "hello@destinbyrd.com",
    linkedin: "https://www.linkedin.com/in/destinbyrd",
    github: "https://github.com/destinbyrd",
    website: "https://destinbyrd.com",
  },
}
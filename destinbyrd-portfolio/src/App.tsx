import './index.css'

function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold">destinbyrd<span className="text-emerald-400">.com</span></a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-emerald-400">Projects</a>
            <a href="#skills" className="hover:text-emerald-400">Skills</a>
            <a href="#experience" className="hover:text-emerald-400">Experience</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-400 text-sm font-medium">Software Engineer</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">Destin Byrd</h1>
            <p className="mt-4 text-white/70 max-w-prose">
              I build reliable, accessible web apps with React, TypeScript, and modern tooling. This portfolio showcases selected work, skills, and experience.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-emerald-400">View Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold hover:border-white/30">Get in touch</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-white/10"></div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-xl border border-white/10 p-5 hover:border-white/25 transition">
                <h3 className="font-medium">Project {i}</h3>
                <p className="mt-2 text-sm text-white/70">Short description of the project, stack, and impact.</p>
                <div className="mt-4 flex gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/15 px-2 py-0.5">React</span>
                  <span className="rounded-full border border-white/15 px-2 py-0.5">TypeScript</span>
                  <span className="rounded-full border border-white/15 px-2 py-0.5">Tailwind</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-white/80">
            {["React","TypeScript","Node.js","Express","Next.js","Vite","Tailwind CSS","PostgreSQL","MongoDB","AWS"].map(s => (
              <li key={s} className="rounded-md border border-white/15 px-3 py-1">{s}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">Software Engineer</p>
                <p className="text-xs text-white/60">2023 — Present</p>
              </div>
              <p className="mt-2 text-sm text-white/70">Describe role, accomplishments, and impact in a few concise bullet points.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-white/70">Email: <a href="mailto:hello@destinbyrd.com" className="text-emerald-400 hover:underline">hello@destinbyrd.com</a></p>
          <p className="mt-1 text-white/70">LinkedIn: <a href="https://www.linkedin.com/in/destinbyrd" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">linkedin.com/in/destinbyrd</a></p>
          <p className="mt-1 text-white/70">GitHub: <a href="https://github.com/destinbyrd" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">github.com/destinbyrd</a></p>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Destin Byrd
        </div>
      </footer>
    </div>
  )
}

export default App

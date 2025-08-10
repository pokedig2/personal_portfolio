import './index.css'
import { content } from './data/content'

function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold">destinbyrd<span className="text-emerald-300">.com</span></a>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <a href="#projects" className="hover:text-emerald-300">Achievements</a>
            <a href="#skills" className="hover:text-emerald-300">Skills</a>
            <a href="#experience" className="hover:text-emerald-300">Experience</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
            <a href="/Destin_Resume.pdf" className="rounded-md border border-white/10 px-3 py-1.5 hover:border-white/25">Resume</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-300/90 text-sm font-medium">{content.title}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold text-neutral-50">{content.name}</h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              {content.summary}
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-emerald-400/90 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-emerald-300">View Achievements</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-neutral-200 hover:border-white/25">Get in touch</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 border border-white/10 shadow-[0_0_100px_-30px_rgba(16,185,129,0.35)]"></div>
          </div>
        </section>

        {content.projects && content.projects.length > 0 && (
          <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold text-neutral-50">Achievements</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.projects.map((p) => (
                <article key={p.title} className="rounded-xl border border-white/10 bg-neutral-900/50 p-5 hover:border-white/25 transition">
                  <h3 className="font-medium text-neutral-100">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
                  {p.tech && p.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300">
                      {p.tech.map(t => (
                        <span key={t} className="rounded-full border border-white/10 bg-neutral-800/60 px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  )}
                  {(p.link || p.repo) && (
                    <div className="mt-4 flex gap-3 text-sm">
                      {p.link && <a className="text-emerald-300 hover:underline" href={p.link} target="_blank" rel="noreferrer">Live</a>}
                      {p.repo && <a className="text-emerald-300 hover:underline" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {content.skills && content.skills.length > 0 && (
          <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold text-neutral-50">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-neutral-300">
              {content.skills.map(s => (
                <li key={s} className="rounded-md border border-white/10 bg-neutral-900/50 px-3 py-1">{s}</li>
              ))}
            </ul>
          </section>
        )}

        {content.experience && content.experience.length > 0 && (
          <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold text-neutral-50">Experience</h2>
            <div className="mt-4 space-y-4">
              {content.experience.map((e) => (
                <div key={e.role + (e.company ?? '')} className="rounded-xl border border-white/10 bg-neutral-900/50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-neutral-100">{e.role}{e.company ? ` · ${e.company}` : ''}</p>
                    {e.period && <p className="text-xs text-neutral-400">{e.period}</p>}
                  </div>
                  {e.summary && <p className="mt-2 text-sm text-neutral-300">{e.summary}</p>}
                  {e.bullets && e.bullets.length > 0 && (
                    <ul className="mt-3 list-disc pl-5 text-sm text-neutral-300 space-y-1">
                      {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {content.education && content.education.length > 0 && (
          <section id="education" className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold text-neutral-50">Education</h2>
            <div className="mt-4 space-y-4">
              {content.education.map((ed) => (
                <div key={ed.school + (ed.degree ?? '')} className="rounded-xl border border-white/10 bg-neutral-900/50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-neutral-100">{ed.school}{ed.degree ? ` · ${ed.degree}` : ''}</p>
                    {ed.period && <p className="text-xs text-neutral-400">{ed.period}</p>}
                  </div>
                  {ed.details && <p className="mt-2 text-sm text-neutral-300">{ed.details}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-neutral-50">Contact</h2>
          <div className="mt-3 text-neutral-300 space-y-1">
            {content.contact.email && (
              <p>Email: <a href={`mailto:${content.contact.email}`} className="text-emerald-300 hover:underline">{content.contact.email}</a></p>
            )}
            {content.contact.linkedin && (
              <p>LinkedIn: <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">{content.contact.linkedin.replace('https://', '')}</a></p>
            )}
            {content.contact.github && (
              <p>GitHub: <a href={content.contact.github} target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">{content.contact.github.replace('https://', '')}</a></p>
            )}
            {content.contact.website && (
              <p>Website: <a href={content.contact.website} target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">{content.contact.website.replace('https://', '')}</a></p>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} {content.name}
        </div>
      </footer>
    </div>
  )
}

export default App

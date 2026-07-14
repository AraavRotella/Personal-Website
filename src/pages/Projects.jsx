import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/projects.js'
import { PageHeader, accentText, accentBorderHover } from '../components/ui.jsx'

function ProjectCard({ p, index }) {
  return (
    <Reveal delay={(index % 2) * 100}>
      <article className={`card h-full ${accentBorderHover[p.accent]}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className={`font-display text-2xl font-semibold ${accentText[p.accent]}`}>
              {p.name}
            </h2>
            <p className="mt-1 text-sm text-subtext1">{p.tagline}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-overlay1">{p.date}</span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-subtext0">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentText[p.accent]} bg-current`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4 font-mono text-sm">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="link-accent">
              GitHub ↗
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="link-accent">
              Live ↗
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <div className="container-page pb-24">
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        blurb="Full-stack ML systems, developer tooling, and one transformer trained from first principles. Every card links to code."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} index={i} />
        ))}
      </div>
    </div>
  )
}

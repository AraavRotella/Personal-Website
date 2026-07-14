import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/experience.js'
import { education } from '../data/profile.js'
import { PageHeader, accentText } from '../components/ui.jsx'

export default function Experience() {
  return (
    <div className="container-page pb-24">
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        blurb="Production ML systems at enterprise scale — platforms, pipelines, and models that shipped."
      />

      {experience.map((job) => (
        <Reveal key={job.company}>
          <article className="card border-surface1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="font-display text-2xl font-semibold text-text">{job.role}</h2>
                <p className="mt-1 text-subtext1">
                  {job.company} · {job.location}
                </p>
              </div>
              <span className="font-mono text-sm text-peach">{job.dates}</span>
            </div>

            <div className="mt-6 space-y-7">
              {job.sections.map((s) => (
                <div key={s.label}>
                  <h3 className={`font-mono text-sm font-semibold uppercase tracking-widest ${accentText[s.accent]}`}>
                    {s.label}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-subtext0">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${accentText[s.accent]}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      ))}

      {/* Education */}
      <Reveal>
        <div className="mt-10">
          <p className="eyebrow mb-4">Education</p>
          <article className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="font-display text-xl font-semibold text-text">
                  {education.school}
                </h2>
                <p className="mt-1 text-subtext1">{education.degree}</p>
              </div>
              <span className="font-mono text-sm text-peach">{education.grad}</span>
            </div>
            <p className="mt-3 text-sm text-subtext0">
              GPA {education.gpa} · {education.honors}
            </p>
            <p className="mt-1 text-sm text-subtext0">{education.abroad}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Reveal>
    </div>
  )
}

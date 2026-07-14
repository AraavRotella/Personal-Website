import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/profile.js'
import { PageHeader } from '../components/ui.jsx'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    accent: 'text-mauve',
    hover: 'hover:border-mauve/60 hover:shadow-glow-mauve',
    note: 'Fastest way to reach me — recruiter or human, both welcome.',
  },
  {
    label: 'GitHub',
    value: 'github.com/AraavRotella',
    href: profile.github,
    accent: 'text-teal',
    hover: 'hover:border-teal/60 hover:shadow-glow-teal',
    note: 'Where the code lives.',
  },
  {
    label: 'LinkedIn',
    value: 'in/araav-rotella',
    href: profile.linkedin,
    accent: 'text-blue',
    hover: 'hover:border-blue/60',
    note: 'For the professional paper trail.',
  },
]

export default function Contact() {
  return (
    <div className="container-page pb-24">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        blurb={`Targeting ${profile.targets.join(' · ')} roles for 2027. ${profile.location}.`}
      />

      <div className="grid gap-5 sm:grid-cols-3">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <a
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={`card block h-full ${c.hover}`}
            >
              <p className="eyebrow">{c.label}</p>
              <p className={`mt-2 break-all font-mono text-sm font-semibold ${c.accent}`}>
                {c.value}
              </p>
              <p className="mt-3 text-sm text-subtext0">{c.note}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-12 text-center">
          <a
            href={`mailto:${profile.email}?subject=Hello%20Araav`}
            className="btn-primary text-lg"
          >
            Say hello →
          </a>
        </div>
      </Reveal>
    </div>
  )
}

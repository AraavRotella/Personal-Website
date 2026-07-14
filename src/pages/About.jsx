import Reveal from '../components/Reveal.jsx'
import { PageHeader } from '../components/ui.jsx'

const interests = [
  {
    title: 'Cricket',
    accent: 'text-green',
    body: 'Club cricketer in the Washington Cricket League. Also plays volleyball and soccer.',
  },
  {
    title: 'Tabletop',
    accent: 'text-red',
    body: 'Long-running D&D campaigns — usually more invested in the party than the plot.',
  },
  {
    title: 'Reading',
    accent: 'text-peach',
    body: 'Red Rising loyalist. Howlers know.',
  },
  {
    title: 'Gaming',
    accent: 'text-blue',
    body: 'PC, PlayStation, and Nintendo — Monster Hunter, Baldur\u2019s Gate 3, League of Legends, Cyberpunk 2077.',
  },
]

export default function About() {
  return (
    <div className="container-page pb-24">
      <PageHeader eyebrow="About" title="Beyond the commits" />

      <div className="grid gap-10 lg:grid-cols-[auto,1fr]">
        <Reveal>
          <div className="blob-gradient mx-auto flex h-40 w-40 items-center justify-center rounded-[2.5rem] shadow-glow-pink lg:mx-0">
            <span className="font-display text-5xl font-bold text-crust">AR</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4 text-subtext0">
            <p>
              I'm a Computer Science major (Math minor) at the University of Maryland, currently
              interning as an AI/ML engineer at Allegis Group, where I ship production ML systems
              on Snowflake Cortex. I like the whole stack — model, pipeline, API, and the UI on
              top — and most of my projects exist because I wanted a tool that didn't exist yet.
            </p>
            <p>
              Starting September 2026 I'll be spending a semester abroad at UZH / ETH Zürich,
              trading College Park for the Alps until January 2027.
            </p>
            <p>
              Off the clock: cricket season, a D&D table, a very long reading backlog, and
              whatever Monster Hunter is asking of me this week.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {interests.map((it, i) => (
          <Reveal key={it.title} delay={i * 90}>
            <div className="card h-full">
              <h2 className={`font-display text-lg font-semibold ${it.accent}`}>{it.title}</h2>
              <p className="mt-2 text-sm text-subtext0">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

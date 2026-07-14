import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { profile, skills } from '../data/profile.js'
import { stats } from '../data/experience.js'
import { accentText } from '../components/ui.jsx'

/* Signature element: Araav introduced as a Python object, syntax-highlighted
   with true Catppuccin Mocha token colors (keywords mauve, strings green,
   functions blue, comments overlay). */
function CodeCard() {
  return (
    <div className="card overflow-x-auto border-surface1 shadow-glow-mauve">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red" />
        <span className="h-3 w-3 rounded-full bg-yellow" />
        <span className="h-3 w-3 rounded-full bg-green" />
        <span className="ml-3 font-mono text-xs text-overlay0">araav.py</span>
      </div>
      <pre className="font-mono text-[13px] leading-relaxed sm:text-sm">
        <code>
          <span className="text-mauve">class</span>{' '}
          <span className="text-yellow">Araav</span>
          <span className="text-subtext1">(</span>
          <span className="text-yellow">Engineer</span>
          <span className="text-subtext1">):</span>
          {'\n'}
          {'    '}
          <span className="text-blue">school</span>
          <span className="text-subtext1"> = </span>
          <span className="text-green">"UMD · CS + Math · '27"</span>
          {'\n'}
          {'    '}
          <span className="text-blue">now</span>
          <span className="text-subtext1"> = </span>
          <span className="text-green">"AI/ML Intern @ Allegis Group"</span>
          {'\n'}
          {'    '}
          <span className="text-blue">ships</span>
          <span className="text-subtext1"> = [</span>
          <span className="text-green">"ML pipelines"</span>
          <span className="text-subtext1">, </span>
          <span className="text-green">"RAG systems"</span>
          <span className="text-subtext1">,</span>
          {'\n'}
          {'             '}
          <span className="text-green">"full-stack apps"</span>
          <span className="text-subtext1">]</span>
          {'\n\n'}
          {'    '}
          <span className="text-mauve">def</span>{' '}
          <span className="text-blue">next_role</span>
          <span className="text-subtext1">(</span>
          <span className="text-peach">self</span>
          <span className="text-subtext1">):</span>
          {'\n'}
          {'        '}
          <span className="text-overlay1"># new grad SWE / AI-ML, 2027</span>
          {'\n'}
          {'        '}
          <span className="text-mauve">return</span>{' '}
          <span className="text-peach">self</span>
          <span className="text-subtext1">.</span>
          <span className="text-blue">hire</span>
          <span className="text-subtext1">()</span>
        </code>
      </pre>
    </div>
  )
}

export default function Home() {
  const allTech = [...skills.Languages, ...skills['ML & AI'], ...skills['Tools & Concepts']]

  return (
    <div className="container-page">
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">{profile.location}</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-text sm:text-6xl">
            Araav{' '}
            <span className="bg-gradient-to-r from-mauve via-pink to-peach bg-clip-text text-transparent">
              Rotella
            </span>
          </h1>
          <p className="mt-3 font-display text-xl text-subtext1">{profile.title}</p>
          <p className="mt-5 max-w-xl text-subtext0">{profile.pitch}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              See projects →
            </Link>
            <Link to="/resume" className="btn-ghost">
              Resume
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact
            </Link>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <CodeCard />
        </Reveal>
      </section>

      {/* Stat chips */}
      <section className="pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="card text-center">
                <p className={`font-display text-2xl font-bold ${accentText[s.accent]}`}>
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-xs text-overlay1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech cloud */}
      <section className="pb-20">
        <Reveal>
          <p className="eyebrow mb-5">Works with</p>
          <div className="flex flex-wrap gap-2.5">
            {allTech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Pointers to the two pillars */}
      <section className="grid gap-5 pb-24 sm:grid-cols-2">
        <Reveal>
          <Link
            to="/projects"
            className="card block hover:border-pink/60 hover:shadow-glow-pink"
          >
            <p className="eyebrow">Pillar one</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-pink">Projects</h2>
            <p className="mt-2 text-sm text-subtext0">
              Six builds — AI stylist microservice, algorithm visualizer, a transformer from
              scratch, and the tooling I use to run my own job search.
            </p>
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <Link
            to="/experience"
            className="card block hover:border-mauve/60 hover:shadow-glow-mauve"
          >
            <p className="eyebrow">Pillar two</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-mauve">Experience</h2>
            <p className="mt-2 text-sm text-subtext0">
              AI/ML Intern at Allegis Group — a production Snowflake Cortex platform, ingestion
              pipelines, and ML models over 12M+ rows.
            </p>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { PageHeader } from '../components/ui.jsx'

export default function Resume() {
  return (
    <div className="container-page pb-24">
      <PageHeader
        eyebrow="Resume"
        title="The one-pager"
        blurb="View it here or grab the PDF. The Projects and Experience pages carry the same content in full detail."
      />

      <Reveal>
        <div className="mb-6 flex flex-wrap gap-3">
          <a href="/resume.pdf" download="Araav_Rotella_Resume.pdf" className="btn-primary">
            Download PDF ↓
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
            Open in new tab ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="card overflow-hidden p-2 sm:p-3">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-[75vh] w-full rounded-xl"
            aria-label="Araav Rotella resume PDF"
          >
            {/* Fallback for browsers that don't render inline PDFs (most mobile) */}
            <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
              <p className="text-subtext0">
                Your browser can't display the PDF inline — no problem.
              </p>
              <a href="/resume.pdf" className="btn-primary">
                Download the resume
              </a>
              <p className="text-sm text-overlay1">
                Or browse the same content on the{' '}
                <Link to="/experience" className="link-accent">
                  Experience
                </Link>{' '}
                and{' '}
                <Link to="/projects" className="link-accent">
                  Projects
                </Link>{' '}
                pages.
              </p>
            </div>
          </object>
        </div>
      </Reveal>
    </div>
  )
}

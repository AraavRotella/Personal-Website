import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-surface0 bg-mantle">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-8 sm:flex-row">
        <p className="font-mono text-xs text-overlay1">
          © {new Date().getFullYear()} Araav Rotella · Catppuccin Mocha, naturally
        </p>
        <div className="flex gap-5 font-mono text-xs">
          <a href={`mailto:${profile.email}`} className="text-subtext0 transition hover:text-mauve">
            email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-subtext0 transition hover:text-teal"
          >
            github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-subtext0 transition hover:text-blue"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}

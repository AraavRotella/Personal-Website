import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-mono text-sm transition ${
      isActive ? 'text-mauve' : 'text-subtext0 hover:text-text'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-surface0/70 bg-base/85 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="blob-gradient flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold text-crust">
            AR
          </span>
          <span className="font-display font-semibold text-text">Araav Rotella</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg border border-surface1 px-3 py-1.5 font-mono text-sm text-subtext1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-surface0 bg-mantle md:hidden">
          <div className="container-page flex flex-col gap-4 py-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

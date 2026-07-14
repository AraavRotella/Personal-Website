// Central accent → class maps (Tailwind needs full class names statically).
export const accentText = {
  mauve: 'text-mauve',
  pink: 'text-pink',
  teal: 'text-teal',
  peach: 'text-peach',
  green: 'text-green',
  blue: 'text-blue',
  yellow: 'text-yellow',
}

export const accentBorderHover = {
  mauve: 'hover:border-mauve/60 hover:shadow-glow-mauve',
  pink: 'hover:border-pink/60 hover:shadow-glow-pink',
  teal: 'hover:border-teal/60 hover:shadow-glow-teal',
  peach: 'hover:border-peach/60 hover:shadow-glow-peach',
  green: 'hover:border-green/60',
  blue: 'hover:border-blue/60',
  yellow: 'hover:border-yellow/60',
}

export const accentBg = {
  mauve: 'bg-mauve',
  pink: 'bg-pink',
  teal: 'bg-teal',
  peach: 'bg-peach',
  green: 'bg-green',
  blue: 'bg-blue',
  yellow: 'bg-yellow',
}

export function PageHeader({ eyebrow, title, blurb }) {
  return (
    <div className="pb-10 pt-14 sm:pt-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text sm:text-5xl">{title}</h1>
      {blurb && <p className="mt-4 max-w-2xl text-subtext0">{blurb}</p>}
    </div>
  )
}

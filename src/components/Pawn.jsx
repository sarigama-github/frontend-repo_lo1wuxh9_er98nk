import React from 'react'

// SVG Pawn with subtle float/rotate animations controlled by CSS variables
export default function Pawn({ size = 28, delay = 0, x = 50, y = 50, clickable = false, onClick }) {
  const style = {
    left: `${x}%`,
    top: `${y}%`,
    animationDelay: `${delay}s`,
    width: size,
    height: size,
  }
  return (
    <button
      className={`pawn ${clickable ? 'pawn-clickable' : ''}`}
      style={style}
      onClick={onClick}
      aria-label={clickable ? 'Secret pawn' : 'Decorative pawn'}
    >
      <svg viewBox="0 0 64 64" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6e27a"/>
            <stop offset="50%" stopColor="#d4b24d"/>
            <stop offset="100%" stopColor="#b08d2b"/>
          </linearGradient>
          <linearGradient id="silver" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6e9ef"/>
            <stop offset="50%" stopColor="#c6cbd3"/>
            <stop offset="100%" stopColor="#9aa3af"/>
          </linearGradient>
        </defs>
        <g filter="url(#shadow)">
          <circle cx="32" cy="18" r="10" fill="url(#silver)"/>
          <path d="M22 28c0 6 4 10 10 10s10-4 10-10" fill="url(#gold)"/>
          <path d="M18 52h28c3 0 4-3 2-5-4-4-11-9-16-9s-12 5-16 9c-2 2-1 5 2 5z" fill="url(#silver)"/>
          <rect x="14" y="52" width="36" height="6" rx="2" fill="#0f172a" opacity=".8"/>
        </g>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.25"/>
        </filter>
      </svg>
    </button>
  )
}

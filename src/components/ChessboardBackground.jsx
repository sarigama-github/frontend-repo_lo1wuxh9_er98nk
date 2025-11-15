import React, { useEffect, useRef } from 'react'

// Animated chessboard using CSS gradients with perspective and parallax
// - 3D-like depth via transform + layered gradients
// - Parallax on mouse/tilt moves via CSS variables
// - Mobile fallback disables parallax
// - Respects reduced motion

export default function ChessboardBackground({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onMove = (e) => {
      if (prefersReduced) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      el.style.setProperty('--mx', (x - 0.5).toFixed(3))
      el.style.setProperty('--my', (y - 0.5).toFixed(3))
    }

    const onLeave = () => {
      if (prefersReduced) return
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="chessboard-bg">
      {children}
    </div>
  )
}

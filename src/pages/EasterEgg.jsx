import React, { useState } from 'react'

export default function EasterEgg(){
  const [revealed,setRevealed]=useState(false)
  return (
    <section className="max-w-3xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white">Recruiter Special</h1>
      <p className="text-slate-300 mt-2">You found the quiet tactic. Here’s your puzzle and the hidden notes.</p>

      <div className="mt-6 rounded-2xl border border-white/10 p-6 bg-white/5 text-slate-200">
        <p className="font-semibold">2‑move chess puzzle</p>
        <p className="mt-2">White to move: your rook and bishop weave a net. Step one, pin with rook; step two, deliver mate with bishop along the long diagonal.</p>
        <button onClick={()=>setRevealed(true)} className="mt-4 px-4 py-2 rounded-full bg-[#d4af37] text-black hover:brightness-110">Reveal Hidden Content</button>
        {revealed && (
          <div className="mt-4 space-y-2">
            <p><span className="font-semibold">Personal poem:</span> I work like water: steady, shaping, quietly decisive.</p>
            <p><span className="font-semibold">Resumes summary:</span> AIML — models, metrics, deployment. Web — UX craft, performance, accessibility.</p>
            <p><span className="font-semibold">Mindset:</span> I choose momentum over drama; feedback over pride; teams over titles.</p>
          </div>
        )}
      </div>
    </section>
  )
}

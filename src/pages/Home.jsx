import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="pt-10 md:pt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">Sparsh N. — Strategist. Team Leader. Coder. Poet.</h1>
        <p className="mt-4 text-slate-300 max-w-2xl">In the quiet between moves, I map the board and breathe. Code becomes a plan; teamwork makes it graceful.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/skills" className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white rounded-full px-5 py-2.5 hover:bg-white/10">Openings (Skills)</Link>
          <Link to="/projects" className="inline-flex items-center gap-2 bg-[#d4af37] text-black rounded-full px-5 py-2.5 hover:brightness-110">Middlegame (Projects)</Link>
          <Link to="/hire" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2.5 hover:bg-slate-100">Endgame (Chat)</Link>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {["Openings teach patience; I bring that into code reviews.","In standups, I move one square: forward, honest, enough.","A sprint is a board — see lanes, pass early, finish together.","Edge cases are corners; I walk them before night falls.","Silence before deploy: the calm that cuts noise.","We debug like poets — fewer words, truer meaning.","Latency is friction; I sand it to a soft glide.","Strategy hums beneath — team first, ego last.","Tests are sentries; they stand guard while we sleep.","A roadmap is a poem with deadlines. Keep the meter."].map((l,i)=> (
          <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/5 text-slate-200">{l}</div>
        ))}
      </div>
    </section>
  )
}

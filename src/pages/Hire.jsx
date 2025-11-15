import React, { useState } from 'react'

const dataset = {
  intro:[
    "Hello, I’m AI‑Sparsh — a calm strategist in chat form.",
    "Ask about my work, skills, or a poem. I’ll keep it crisp.",
    "Ready when you are — opening, middlegame, or endgame?"
  ],
  qa:[
    {q:"Summarize your profile", a:"Chess-minded strategist, team-first throwball captain, AIML + web developer, and a poet who solves calmly."},
    {q:"Top strengths?", a:"Pattern recognition, clear communication, and end-to-end execution."},
    {q:"Biggest weakness?", a:"I over-prepare. I manage it with tight scoping and early demos."},
    {q:"Emotion ML — goal?", a:"Detect facial emotion in real-time to measure sentiment and improve UX."},
    {q:"Emotion ML — approach?", a:"CNN backbone with data augmentation; validated on held-out video frames."},
    {q:"Emotion ML — impact?", a:"-14% misclassification vs baseline; dashboard for live sessions."},
    {q:"Gender/Age — summary", a:"Lightweight model for age bands and gender; optimized for edge inference."},
    {q:"Gender/Age — metrics", a:"~92% gender accuracy; ±4.3 years MAE on age bands."},
    {q:"Mask detection — summary", a:"Deployed detector to ensure compliance in crowded spaces."},
    {q:"Mask detection — impact", a:"Cut manual checks by 70%; latency ~40ms on webcam input."},
    {q:"Web stack?", a:"React, Tailwind, Vite; FastAPI when backend is needed; MongoDB for persistence."},
    {q:"Tools you use?", a:"GitHub, Docker, Linux, AWS basics, Colab, Jupyter, Figma for handoff."},
    {q:"Team leadership", a:"Set roles, call plays, and keep feedback loops short and kind."},
    {q:"Internship 1 — story", a:"Revamped a data pipeline; reduced errors 38% and sped reports 2.4x."},
    {q:"Internship 2 — story", a:"Prototyped a model; A/B showed +11% task success in onboarding."},
    {q:"Why hire you?", a:"Calm execution, strategic clarity, and measurable impact. I ship."}
  ],
  whyHire:[
    "I blend strategy with delivery: clear plans, shipped outcomes, calm communication.",
    "I measure impact: accuracy gains, latency cuts, and adoption metrics.",
    "I support teams: unblocking quickly and sharing context generously."
  ],
  projectLookup: {
    emotion_detection_ml: "Emotion ML — CNN + augmentation; -14% error vs baseline; live session dashboard.",
    gender_age_recognition: "Gender/Age — ~92% gender accuracy; ±4.3y MAE; optimized for edge.",
    face_mask_detection: "Mask detector — ~40ms latency; reduced manual checks 70%.",
    portfolio_website: "Portfolio — this site; interactive hero; skills, projects, and AI-lite chat.",
    todo_app: "To‑Do — clean UI, keyboard shortcuts, offline-ready.",
    quiz_app: "Quiz — timed questions, instant feedback, review mode."
  },
  poemMode:[
    "Between noise and need, I choose signal.",
    "The shortest path is empathy, then code.",
    "Every bug is a hint in disguise.",
    "Teamwork is tempo; I set the beat.",
    "Strategy is a soft voice that moves mountains."
  ],
  fallback:[
    "I didn’t catch that — try asking about projects, skills, or a poem.",
    "Let’s keep it crisp. Ask me for metrics, tech stack, or a short verse.",
    "Unsure what you mean — want the recruiter brief?"
  ]
}

export default function Hire(){
  const [q,setQ]=useState('')
  const [history,setHistory]=useState([{role:'bot',text:dataset.intro[0]}])
  const [open,setOpen]=useState(false)

  const search=(query)=>{
    if(!query) return dataset.fallback[0]
    const lower=query.toLowerCase()
    const found=dataset.qa.find(item=> lower.includes(item.q.split(' — ')[0].toLowerCase()) || lower.includes(item.q.toLowerCase()))
    if(found) return found.a
    if(lower.includes('why hire')) return dataset.whyHire.join(' ')
    if(lower.includes('poem')) return dataset.poemMode[Math.floor(Math.random()*dataset.poemMode.length)]
    for(const key in dataset.projectLookup){
      if(lower.includes(key.replace(/_/g,' ')) || lower.includes(key)) return dataset.projectLookup[key]
    }
    return dataset.fallback[Math.floor(Math.random()*dataset.fallback.length)]
  }

  const ask=()=>{
    const text=q.trim(); if(!text) return
    const a=search(text)
    setHistory(h=>[...h,{role:'user',text},{role:'bot',text:a}])
    setQ('')
  }

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Endgame — Chat + Hire Me</h2>
      <p className="text-slate-300 mt-2">Ask for projects, metrics, or a short poem. Crisp, confident, slightly poetic.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="h-64 overflow-y-auto rounded-lg border border-white/10 p-3 bg-black/20">
            {history.map((m,i)=> (
              <div key={i} className={`mb-2 ${m.role==='bot'?'text-slate-200':'text-slate-300'}`}>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 mr-2">{m.role}</span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>{if(e.key==='Enter') ask()}} placeholder="Ask AI‑Sparsh about projects, skills, or a poem…" className="flex-1 rounded-lg border border-white/15 bg-black/30 text-white placeholder:text-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]" />
            <button onClick={ask} className="px-4 py-2 rounded-lg bg-[#d4af37] text-black font-medium hover:brightness-110">Ask</button>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-bold text-white">Recruiter Brief</h3>
          <ul className="mt-3 text-slate-200 space-y-1">
            <li>Projects shipped: 6</li>
            <li>Internships: 2</li>
            <li>Impact: −14% error • +11% task success • 70% fewer checks</li>
          </ul>
          <p className="mt-3 text-slate-300">I’m Sparsh N., a calm strategist who ships. I blend AIML with clean web experiences, lead teams with clarity, and measure results. If you value signal over noise and outcomes over output, we’ll work well together.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="/api/resume" className="px-4 py-2 rounded-full bg-white text-black hover:bg-slate-100">Download Resume</a>
            <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-full bg-[#d4af37] text-black hover:brightness-110">Open Recruiter Modal</button>
            <a href="#contact" className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20">Book Interview</a>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-lg w-full bg-white rounded-2xl p-6 text-slate-900 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold">Recruiter Brief</h4>
                <p className="text-slate-600 mt-1">Fast facts, a 30s pitch, and handy actions.</p>
              </div>
              <button onClick={()=>setOpen(false)} className="text-slate-500 hover:text-slate-900">Close</button>
            </div>
            <div className="mt-4">
              <ul className="space-y-1 list-disc list-inside">
                <li>Projects shipped: 6</li>
                <li>Internships: 2</li>
                <li>Impact: −14% error • +11% task success • 70% fewer checks</li>
              </ul>
              <p className="mt-3">I’m Sparsh N., a calm strategist who ships. I blend AIML with clean web experiences, lead teams with clarity, and measure results. From emotion detection to edge-first demographics and compliance tools, I focus on reliable delivery and human‑centered impact.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="/api/resume?type=aiml" className="px-4 py-2 rounded-full bg-black text-white">Download AIML Resume</a>
                <a href="/api/resume?type=web" className="px-4 py-2 rounded-full bg-black text-white">Download Web Resume</a>
                <a href="#contact" className="px-4 py-2 rounded-full bg-[#d4af37] text-black">Book Interview</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

import React from 'react'

export default function Team(){
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Team Plays</h2>
      <p className="text-slate-300 mt-2">Internships, leadership, and what teammates say.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-bold text-white">Internship — Data Pipeline Revamp</h3>
          <ul className="mt-3 space-y-2 text-slate-200 list-disc list-inside">
            <li><span className="font-semibold">Problem:</span> Daily analytics unstable; late and error-prone.</li>
            <li><span className="font-semibold">Contribution:</span> Rebuilt transforms, added tests, and improved logging.</li>
            <li><span className="font-semibold">Result:</span> Errors down 38%; reports 2.4× faster; on-call pages dropped.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h3 className="text-xl font-bold text-white">Internship — Onboarding Personalization</h3>
          <ul className="mt-3 space-y-2 text-slate-200 list-disc list-inside">
            <li><span className="font-semibold">Problem:</span> Cold-start onboarding felt generic and slow.</li>
            <li><span className="font-semibold">Contribution:</span> Prototyped age-band/gender signal with privacy guardrails; lightweight API.</li>
            <li><span className="font-semibold">Result:</span> +11% task success; drop-offs down 9%; zero PII storage.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 p-6 bg-white/5">
        <h3 className="text-xl font-bold text-white">Throwball — Leadership Playbook</h3>
        <p className="mt-2 text-slate-200">Serve left to draw blockers, quick set mid, then diagonal pass to the weak-side finisher. Call tempo, rotate roles, keep comms crisp.</p>
        <div className="mt-3 text-slate-300">
          <p>Teammates say:</p>
          <ul className="list-disc list-inside">
            <li>“Sparsh calls plays that feel obvious after — that’s strategy working.”</li>
            <li>“Steady voice under pressure; lifts the team without noise.”</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

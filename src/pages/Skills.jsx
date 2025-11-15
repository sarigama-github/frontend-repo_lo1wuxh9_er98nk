import React from 'react'

export default function Skills(){
  const groups = [
    {title:'AIML', items:[
      {name:'CNNs, Transfer Learning', where:'Emotion ML, Mask Detection'},
      {name:'Model Optimization (ONNX/TFLite)', where:'Gender/Age, Mask Detection'},
      {name:'OpenCV, Data Augmentation', where:'Emotion ML'},
      {name:'Metrics & Validation', where:'All case studies'}
    ]},
    {title:'Web Dev', items:[
      {name:'React, Vite, Tailwind', where:'Portfolio, To‑Do, Quiz'},
      {name:'FastAPI, REST', where:'ML service wrappers'},
      {name:'State & Testing', where:'Quiz app review mode'},
      {name:'Perf & Accessibility', where:'Portfolio polish'}
    ]},
    {title:'Tools / Cloud', items:[
      {name:'Git, GitHub Actions', where:'All repos'},
      {name:'Docker', where:'Model packaging'},
      {name:'AWS basics', where:'Simple deploys, storage'},
      {name:'Colab/Jupyter', where:'Experimentation'}
    ]},
    {title:'Soft Skills', items:[
      {name:'Leadership & Communication', where:'Throwball; standups'},
      {name:'Planning & Prioritization', where:'Roadmaps, sprints'},
      {name:'Calm Problem-Solving', where:'Incidents, late-night fixes'},
      {name:'Teaching & Docs', where:'Onboarding notes; demos'}
    ]},
  ]
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Openings</h2>
      <p className="text-slate-300 mt-2">Interactive skill‑tree with where each skill was used.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {groups.map((g,idx)=> (
          <div key={idx} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-xl font-bold text-white">{g.title}</h3>
            <ul className="mt-3 space-y-2 text-slate-200">
              {g.items.map((it,i)=> (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span><span className="font-medium">{it.name}</span><span className="text-slate-400"> — Where used: {it.where}</span></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

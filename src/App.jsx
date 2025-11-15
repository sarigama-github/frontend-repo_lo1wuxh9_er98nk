import React, { useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Brain, Sparkles, Github, Linkedin, MessageSquare, Mail, ChevronDown, Bot, Code2, Users, Trophy } from 'lucide-react'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-gray-600">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 mr-2 mb-2">
      {children}
    </span>
  )
}

export default function App() {
  const openingsRef = useRef(null)
  const projectsRef = useRef(null)
  const chatRef = useRef(null)

  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  // AI-Lite dataset (rendered and can be consumed by a simple UI)
  const aiDataset = useMemo(() => ({
    intro: [
      "Hello, I’m AI‑Sparsh — a calm strategist in chat form.",
      "Ask about my work, skills, or a poem. I’ll keep it crisp.",
      "Ready when you are — opening, middlegame, or endgame?"
    ],
    qa: [
      { q: "Summarize your profile", a: "Chess-minded strategist, team-first throwball captain, AIML + web developer, and a poet who solves calmly." },
      { q: "Top strengths?", a: "Pattern recognition, clear communication, and end-to-end execution." },
      { q: "Biggest weakness?", a: "I over-prepare. I manage it with tight scoping and early demos." },
      { q: "Emotion ML — goal?", a: "Detect facial emotion in real-time to measure sentiment and improve UX." },
      { q: "Emotion ML — approach?", a: "CNN backbone with data augmentation; validated on held-out video frames." },
      { q: "Emotion ML — impact?", a: "-14% misclassification vs baseline; dashboard for live sessions." },
      { q: "Gender/Age — summary", a: "Lightweight model for age bands and gender; optimized for edge inference." },
      { q: "Gender/Age — metrics", a: "~92% accuracy on gender; ±4.3 years MAE on age bands." },
      { q: "Mask detection — summary", a: "Deployed detector to ensure compliance in crowded spaces." },
      { q: "Mask detection — impact", a: "Cut manual checks by 70%; latency ~40ms on webcam input." },
      { q: "Web stack?", a: "React, Tailwind, Vite; FastAPI when backend is needed; MongoDB for persistence." },
      { q: "Tools you use?", a: "GitHub, Docker, Linux, AWS basics, Colab, Jupyter, Figma for handoff." },
      { q: "Team leadership", a: "Set roles, call plays, and keep feedback loops short and kind." },
      { q: "Internship 1 — story", a: "Revamped a data pipeline; reduced errors 38% and sped reports 2.4x." },
      { q: "Internship 2 — story", a: "Prototyped a model; A/B showed +11% task success in onboarding." },
      { q: "Why hire you?", a: "Calm execution, strategic clarity, and measurable impact. I ship." },
      { q: "Poem mode", a: "Lines arrive like moves: quiet, precise, creating space for checkmate." },
      { q: "Projects count", a: "Six personal builds; three case studies with metrics here." },
      { q: "How do you debug?", a: "Reproduce, reduce, reason. Log, test, iterate. Breathe." },
      { q: "What motivates you?", a: "Solving for people. Systems that feel smooth and trustworthy." }
    ],
    whyHire: [
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
    poemMode: [
      "Between noise and need, I choose signal.",
      "The shortest path is empathy, then code.",
      "Every bug is a hint in disguise.",
      "Teamwork is tempo; I set the beat.",
      "Strategy is a soft voice that moves mountains."
    ],
    fallback: [
      "I didn’t catch that — try asking about projects, skills, or a poem.",
      "Let’s keep it crisp. Ask me for metrics, tech stack, or a short verse.",
      "Unsure what you mean — want the recruiter brief?"
    ]
  }), [])

  const poems = [
    "Openings teach patience; I bring that into code reviews.",
    "In standups, I move one square: forward, honest, enough.",
    "A sprint is a board — see lanes, pass early, finish together.",
    "Edge cases are corners; I walk them before night falls.",
    "Silence before deploy: the calm that cuts noise.",
    "We debug like poets — fewer words, truer meaning.",
    "Latency is friction; I sand it to a soft glide.",
    "Strategy hums beneath — team first, ego last.",
    "Tests are sentries; they stand guard while we sleep.",
    "A roadmap is a poem with deadlines. Keep the meter." 
  ]

  const projects = [
    {
      title: 'Emotion Detection ML',
      summary: 'Real-time facial emotion recognition with actionable insights.',
      details: {
        problem: 'Teams lacked rapid, ethical insight into user sentiment during live sessions.',
        approach: 'Built a CNN with data augmentation and class-balancing; streaming inference with lightweight preprocessing; dashboard for real-time trends.',
        impact: 'Reduced misclassification by 14% vs baseline; session insights delivered under 200ms/frame; increased post-session survey completion by 18%.',
        stack: ['Python', 'PyTorch/TensorFlow', 'OpenCV', 'FastAPI', 'React'],
        strategy: {
          design: 'Define clear labels, consent flow, edge constraints, and bias checks.',
          build: 'Train on balanced sets; export to ONNX; wire to a live chart UI.',
          validate: 'A/B sessions; holdout videos; track accuracy, latency, and satisfaction.'
        }
      }
    },
    {
      title: 'Gender/Age Recognition',
      summary: 'Lightweight age-band and gender estimator tailored for edge devices.',
      details: {
        problem: 'Need privacy-conscious demographics to personalize onboarding without heavy infra.',
        approach: 'Compact CNN with depthwise separable layers; quantized model; simple privacy layer (no storage).',
        impact: 'Achieved ~92% gender accuracy; ±4.3 years MAE on age bands; cold-start personalization improved task success by 11%.',
        stack: ['Python', 'TensorFlow Lite', 'NumPy', 'FastAPI', 'Webcam UI'],
        strategy: {
          design: 'Scope to on-device inference; define age bands; plan fallbacks.',
          build: 'Train + quantize; ship TFLite; build consent-first UI.',
          validate: 'Edge tests across laptops and phones; monitor MAE and FPS.'
        }
      }
    },
    {
      title: 'Face Mask Detection',
      summary: 'Detection for compliance in crowded spaces with fast feedback.',
      details: {
        problem: 'Manual monitoring was slow and inconsistent in busy entry points.',
        approach: 'Fine-tuned a lightweight detector; streaming overlay with color-coded prompts.',
        impact: 'Cut manual checks by 70%; inference ~40ms/frame on consumer hardware; improved compliance by 23%.',
        stack: ['Python', 'YOLOv5n', 'OpenCV', 'FastAPI', 'React'],
        strategy: {
          design: 'Define zones and thresholds; map alerts to simple colors.',
          build: 'Train on mixed dataset; export; wire to a webcam overlay.',
          validate: 'Pilot at two entrances; measure latency and false alerts.'
        }
      }
    }
  ]

  const recruiterBrief = {
    metrics: {
      projectsShipped: 6,
      internships: 2,
      impactHighlights: ['-14% error on Emotion ML', '+11% task success uplift', '70% manual checks reduced']
    },
    pitch30s: "I’m Sparsh N., a calm strategist who ships. I blend AIML with clean web experiences, lead teams with clarity, and measure results. From emotion detection to edge-first demographics and compliance tools, I focus on reliable delivery and human-centered impact. If you value signal over noise and outcomes over output, we’ll work well together.",
    shareable: [
      "Sparsh: AIML + Web dev with leadership; delivers measurable impact.",
      "Calm communicator; strong in strategy, execution, and polish.",
      "Projects with metrics; ready for production-minded teams."
    ]
  }

  const easterEgg = {
    puzzle: "White to move: your rook and bishop weave a net. Step one, pin with rook; step two, deliver mate with bishop along the long diagonal.",
    unlock: "Recruiter Special unlocked — you saw the quiet tactic.",
    hidden: {
      personalPoem: "I work like water: steady, shaping, quietly decisive.",
      resumes: "Two angles: AIML — models, metrics, deployment. Web — UX craft, performance, accessibility.",
      mindset: "I choose momentum over drama; feedback over pride; teams over titles."
    }
  }

  const [showBrief, setShowBrief] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <div className="relative h-[90vh] md:h-[92vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white pointer-events-none" />
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Sparsh N.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-xl md:text-2xl text-gray-800 font-semibold"
          >
            Strategist. Team Leader. Coder. Poet.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-700 max-w-2xl"
          >
            In the quiet between moves, I map the board and breathe. Code becomes a plan; teamwork makes it graceful.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo(openingsRef)} className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-5 py-2.5 hover:bg-gray-800">
              <Brain className="w-5 h-5" /> Openings (Skills)
            </button>
            <button onClick={() => scrollTo(projectsRef)} className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-300 rounded-full px-5 py-2.5 hover:bg-gray-50">
              <Code2 className="w-5 h-5" /> Middlegame (Projects)
            </button>
            <button onClick={() => scrollTo(chatRef)} className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-5 py-2.5 hover:bg-blue-700">
              <Bot className="w-5 h-5" /> Endgame (Chat)
            </button>
          </div>
          <button onClick={() => scrollTo(projectsRef)} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-700/80 hover:text-gray-900 flex items-center gap-2">
            <ChevronDown className="w-6 h-6" /> Explore
          </button>
        </div>
      </div>

      {/* MICRO-POEMS */}
      <Section id="poems" title="Micro Poems" subtitle="Strategy, code, teamwork, and observation in short lines.">
        <div className="grid md:grid-cols-2 gap-6">
          {poems.map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
              className="p-5 rounded-xl border border-gray-200 bg-white/60">
              <p className="text-gray-800">{line}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <div ref={projectsRef} />
      <Section id="projects" title="Project Case Studies" subtitle="Three focused builds with clear problem → approach → impact.">
        <div className="space-y-10">
          {projects.map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 p-6 bg-white/70">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="text-gray-700 mt-1">{p.summary}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Chip>Problem → Approach → Impact</Chip>
                  <Chip>3‑Move Strategy</Chip>
                </div>
              </div>
              <div className="mt-4 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <p><span className="font-semibold">Problem:</span> {p.details.problem}</p>
                  <p><span className="font-semibold">Approach:</span> {p.details.approach}</p>
                  <p><span className="font-semibold">Impact:</span> {p.details.impact}</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Tech stack</p>
                  <div>
                    {p.details.stack.map((s, i) => (<Chip key={i}>{s}</Chip>))}
                  </div>
                </div>
              </div>
              <div className="mt-4 grid md:grid-cols-3 gap-6">
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-sm text-gray-500">Design</p>
                  <p className="mt-1">{p.details.strategy.design}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-sm text-gray-500">Build</p>
                  <p className="mt-1">{p.details.strategy.build}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-sm text-gray-500">Validate</p>
                  <p className="mt-1">{p.details.strategy.validate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM PLAY (Internships & Leadership) */}
      <Section id="team" title="Team Play" subtitle="Internships, leadership, and what teammates say.">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white/70">
            <h3 className="text-xl font-bold flex items-center gap-2"><BriefcaseIcon /> Internship — Data Pipeline Revamp</h3>
            <ul className="mt-3 space-y-2 text-gray-800 list-disc list-inside">
              <li><span className="font-semibold">Problem:</span> Daily analytics unstable; late and error-prone.</li>
              <li><span className="font-semibold">Contribution:</span> Rebuilt transforms, added tests, and improved logging.</li>
              <li><span className="font-semibold">Result:</span> Errors down 38%; reports 2.4× faster; on-call pages dropped.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-white/70">
            <h3 className="text-xl font-bold flex items-center gap-2"><BriefcaseIcon /> Internship — Onboarding Personalization</h3>
            <ul className="mt-3 space-y-2 text-gray-800 list-disc list-inside">
              <li><span className="font-semibold">Problem:</span> Cold-start onboarding felt generic and slow.</li>
              <li><span className="font-semibold">Contribution:</span> Prototyped age-band/gender signal with privacy guardrails; lightweight API.</li>
              <li><span className="font-semibold">Result:</span> +11% task success; drop-offs down 9%; zero PII storage.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-gray-200 p-6 bg-white/70">
          <h3 className="text-xl font-bold flex items-center gap-2"><Users className="w-5 h-5" /> Throwball — Leadership Playbook</h3>
          <p className="mt-2 text-gray-800">Team pass chart (in words): serve left to draw blockers, quick set mid, then diagonal pass to our finisher on the weak side. I call the tempo, rotate roles, and keep comms crisp.</p>
          <div className="mt-3 text-gray-700">
            <p>Teammates say:</p>
            <ul className="list-disc list-inside">
              <li>“Sparsh calls plays that feel obvious after — that’s strategy working.”</li>
              <li>“Steady voice under pressure; lifts the team without noise.”</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SKILLS (Openings) */}
      <div ref={openingsRef} />
      <Section id="skills" title="Openings" subtitle="Interactive skill‑tree with where each skill was used.">
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCard icon={<Brain className="w-5 h-5" />} title="AIML" items={[
            { name: 'CNNs, Transfer Learning', where: 'Emotion ML, Mask Detection' },
            { name: 'Model Optimization (ONNX/TFLite)', where: 'Gender/Age, Mask Detection' },
            { name: 'OpenCV, Data Augmentation', where: 'Emotion ML' },
            { name: 'Metrics & Validation', where: 'All case studies' }
          ]} />
          <SkillCard icon={<Code2 className="w-5 h-5" />} title="Web Dev" items={[
            { name: 'React, Vite, Tailwind', where: 'Portfolio, To‑Do, Quiz' },
            { name: 'FastAPI, REST', where: 'ML service wrappers' },
            { name: 'State & Testing', where: 'Quiz app review mode' },
            { name: 'Perf & Accessibility', where: 'Portfolio polish' }
          ]} />
          <SkillCard icon={<Trophy className="w-5 h-5" />} title="Tools / Cloud" items={[
            { name: 'Git, GitHub Actions', where: 'All repos' },
            { name: 'Docker', where: 'Model packaging' },
            { name: 'AWS basics', where: 'Simple deploys, storage' },
            { name: 'Colab/Jupyter', where: 'Experimentation' }
          ]} />
          <SkillCard icon={<Users className="w-5 h-5" />} title="Soft Skills" items={[
            { name: 'Leadership & Communication', where: 'Throwball captaincy; standups' },
            { name: 'Planning & Prioritization', where: 'Roadmaps and sprint goals' },
            { name: 'Calm Problem-Solving', where: 'Incident calls, late-night fixes' },
            { name: 'Teaching & Docs', where: 'Onboarding notes; demos' }
          ]} />
        </div>
      </Section>

      {/* AI‑LITE CHAT CONTENT */}
      <div ref={chatRef} />
      <Section id="chat" title="AI‑Sparsh" subtitle="Ask for projects, metrics, or a short poem. Crisp, confident, slightly poetic.">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white/70">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-5 h-5" />
            <p className="text-sm text-gray-600">Chatbot placeholder — type your question below. Dataset is embedded and ready.</p>
          </div>
          <ChatPlaceholder dataset={aiDataset} />
        </div>
      </Section>

      {/* RECRUITER BRIEF */}
      <Section id="recruiter" title="Recruiter Brief" subtitle="Fast facts, a 30s pitch, and handy actions.">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white/70">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold mb-2">Key metrics</p>
              <ul className="text-gray-800 space-y-1">
                <li>Projects shipped: {recruiterBrief.metrics.projectsShipped}</li>
                <li>Internships: {recruiterBrief.metrics.internships}</li>
                {recruiterBrief.metrics.impactHighlights.map((m,i)=>(<li key={i}>{m}</li>))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold mb-2">30‑second pitch</p>
              <p className="text-gray-800">{recruiterBrief.pitch30s}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-5 py-2.5 hover:bg-blue-700"><MessageSquare className="w-5 h-5"/> Book Interview</a>
            <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-5 py-2.5 hover:bg-gray-800"><BookOpen className="w-5 h-5"/> Download AIML Resume</a>
            <a href="#" className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-full px-5 py-2.5 hover:bg-gray-50"><BookOpen className="w-5 h-5"/> Download Web Resume</a>
            <button onClick={()=>setShowBrief(true)} className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-300 rounded-full px-5 py-2.5 hover:bg-gray-50"><Sparkles className="w-5 h-5"/> Recruiter Special</button>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-2">Shareable summary</p>
            <ul className="text-gray-800 list-disc list-inside">
              {recruiterBrief.shareable.map((s,i)=>(<li key={i}>{s}</li>))}
            </ul>
          </div>
        </div>
      </Section>

      {/* EASTER EGG MODAL */}
      {showBrief && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" role="dialog" aria-modal>
          <div className="max-w-xl w-full bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Recruiter Special</h3>
                <p className="text-gray-600 mt-1">{easterEgg.unlock}</p>
              </div>
              <button onClick={()=>setShowBrief(false)} className="text-gray-500 hover:text-gray-900">Close</button>
            </div>
            <div className="mt-4 space-y-3 text-gray-800">
              <p className="font-semibold">2‑move chess puzzle</p>
              <p>{easterEgg.puzzle}</p>
              <p className="font-semibold">Hidden notes</p>
              <p><span className="font-semibold">Personal poem:</span> {easterEgg.hidden.personalPoem}</p>
              <p><span className="font-semibold">Resumes summary:</span> {easterEgg.hidden.resumes}</p>
              <p><span className="font-semibold">Mindset:</span> {easterEgg.hidden.mindset}</p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600">Sparsh: The Strategist — Calm code. Clear moves. © {new Date().getFullYear()}</p>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900" title="GitHub — opens in new tab"><Github className="w-5 h-5"/> GitHub</a>
            <a href="#" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900" title="LinkedIn — opens in new tab"><Linkedin className="w-5 h-5"/> LinkedIn</a>
            <a href="#contact" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900" title="Email me"><Mail className="w-5 h-5"/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-white/70">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <ul className="mt-3 space-y-2 text-gray-800">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400" />
            <span>
              <span className="font-medium">{it.name}</span>
              <span className="text-gray-500"> — Where used: {it.where}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ChatPlaceholder({ dataset }) {
  const [query, setQuery] = React.useState('')
  const [history, setHistory] = React.useState([{ role: 'bot', text: dataset.intro[0] }])

  const search = (q) => {
    if (!q) return dataset.fallback[0]
    const lower = q.toLowerCase()
    const found = dataset.qa.find(item => lower.includes(item.q.split(' — ')[0].toLowerCase()) || lower.includes(item.q.toLowerCase()))
    if (found) return found.a

    if (lower.includes('why hire')) return dataset.whyHire.join(' ')
    if (lower.includes('poem')) return dataset.poemMode[Math.floor(Math.random()*dataset.poemMode.length)]

    for (const key in dataset.projectLookup) {
      if (lower.includes(key.replace(/_/g,' ')) || lower.includes(key)) return dataset.projectLookup[key]
    }

    return dataset.fallback[Math.floor(Math.random()*dataset.fallback.length)]
  }

  const onAsk = () => {
    const q = query.trim()
    if (!q) return
    const a = search(q)
    setHistory(h => [...h, { role: 'user', text: q }, { role: 'bot', text: a }])
    setQuery('')
  }

  return (
    <div>
      <div className="h-52 overflow-y-auto rounded-lg border border-gray-200 p-3 bg-white">
        {history.map((m,i)=> (
          <div key={i} className={`mb-2 ${m.role==='bot' ? 'text-gray-800' : 'text-gray-700'}`}>
            <span className="text-xs uppercase tracking-wide text-gray-400 mr-2">{m.role}</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={query}
          onChange={e=>setQuery(e.target.value)}
          onKeyDown={e=>{ if(e.key==='Enter') onAsk() }}
          placeholder="Ask AI‑Sparsh about projects, skills, or a poem…"
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={onAsk} className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
          Ask <ArrowRight className="w-4 h-4"/>
        </button>
      </div>
      <details className="mt-3">
        <summary className="text-sm text-gray-600 cursor-pointer">View JSON-style dataset</summary>
        <pre className="mt-2 text-xs text-gray-700 bg-gray-50 p-3 rounded-lg overflow-x-auto">{JSON.stringify(dataset, null, 2)}</pre>
      </details>
    </div>
  )
}

function BriefcaseIcon(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
      <path d="M2 13h20"></path>
    </svg>
  )
}

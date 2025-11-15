import React from 'react'

export default function Projects(){
  const projects = [
    {
      title: 'Emotion Detection ML',
      summary: 'Real-time facial emotion recognition with actionable insights.',
      details: {
        problem: 'Teams lacked rapid, ethical insight into user sentiment during live sessions.',
        approach: 'CNN with augmentation and class-balancing; streaming inference; dashboard for real-time trends.',
        impact: '−14% misclassification vs baseline; <200ms/frame; +18% survey completion.',
        stack: ['Python','PyTorch/TensorFlow','OpenCV','FastAPI','React'],
        strategy: {
          design: 'Labels, consent, bias checks.',
          build: 'Train + export ONNX; live chart UI.',
          validate: 'A/B sessions; holdout videos; accuracy/latency/satisfaction.'
        }
      }
    },
    {
      title: 'Gender/Age Recognition',
      summary: 'Lightweight age-band and gender estimator for edge devices.',
      details: {
        problem: 'Need privacy-conscious personalization without heavy infra.',
        approach: 'Compact CNN with depthwise separable layers; quantization; privacy layer (no storage).',
        impact: '~92% gender accuracy; ±4.3 years MAE; +11% task success in onboarding.',
        stack: ['Python','TensorFlow Lite','NumPy','FastAPI','Webcam UI'],
        strategy: {
          design: 'On-device scope, age bands, fallbacks.',
          build: 'Train + quantize; ship TFLite; consent-first UI.',
          validate: 'Cross-device tests; track MAE/FPS.'
        }
      }
    },
    {
      title: 'Face Mask Detection',
      summary: 'Fast compliance detection in crowded spaces.',
      details: {
        problem: 'Manual monitoring slow and inconsistent.',
        approach: 'Lightweight detector with streaming overlay; color-coded prompts.',
        impact: '70% fewer manual checks; ~40ms/frame; +23% compliance.',
        stack: ['Python','YOLOv5n','OpenCV','FastAPI','React'],
        strategy: {
          design: 'Zones and thresholds; simple color alerts.',
          build: 'Train mixed dataset; export; webcam overlay.',
          validate: 'Pilot at entrances; measure latency and false alerts.'
        }
      }
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">Middlegame</h2>
      <p className="text-slate-300 mt-2">Three focused builds with clear problem → approach → impact.</p>

      <div className="mt-8 space-y-8">
        {projects.map((p,idx)=> (
          <div key={idx} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="text-slate-300 mt-1">{p.summary}</p>
              </div>
              <div className="text-xs uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1 rounded-full">Problem → Approach → Impact</div>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3 text-slate-200">
                <p><span className="font-semibold">Problem:</span> {p.details.problem}</p>
                <p><span className="font-semibold">Approach:</span> {p.details.approach}</p>
                <p><span className="font-semibold">Impact:</span> {p.details.impact}</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {p.details.stack.map((s,i)=> (
                    <span key={i} className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/20 text-slate-200">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-6 text-slate-200">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs text-slate-400">Design</p>
                <p className="mt-1">{p.details.strategy.design}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs text-slate-400">Build</p>
                <p className="mt-1">{p.details.strategy.build}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <p className="text-xs text-slate-400">Validate</p>
                <p className="mt-1">{p.details.strategy.validate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

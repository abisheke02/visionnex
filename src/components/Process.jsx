import HoverCard from './HoverCard'

const steps = [
  {
    label: 'STEP 01 · DAY 1',
    title: 'Discovery call',
    desc: '30 minutes. Your goals, your customers, your budget. We tell you honestly what\'s worth building.',
  },
  {
    label: 'STEP 02 · DAY 2–3',
    title: 'Fixed proposal',
    desc: 'Scope, price, and timeline in writing. No hourly billing, no surprise invoices.',
  },
  {
    label: 'STEP 03 · WEEK 1–3',
    title: 'Build & review',
    desc: 'You see progress on a live staging link every few days. Feedback goes straight into the build.',
  },
  {
    label: 'STEP 04 · LAUNCH',
    title: 'Launch & support',
    desc: 'We deploy, hand over everything, and stay on for 30 days of included support.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="eyebrow">How we work</div>
        <div className="sec-head">
          <h2>From brief to live in four steps.</h2>
          <p>Order matters here — each step gates the next, so nothing gets built on guesswork.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <HoverCard className="step" key={s.label}>
              <span className="mono">{s.label}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}

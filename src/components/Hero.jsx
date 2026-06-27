import { useState, useEffect, useRef } from 'react'

function CountUp({ to, suffix = '', duration = 1600 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return
        fired.current = true
        observer.disconnect()
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(ease * to))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

function NexusSvg() {
  return (
    <svg
      className="nexus"
      viewBox="0 0 520 460"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="VisionNex product network: Moneylix, EduCare, SnapNest, GRM CRM, Restaurant billing and NAS Home connected to the VisionNex core"
    >
      <line className="link" x1="260" y1="230" x2="120" y2="80" />
      <line className="link" x1="260" y1="230" x2="400" y2="80" />
      <line className="link" x1="260" y1="230" x2="70"  y2="250" />
      <line className="link" x1="260" y1="230" x2="450" y2="250" />
      <line className="link" x1="260" y1="230" x2="140" y2="400" />
      <line className="link" x1="260" y1="230" x2="390" y2="400" />
      <line className="dotline" x1="120" y1="80" x2="400" y2="80" />
      <rect className="core" x="185" y="200" width="150" height="60" rx="14" />
      <text className="core-label" x="260" y="226" textAnchor="middle">VisionNex</text>
      <text className="node-tag" x="260" y="244" textAnchor="middle" fill="#C9D2FF">PARENT · EST 2026</text>
      <g>
        <rect className="node" x="55"  y="52"  width="130" height="56" rx="12" />
        <text className="node-label" x="120" y="76" textAnchor="middle">Moneylix</text>
        <text className="node-tag"   x="120" y="93" textAnchor="middle">FINTECH · LIVE</text>
      </g>
      <g>
        <rect className="node" x="335" y="52"  width="130" height="56" rx="12" />
        <text className="node-label" x="400" y="76" textAnchor="middle">EduCare</text>
        <text className="node-tag"   x="400" y="93" textAnchor="middle">EDTECH · 2026</text>
      </g>
      <g>
        <rect className="node" x="8"   y="222" width="124" height="56" rx="12" />
        <text className="node-label" x="70"  y="246" textAnchor="middle">SnapNest</text>
        <text className="node-tag"   x="70"  y="263" textAnchor="middle">STORAGE</text>
      </g>
      <g>
        <rect className="node" x="388" y="222" width="124" height="56" rx="12" />
        <text className="node-label" x="450" y="246" textAnchor="middle">GRM CRM</text>
        <text className="node-tag"   x="450" y="263" textAnchor="middle">B2B SAAS</text>
      </g>
      <g>
        <rect className="node" x="68"  y="372" width="144" height="56" rx="12" />
        <text className="node-label" x="140" y="396" textAnchor="middle">Resto Billing</text>
        <text className="node-tag"   x="140" y="413" textAnchor="middle">POS · GST</text>
      </g>
      <g>
        <rect className="node" x="325" y="372" width="130" height="56" rx="12" />
        <text className="node-label" x="390" y="396" textAnchor="middle">NAS Home</text>
        <text className="node-tag"   x="390" y="413" textAnchor="middle">HARDWARE+</text>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Chennai · Building for the world</div>
          <h1>
            We build <span className="accent">products</span>.<br />
            We grow businesses.
          </h1>
          <p className="hero-sub">
            VisionNex is a product and services studio. We ship our own platforms — finance,
            education, business tools — and bring the same engineering to your website, your
            store, and your marketing.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Start a project →</a>
            <a className="btn btn-ghost"   href="#products">See our products</a>
          </div>
          <div className="hero-meta">
            <div><b><CountUp to={6} suffix="+" /></b>products in build</div>
            <div><b><CountUp to={2} /></b>service lines</div>
            <div><b><CountUp to={100} suffix="%" /></b>built in-house</div>
          </div>
        </div>
        <NexusSvg />
      </div>
    </header>
  )
}

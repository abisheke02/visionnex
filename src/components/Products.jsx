import { useEffect } from 'react'
import HoverCard from './HoverCard'

const products = [
  {
    icon: 'M',
    iconBg: '#2742F5',
    status: 'live',
    statusLabel: 'Live',
    name: 'Moneylix',
    desc: 'Personal money management with automatic bank sync and AI-powered spending insights.',
    link: { href: 'https://moneylix.in', label: 'moneylix.in →', external: true },
  },
  {
    icon: 'E',
    iconBg: '#FFB000',
    iconColor: '#0D1321',
    status: 'building',
    statusLabel: 'In build · launching 2026',
    name: 'EduCare',
    nameSuffix: '(working name)',
    desc: 'A learning platform for children with learning disabilities — connecting schools, educators and parents globally.',
    link: { href: null, label: 'Launching soon' },
  },
  {
    icon: 'G',
    iconBg: '#0B7A3E',
    status: 'building',
    statusLabel: 'In build',
    name: 'GRM CRM',
    desc: 'A no-nonsense CRM for small businesses: leads, follow-ups and sales pipeline without the enterprise bloat.',
    link: { href: null, label: 'Early access soon' },
  },
  {
    icon: 'R',
    iconBg: '#C2410C',
    status: 'building',
    statusLabel: 'In build',
    name: 'Restaurant Billing',
    desc: 'POS billing with GST-compliant tax invoicing built for Indian restaurants — fast keys, KOT, daily reports.',
    link: { href: null, label: 'Pilot program open' },
  },
  {
    icon: 'S',
    iconBg: '#7C3AED',
    status: 'planned',
    statusLabel: 'Planned',
    name: 'SnapNest',
    desc: 'Self-hosted photo and file backup you actually own — private, searchable, on your hardware.',
    link: { href: null, label: 'Roadmap' },
  },
  {
    icon: 'N',
    iconBg: '#0D1321',
    status: 'planned',
    statusLabel: 'Planned',
    name: 'NAS Home',
    desc: "Home server storage designed to pair with SnapNest — your family's private cloud in a box.",
    link: { href: null, label: 'Roadmap' },
  },
]

export default function Products() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="products">
      <div className="wrap">
        <div className="eyebrow">Products — the platforms we own</div>
        <div className="sec-head">
          <h2>Proof we can build:<br />we build for ourselves.</h2>
          <p>
            Every product below is designed, engineered and operated in-house. When you hire
            VisionNex, this is the standard you get.
          </p>
        </div>
        <div className="prod-grid">
          {products.map((p) => (
            <HoverCard className="prod-card reveal" key={p.name}>
              <div
                className="prod-icon"
                style={{ background: p.iconBg, color: p.iconColor || '#fff' }}
              >
                {p.icon}
              </div>
              <span className={`prod-status ${p.status}`}>{p.statusLabel}</span>
              <h3>
                {p.name}
                {p.nameSuffix && (
                  <> <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--slate)' }}>{p.nameSuffix}</span></>
                )}
              </h3>
              <p>{p.desc}</p>
              {p.link.href ? (
                <a className="prod-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
                  {p.link.label}
                </a>
              ) : (
                <span className="prod-link">{p.link.label}</span>
              )}
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}

import HoverCard from './HoverCard'

const cases = [
  {
    client: 'NestCraft',
    type: 'Ecommerce Store',
    metric: '+40%',
    metricLabel: 'conversion rate',
    desc: 'Full online store with custom inventory management, Razorpay payments, and same-day dispatch workflow for a Chennai home goods brand.',
    tags: ['Next.js', 'Razorpay', 'Headless CMS', 'SEO'],
    color1: '#2742F5',
    color2: '#1B2EB8',
  },
  {
    client: 'AutoParts TN',
    type: 'SEO & Content Marketing',
    metric: '#1',
    metricLabel: 'rank for primary keywords',
    desc: '6-month SEO retainer that took a spare parts distributor from page 4 to top 3 results across 40+ high-intent search terms in Tamil Nadu.',
    tags: ['Technical SEO', 'Content', 'GMB', 'Analytics'],
    color1: '#0B7A3E',
    color2: '#064E20',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="eyebrow">Selected work</div>
        <div className="sec-head">
          <h2>Results we've delivered<br />for real businesses.</h2>
          <p>Early clients, real numbers. More case studies coming as we grow.</p>
        </div>
        <div className="port-grid">
          {cases.map((c) => (
            <HoverCard className="port-card" key={c.client}>
              <div
                className="port-thumb"
                style={{ background: `linear-gradient(135deg, ${c.color1} 0%, ${c.color2} 100%)` }}
              >
                <span className="port-thumb-label">{c.client}</span>
              </div>
              <div className="port-body">
                <span className="port-type">{c.type}</span>
                <div className="port-client">{c.client}</div>
                <div className="port-metric">
                  {c.metric}
                  <span className="port-metric-label"> {c.metricLabel}</span>
                </div>
                <p className="port-desc">{c.desc}</p>
                <div className="port-tags">
                  {c.tags.map((t) => <span className="port-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}

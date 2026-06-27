import HoverCard from './HoverCard'

const testimonials = [
  {
    quote:
      'VisionNex built our ecommerce store in under 3 weeks. Clean, fast, and our conversion rate jumped 40% in the first month. Exactly what we needed.',
    author: 'Priya Menon',
    role: 'Founder, NestCraft · Chennai',
    avatar: 'P',
    color: '#2742F5',
  },
  {
    quote:
      'The SEO retainer paid for itself in 6 weeks. We went from page 4 to the top 3 results for our main keywords. Professional team, zero fluff.',
    author: 'Karthik Rajan',
    role: 'Director, AutoParts Tamil Nadu',
    avatar: 'K',
    color: '#0B7A3E',
  },
  {
    quote:
      'Their process is refreshingly transparent. Fixed price, staging link from day one, launched on time. No surprises — just what they promised.',
    author: 'Deepa Nair',
    role: 'Co-founder, OliveTech · Coimbatore',
    avatar: 'D',
    color: '#C2410C',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="eyebrow">What clients say</div>
        <div className="sec-head">
          <h2>Trusted by founders<br />across Tamil Nadu.</h2>
          <p>Real businesses. Real outcomes. We let results do the talking.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <HoverCard className="testi-card" key={t.author}>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.color }}>{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.author}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}

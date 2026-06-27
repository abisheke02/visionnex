import { useState } from 'react'

const faqs = [
  {
    q: 'Do you work with early-stage startups or only established businesses?',
    a: 'Both. We work with solo founders on day one and growth-stage companies scaling fast. Our starter website tier (₹24,999) is specifically built for early-stage teams who need a professional presence without the enterprise price tag.',
  },
  {
    q: 'How does your fixed-price model work? What if scope changes mid-project?',
    a: 'We agree on scope, price, and timeline in writing before any work starts. If you want to add something mid-project, we quote it separately — no silent invoice surprises. The original scope is always delivered at the original price.',
  },
  {
    q: 'Can I see progress while the build is happening?',
    a: 'Yes. Every project runs on a live staging link from day two. You can review, comment, and request changes in real time — there is no big reveal at the end.',
  },
  {
    q: 'Do you sign NDAs?',
    a: "Absolutely. We'll sign your NDA before a discovery call if you prefer. Confidentiality is standard practice for us.",
  },
  {
    q: 'What happens after my website launches?',
    a: 'Every project includes 30 days of included support — bug fixes, content updates, minor tweaks at no extra cost. After that we offer monthly maintenance retainers or pay-per-task support.',
  },
  {
    q: 'Do you build on WordPress?',
    a: "Our default stack is Next.js with a headless CMS — better performance, better security, easier scaling. We can work in WordPress if there's a strong reason, but we'll be honest if we think there's a better tool for your project.",
  },
  {
    q: "I'm outside Chennai. Can you still work with me?",
    a: 'Yes — we work with clients across India and internationally. Discovery calls are on Google Meet, staging links are accessible anywhere, and handover is fully digital.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="eyebrow">FAQ</div>
        <div className="sec-head">
          <h2>Questions we hear<br />before every project.</h2>
          <p>Honest answers. If yours isn't here, ask us directly.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

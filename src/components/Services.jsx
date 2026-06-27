import HoverCard from './HoverCard'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="eyebrow">Services — the work we do for you</div>
        <div className="sec-head">
          <h2>Two services.<br />Done properly.</h2>
          <p>
            Fixed scope, fixed price, clear timelines. The same engineering discipline we use
            on our own products goes into yours.
          </p>
        </div>
        <div className="svc-grid">
          <HoverCard className="svc-card">
            <h3>Website &amp; Ecommerce Development</h3>
            <p>
              Fast, modern, conversion-focused sites built on Next.js — from a single-page
              business site to a full online store.
            </p>
            <div className="tiers">
              <div className="tier">
                <b>Starter site</b>
                <span>5 pages · 1 week</span>
                <span className="price">₹24,999</span>
              </div>
              <div className="tier">
                <b>Business site</b>
                <span>10 pages · CMS · SEO</span>
                <span className="price">₹49,999</span>
              </div>
              <div className="tier">
                <b>Ecommerce store</b>
                <span>Payments · inventory</span>
                <span className="price">₹99,999+</span>
              </div>
            </div>
            <p className="svc-note">// HOSTING SETUP + 30-DAY SUPPORT INCLUDED IN EVERY TIER</p>
          </HoverCard>
          <HoverCard className="svc-card">
            <h3>Digital Marketing</h3>
            <p>
              Monthly retainers that compound: search rankings, social presence, and paid
              campaigns measured against revenue — not vanity metrics.
            </p>
            <div className="tiers">
              <div className="tier">
                <b>Growth</b>
                <span>SEO + social mgmt</span>
                <span className="price">₹15,000/mo</span>
              </div>
              <div className="tier">
                <b>Scale</b>
                <span>+ paid ads + content</span>
                <span className="price">₹35,000/mo</span>
              </div>
              <div className="tier">
                <b>Dominate</b>
                <span>Full-funnel + analytics</span>
                <span className="price">₹60,000/mo</span>
              </div>
            </div>
            <p className="svc-note">// MONTHLY REPORT · NO LOCK-IN AFTER MONTH 3</p>
          </HoverCard>
        </div>
      </div>
    </section>
  )
}

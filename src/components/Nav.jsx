import { useState, useEffect } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <a className="logo" href="#" onClick={close}>
            <span className="logo-mark"><span>V</span></span>
            VisionNex Technologies
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#process">How we work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-right">
            <a className="nav-cta" href="#contact">Get a quote</a>
            <button
              className={`hamburger${isOpen ? ' open' : ''}`}
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <a href="#services"   onClick={close}>Services</a>
        <a href="#products"   onClick={close}>Products</a>
        <a href="#portfolio"  onClick={close}>Portfolio</a>
        <a href="#process"    onClick={close}>How we work</a>
        <a href="#faq"        onClick={close}>FAQ</a>
        <a href="#contact" className="mobile-nav-cta" onClick={close}>Get a quote →</a>
      </div>
    </>
  )
}

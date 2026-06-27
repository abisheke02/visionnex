function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <a className="logo" href="#">
            <span className="logo-mark"><span>V</span></span>
            VisionNex Technologies
          </a>
          <div className="foot-links">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="foot-instagram"
            href="https://www.instagram.com/visionnex_technologies?igsh=b3lwcTY3aDFrcDNt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VisionNex on Instagram"
          >
            <InstagramIcon />
            @visionnex_technologies
          </a>
        </div>
        <div className="foot-base">
          <span>© 2026 VISIONNEX TECHNOLOGIES · CHENNAI, INDIA</span>
          <span>VISIONNEXTECHNOLOGIES.COM</span>
        </div>
      </div>
    </footer>
  )
}

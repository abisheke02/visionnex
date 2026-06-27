import ContactForm from './ContactForm'

export default function CtaBand() {
  return (
    <section id="contact">
      <div className="cta-band">
        <div className="wrap">
          <div className="contact-grid">

            <div className="contact-info">
              <div className="eyebrow contact-eyebrow">Get in touch</div>
              <h2>Tell us what you&apos;re building.</h2>
              <p>
                A website, a store, a growth plan — or something nobody has built yet.
                First call is free and honest.
              </p>
              <div className="contact-links">
                <a className="btn btn-primary" href="mailto:hello@visionnextechnologies.com">
                  hello@visionnextechnologies.com
                </a>
                <a
                  className="btn btn-wa"
                  href="https://wa.me/919894043157"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </div>
            </div>

            <ContactForm />

          </div>
        </div>
      </div>
    </section>
  )
}

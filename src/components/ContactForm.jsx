import { useState } from 'react'

const INITIAL = { name: '', email: '', service: '', budget: '', message: '' }

// TODO: Replace with your form endpoint (Formspree, Web3Forms, etc.)
// e.g. const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Swap the line below with a real fetch() call to your endpoint
      await new Promise((r) => setTimeout(r, 1400))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-success">
        <div className="form-success-check">✓</div>
        <h3 style={{ color: '#fff', margin: '12px 0 8px' }}>Message received!</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
          We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name" type="text" placeholder="Ravi Kumar"
            required value={form.name} onChange={set('name')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-email">Email address</label>
          <input
            id="cf-email" type="email" placeholder="ravi@company.com"
            required value={form.email} onChange={set('email')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-service">I need</label>
          <select id="cf-service" required value={form.service} onChange={set('service')}>
            <option value="">Select a service</option>
            <option>Website development</option>
            <option>Ecommerce store</option>
            <option>Digital marketing</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cf-budget">Budget range</label>
          <select id="cf-budget" required value={form.budget} onChange={set('budget')}>
            <option value="">Select budget</option>
            <option>Under ₹25,000</option>
            <option>₹25,000 – ₹1,00,000</option>
            <option>₹1,00,000+</option>
            <option>Let's discuss</option>
          </select>
        </div>
        <div className="form-group span-2">
          <label htmlFor="cf-msg">Tell us about your project</label>
          <textarea
            id="cf-msg"
            placeholder="What are you building? What's your timeline?"
            required value={form.message} onChange={set('message')}
          />
        </div>
      </div>
      {status === 'error' && (
        <p className="form-error">Something went wrong — email us directly instead.</p>
      )}
      <button className="btn-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  )
}

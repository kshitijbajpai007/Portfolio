const { useState } = React;

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name required';
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');

    // Construct mailto link
    const recipient = 'rickrolledrum@gmail.com';
    const subject = `New Project Inquiry from ${form.name}`;
    const body = `Hello Alex,\n\nI'm interested in starting a new project with you. Here are my details:\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Project Type: ${form.type || 'Not specified'}\n` +
      `Budget Range: ${form.budget || 'Not specified'}\n\n` +
      `Message:\n${form.message}\n\n` +
      `Best regards,\n${form.name}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    await new Promise(r => setTimeout(r, 800)); // Brief pause for UX
    window.location.href = mailtoUrl;

    setStatus('success');
    setForm({ name: '', email: '', type: '', budget: '', message: '' });
    setErrors({});
  };

  const handle = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: null }));
  };

  return (
    <div className="contact-form-wrap">
      <div style={{ marginBottom: '32px' }}>
        <div className="section-tag" style={{ marginBottom: '10px' }}>INQUIRE</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
          Start a project
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">YOUR NAME *</label>
            <input
              className="form-input"
              placeholder="Alex Chen"
              value={form.name}
              onChange={handle('name')}
              style={errors.name ? { borderColor: '#ff4444' } : {}}
            />
            {errors.name && <div style={{ fontSize: '11px', color: '#ff4444', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>{errors.name}</div>}
          </div>
          <div className="form-group">
            <label className="form-label">EMAIL ADDRESS *</label>
            <input
              type="email"
              className="form-input"
              placeholder="hello@studio.com"
              value={form.email}
              onChange={handle('email')}
              style={errors.email ? { borderColor: '#ff4444' } : {}}
            />
            {errors.email && <div style={{ fontSize: '11px', color: '#ff4444', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>{errors.email}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">PROJECT TYPE</label>
            <select className="form-select" value={form.type} onChange={handle('type')}>
              <option value="">Select type...</option>
              <option value="web">Web App / SaaS</option>
              <option value="mobile">Mobile App (iOS/Android)</option>
              <option value="landing">High-Conv. Landing Page</option>
              <option value="tattoo">Tattoo Studio Website</option>
              <option value="ecomm">E-Commerce</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">BUDGET RANGE</label>
            <select className="form-select" value={form.budget} onChange={handle('budget')}>
              <option value="">Select budget...</option>
              <option value="">$500 - $2000</option>
              <option value="2-5k">$2K – $5K</option>
              <option value="5-15k">$5K – $15K</option>
              <option value="15-50k">$15K – $50K</option>
              <option value="50k+">$50K+</option>
              <option value="discuss">Let's discuss</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">TELL ME ABOUT YOUR PROJECT *</label>
          <textarea
            className="form-textarea"
            placeholder="Describe your vision, goals, and any specific requirements..."
            value={form.message}
            onChange={handle('message')}
            style={errors.message ? { borderColor: '#ff4444' } : {}}
          />
          {errors.message && <div style={{ fontSize: '11px', color: '#ff4444', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>{errors.message}</div>}
        </div>
        <button
          type="submit"
          className={`form-submit ${status === 'success' ? 'success' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'idle' && <><span>SEND INQUIRY</span><span>→</span></>}
          {status === 'loading' && <><span style={{ display: 'inline-block', animation: 'rotate 0.8s linear infinite' }}>⟳</span><span>SENDING...</span></>}
          {status === 'success' && <><span>✓</span><span>SENT SUCCESSFULLY</span></>}
        </button>
        <p className="form-note">
          {status === 'success'
            ? '// Response within 24 hours. Check your inbox.'
            : '// Encrypted. No spam. Response within 24h.'}
        </p>
      </form>
    </div>
  );
}

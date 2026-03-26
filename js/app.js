const { useEffect } = React;

function App() {
  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Tech bar animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('animated');
      }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('.tech-bar-fill').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const techStack = [
    { icon: '⚛️', name: 'React / Next.js', level: 'EXPERT', proficiency: 80 },
    { icon: '🟩', name: 'Node.js', level: 'EXPERT', proficiency: 90 },
    { icon: '✖️', name: 'XCode', level: 'ADVANCED', proficiency: 85 },
    { icon: '⚡', name: 'Supabase', level: 'ADVANCED', proficiency: 88 },
    { icon: '🎨', name: 'Tailwind CSS', level: 'EXPERT', proficiency: 96 },
    { icon: '🤖', name: 'AI / LLMs', level: 'ADVANCED', proficiency: 82 },
    { icon: '🔷', name: 'TypeScript', level: 'EXPERT', proficiency: 91 },
    { icon: '🐘', name: 'PostgreSQL', level: 'ADVANCED', proficiency: 84 },
    { icon: '🚀', name: 'Vite / Turbo', level: 'EXPERT', proficiency: 90 },
    { icon: '🎭', name: 'Framer Motion', level: 'ADVANCED', proficiency: 86 },
    { icon: '☁️', name: 'AWS / Vercel', level: 'INTERMEDIATE', proficiency: 78 },
    { icon: '🔐', name: 'Auth & Security', level: 'ADVANCED', proficiency: 83 },
  ];

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero-badge-dot"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          <TerminalTyping />
          <h1 className="hero-h1 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            I Build Products<br /><span>Users Love.</span>
          </h1>
          <p className="hero-sub animate-fade-up" style={{ animationDelay: '0.55s' }}>
            Full-stack engineer obsessed with product thinking, pixel-perfect interfaces, and shipping things that actually move the needle.
          </p>
          <div className="hero-ctas animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <a href="#work" className="btn-primary">VIEW WORK</a>
            <a href="#contact" className="btn-secondary">START A PROJECT</a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-inner">
            {[
              { num: '3', unit: '+', label: 'YEARS SHIPPING' },
              { num: '40', unit: '+', label: 'PROJECTS DELIVERED' },
              { num: '98', unit: '%', label: 'CLIENT SATISFACTION' },
              { num: '12', unit: 'x', label: 'AVG CONV. LIFT' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-num">{s.num}<span>{s.unit}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BENTO GRID ── */}
      <section className="bento-section" id="work">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">SELECTED WORK</div>
            <h2 className="section-h2">Built with intention,<br />shipped with precision.</h2>
            <p className="section-sub">A curated selection of products, tools, and experiments that define my craft.</p>
          </div>
          <div className="bento-grid">

            {/* CubIt - Featured */}
            <div className="bento-card featured reveal" style={{ position: 'relative', overflow: 'visible' }}>
              <div className="card-tag"><span className="card-tag-dot"></span>FEATURED PROJECT · iOS + AI</div>
              <h3 className="card-h3" style={{ fontSize: '32px' }}>CubIt</h3>
              <p className="card-desc" style={{ maxWidth: '360px' }}>
                AI-powered fitness coaching app for iOS. GPT-driven personalization meets HealthKit integration — your coach that never sleeps.
              </p>
              <div className="card-tags">
                <span className="tag-pill accent">Flutter</span>
                <span className="tag-pill accent">AI Coaching</span>
                <span className="tag-pill">iOS HealthKit</span>
                <span className="tag-pill">Supabase</span>
                <span className="tag-pill">Node.js</span>
              </div>
              <a href="#cubit" className="card-link">
                EXPLORE CASE STUDY <span className="card-arrow">↗</span>
              </a>
              {/* Mini phone in card */}
              <div className="cubit-visual">
                <div className="phone-mockup" style={{ width: '140px', height: '280px', borderRadius: '28px' }}>
                  <div className="phone-screen">
                    <div className="phone-notch"></div>
                    <div style={{ padding: '24px 12px 12px' }}>
                      <div className="phone-metric">
                        <div className="phone-metric-label">AI COACH</div>
                        <div className="phone-metric-val" style={{ fontSize: '11px', lineHeight: '1.4' }}>Keep it up! 94% goal hit rate this week.</div>
                      </div>
                      <div className="phone-metric">
                        <div className="phone-metric-label">STEPS</div>
                        <div className="phone-metric-val">12,480</div>
                      </div>
                      <div className="phone-metric">
                        <div className="phone-chart-bar">
                          {[40, 60, 45, 80, 95, 70, 85].map((h, i) => (
                            <div key={i} className={`phone-bar ${i === 4 ? 'active' : ''}`} style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      </div>
                      <div className="phone-bar-btn">START WORKOUT →</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tattoo Studio */}
            <div className="bento-card tall reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card-tag"><span className="card-tag-dot"></span>CLIENT · WEB</div>
              <h3 className="card-h3">Ink & Iron Studio</h3>
              <p className="card-desc">
                High-conversion website for a premium tattoo studio. Booking funnel, artist portfolios, live availability — 340% more leads in 30 days.
              </p>
              <div style={{ flex: 1, background: 'var(--bg-elevated)', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {['Booking Page', 'Artist Gallery', 'Style Filter', 'Review Module'].map((f, i) => (
                  <div key={f} style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>{f}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: i < 3 ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.15)' }}></div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: i < 3 ? 'var(--cyan)' : 'var(--text-muted)' }}>{i < 3 ? 'LIVE' : 'WIP'}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-tags">
                <span className="tag-pill">Next.js</span>
                <span className="tag-pill">Tailwind</span>
                <span className="tag-pill accent">+340% leads</span>
              </div>
            </div>

            {/* SaaS Dashboard */}
            <div className="bento-card wide reveal reveal-delay-2">
              <div className="card-tag"><span className="card-tag-dot"></span>PRODUCT · SAAS</div>
              <h3 className="card-h3">AnalyticOS</h3>
              <p className="card-desc">Real-time analytics dashboard for DTC brands. Custom charting engine, cohort analysis, zero-latency queries.</p>
              <div className="card-tags">
                <span className="tag-pill accent">React</span>
                <span className="tag-pill">Supabase</span>
                <span className="tag-pill">D3.js</span>
                <span className="tag-pill">Node</span>
              </div>
              <a href="#contact" className="card-link">VIEW CASE STUDY <span className="card-arrow">↗</span></a>
            </div>

            {/* API Tool */}
            <div className="bento-card wide reveal reveal-delay-3">
              <div className="card-tag"><span className="card-tag-dot"></span>TOOL · OPEN SOURCE</div>
              <h3 className="card-h3">APIForge</h3>
              <p className="card-desc">Visual REST API builder with live testing, mock servers, and team collaboration. 2.4K GitHub stars.</p>
              <div className="card-tags">
                <span className="tag-pill accent">TypeScript</span>
                <span className="tag-pill">Node.js</span>
                <span className="tag-pill">PostgreSQL</span>
              </div>
              <a href="#contact" className="card-link">GITHUB REPO <span className="card-arrow">↗</span></a>
            </div>

          </div>
        </div>
      </section>

      {/* ── CUBIT APPLE SECTION ── */}
      <section className="cubit-section" id="cubit">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>FEATURED CASE STUDY</div>
            <h2 className="section-h2">CubIt — Your AI<br />Fitness Coach</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>An iOS app that learns how you move and coaches you like a pro — built with Flutter, powered by GPT-4.</p>
          </div>
        </div>
        <div className="cubit-inner">
          <div className="cubit-features">
            <div className="reveal">
              <div className="section-tag">CORE FEATURES</div>
            </div>
            {[
              { icon: '🧠', title: 'AI Coaching Engine', desc: 'GPT-4 powered recommendations that adapt to your sleep, stress, and recovery data. Real-time coaching, not generic plans.' },
              { icon: '🍎', title: 'iOS Deep Integration', desc: 'Native HealthKit sync, Live Activities, Dynamic Island widgets, and Siri Shortcuts — it feels like part of iOS.' },
              { icon: '📊', title: 'Behavioral Analytics', desc: 'Tracks habit loops, identifies peak performance windows, and predicts slumps before they happen.' },
              { icon: '🔄', title: 'Real-time Sync', desc: 'Supabase realtime subscriptions keep every device in perfect sync. Offline-first with conflict resolution.' },
            ].map((f, i) => (
              <div key={f.title} className={`feature-item reveal reveal-delay-${i + 1}`}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cubit-phone-stage reveal reveal-delay-2">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── CLIENT SOLUTIONS ── */}
      <section className="solutions-section" id="services">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">CLIENT WORK</div>
            <h2 className="section-h2">Digital Transformation<br />for Creatives.</h2>
            <p className="section-sub">I build high-performance digital presences for niche, creative, and ambitious businesses that demand more than a template.</p>
          </div>
          <div className="solutions-grid">
            {[
              {
                num: '01',
                icon: '🎨',
                title: 'Tattoo & Body Art Studios',
                desc: 'Turn your artistry into a booking machine. I build bespoke websites for tattoo studios that showcase portfolios, automate bookings, and dominate local search.',
                points: ['Flash sale booking funnels', 'Artist portfolio galleries', 'Aftercare CRM integration', 'SEO for "tattoo near me"'],
                featured: true,
              },
              {
                num: '02',
                icon: '🚀',
                title: 'SaaS & Tech Startups',
                desc: 'Full-stack product development from zero to launch. I own the entire technical stack so you can focus on your users.',
                points: ['MVP → production in 6 weeks', 'Auth, billing, analytics built-in', 'AI feature integration', 'Scalable Supabase backend'],
                featured: false,
              },
              {
                num: '03',
                icon: '🛍️',
                title: 'Niche E-Commerce Brands',
                desc: 'High-conversion storefronts for brands with a story. Custom product experiences that make the buying journey feel inevitable.',
                points: ['Headless commerce builds', 'Conversion rate optimization', 'Subscription & upsell flows', 'Performance budgets enforced'],
                featured: false,
              },
            ].map(s => (
              <div key={s.num} className={`solution-card reveal ${s.featured ? 'featured-solution' : ''}`}>
                <div className="solution-num">// {s.num}</div>
                <div className="solution-icon-wrap">{s.icon}</div>
                <h3 className="solution-h3">{s.title}</h3>
                <p className="solution-p">{s.desc}</p>
                <ul className="solution-points">
                  {s.points.map(p => <li key={p} className={s.featured ? 'active' : ''}>{p}</li>)}
                </ul>
                <a href="#contact" className="card-link" style={{ marginTop: '24px' }}>
                  GET A QUOTE <span className="card-arrow">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="tech-section" id="stack">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">TECHNICAL EXPERTISE</div>
            <h2 className="section-h2">Built on a modern,<br />battle-tested stack.</h2>
            <p className="section-sub">Tools I reach for every project — chosen for performance, DX, and scalability.</p>
          </div>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <TechCard key={t.name} {...t} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <div className="section-header reveal" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 64px' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>HOW I WORK</div>
            <h2 className="section-h2">From idea to<br />production.</h2>
          </div>
          <div className="process-steps">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep dive into your users, business goals, and competitive landscape. No generic briefs.' },
              { num: '02', title: 'Architecture', desc: 'System design, technical stack selection, and UX wireframes. Everything mapped before a line of code.' },
              { num: '03', title: 'Build & Iterate', desc: 'Weekly deliverables. You see real progress every Friday. No black-box development.' },
              { num: '04', title: 'Launch & Scale', desc: 'CI/CD pipelines, monitoring, and growth optionality built in from day one.' },
            ].map((s, i) => (
              <div key={s.num} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="step-num">// {s.num}</div>
                <div className="step-h4">{s.title}</div>
                <div className="step-p">{s.desc}</div>
                {i < 3 && <div className="step-connector">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-info reveal">
              <h2>Let's build<br />something <span>great.</span></h2>
              <p>Whether you're a tattoo studio wanting more bookings, a startup ready to launch, or a brand that needs a serious digital upgrade — I'd love to hear from you.</p>
              <div className="contact-details">
                {[
                  { icon: '📧', label: 'EMAIL', val: 'rickrolledrum@gmail.com' },
                  { icon: '☎️', label: 'CONTACT', val: '+91 9569957007' },
                  { icon: '📍', label: 'TIMEZONE', val: 'GMT+5:30 · Remote Worldwide' },
                  { icon: '⚡', label: 'AVAILABILITY', val: 'Open to projects from April 2025' },
                ].map(d => (
                  <div key={d.label} className="contact-detail-item">
                    <div className="contact-detail-icon">{d.icon}</div>
                    <div>
                      <div className="contact-detail-label">{d.label}</div>
                      <div className="contact-detail-val">{d.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cyan)', letterSpacing: '0.1em', marginBottom: '12px' }}>// TESTIMONIAL</div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', fontStyle: 'italic', fontWeight: '300', marginBottom: '16px' }}>
                  "Delivered exactly what we envisioned — and more. Our booking rate tripled in the first month. Worth every penny and then some."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--cyan-dim)', border: '1px solid rgba(0,217,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--cyan)' }}>MK</div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: '500' }}>Maya K.</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>OWNER · VENOM INK STUDIO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">{'<dev />'}</div>
            <div className="footer-copy">// Crafted with precision · {new Date().getFullYear()}</div>
            <div className="footer-links">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
              <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

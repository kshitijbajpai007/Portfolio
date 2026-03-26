const { useState, useEffect } = React;

function PhoneMockup() {
  const [activeBar, setActiveBar] = useState(4);
  const bars = [30, 55, 40, 70, 90, 60, 75];

  useEffect(() => {
    const t = setInterval(() => setActiveBar(a => (a + 1) % bars.length), 1200);
    return () => clearInterval(t);
  }, [bars.length]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="cubit-phone-glow"></div>
      <div className="cubit-phone-main">
        <div className="cubit-phone-screen">
          <div className="cubit-dynamic-island"></div>
          <div className="cubit-app-header">
            <div className="cubit-greeting">Good Morning,</div>
            <div className="cubit-name">Alex 👋</div>
          </div>
          <div className="cubit-ai-banner">
            <div className="cubit-ai-label">AI COACH · CUBIT</div>
            <div className="cubit-ai-text">You're 94% consistent this week. Push 15 more mins today to hit your goal.</div>
          </div>
          <div className="cubit-metrics-grid">
            <div className="cubit-metric">
              <div className="cubit-metric-val cyan">12.4K</div>
              <div className="cubit-metric-label">STEPS TODAY</div>
            </div>
            <div className="cubit-metric">
              <div className="cubit-metric-val">94%</div>
              <div className="cubit-metric-label">STREAK</div>
            </div>
            <div className="cubit-metric">
              <div className="cubit-metric-val cyan">847</div>
              <div className="cubit-metric-label">CALS BURNED</div>
            </div>
            <div className="cubit-metric">
              <div className="cubit-metric-val">7.2h</div>
              <div className="cubit-metric-label">SLEEP</div>
            </div>
          </div>
          <div style={{ padding: '0 16px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '48px', marginBottom: '4px' }}>
              {bars.map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: '3px 3px 0 0',
                  background: i === activeBar ? 'var(--cyan)' : 'rgba(0,217,255,0.2)',
                  transition: 'all 0.3s'
                }}></div>
              ))}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '9px', color: 'rgba(255,255,255,0.25)', textAlign: 'right' }}>7-DAY ACTIVITY</div>
          </div>
          <div className="cubit-action-btn">START WORKOUT →</div>
        </div>
      </div>
    </div>
  );
}

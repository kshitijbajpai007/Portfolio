function TechCard({ icon, name, level, proficiency, delay }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={`tech-card reveal reveal-delay-${delay} ${visible ? 'visible animated' : ''}`}>
      <span className="tech-icon">{icon}</span>
      <div className="tech-name">{name}</div>
      <div className="tech-level">{level}</div>
      <div className="tech-bar-bg">
        <div className="tech-bar-fill" style={{ width: `${proficiency}%`, transitionDelay: `${delay * 0.1 + 0.3}s` }}></div>
      </div>
    </div>
  );
}

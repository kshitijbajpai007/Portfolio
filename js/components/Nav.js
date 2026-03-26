const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={scrolled ? { boxShadow: '0 8px 40px rgba(0,0,0,0.4)' } : {}}>
      <a href="#" className="nav-logo">{'<dev />'}</a>
      <ul className="nav-links">
        {['Work', 'Cubit', 'Services', 'Stack', 'Contact'].map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">ENQUIRE</a>
      <button className="nav-mobile-menu" aria-label="menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}

const { useState, useEffect } = React;

function TerminalTyping() {
  const lines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'product-minded-developer', highlight: true },
    { type: 'cmd', text: 'cat skills.json' },
    { type: 'out', text: '{ "focus": "UX-first engineering", "stack": ["React","Node","Flutter","AI"] }' },
    { type: 'cmd', text: 'node --eval "console.log(\'available for hire\')"' },
    { type: 'out', text: 'available for hire ✓', highlight: true },
  ];

  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setCurrentChar(c => c + 1);
      }, line.type === 'cmd' ? 45 : 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed(d => [...d, line]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, line.type === 'cmd' ? 400 : 200);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar]);

  const currentLineData = lines[currentLine];
  const currentText = currentLineData ? currentLineData.text.slice(0, currentChar) : '';

  return (
    <div className="hero-terminal">
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#ff5f57' }}></div>
        <div className="terminal-dot" style={{ background: '#febc2e' }}></div>
        <div className="terminal-dot" style={{ background: '#28c840' }}></div>
        <span className="terminal-title">~/portfolio — zsh</span>
      </div>
      {displayed.map((line, i) => (
        <div key={i}>
          {line.type === 'cmd' ? (
            <div className="terminal-line active">
              <span className="terminal-prompt">❯</span>
              {line.text}
            </div>
          ) : (
            <div className={`terminal-output${line.highlight ? ' highlight' : ''}`} style={{ marginBottom: '12px' }}>
              {line.text}
            </div>
          )}
        </div>
      ))}
      {currentLine < lines.length && currentLineData && (
        <div className="terminal-line active">
          {currentLineData.type === 'cmd' ? (
            <><span className="terminal-prompt">❯</span>{currentText}<span className="cursor"></span></>
          ) : (
            <div className={`terminal-output${currentLineData.highlight ? ' highlight' : ''}`}>
              {currentText}<span className="cursor"></span>
            </div>
          )}
        </div>
      )}
      {currentLine >= lines.length && (
        <div className="terminal-line active">
          <span className="terminal-prompt">❯</span>
          <span className="cursor"></span>
        </div>
      )}
    </div>
  );
}

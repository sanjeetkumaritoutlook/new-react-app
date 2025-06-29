import React, { useState } from 'react';
import './galaxy.css';

const planets = [
  { name: 'Mars', trivia: 'Known as the Red Planet.' },
  { name: 'Jupiter', trivia: 'The largest planet in the Solar System.' },
  { name: 'Neptune', trivia: 'Has the strongest winds in the Solar System.' },
];

export default function GalaxyExplorer() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="galaxy">
      <h2>🌌 Galaxy Explorer</h2>
      <div className="orbit">
        {planets.map((planet, idx) => (
          <div key={idx} className={`planet planet-${idx}`} onClick={() => setSelected(planet)}>
            🪐
          </div>
        ))}
      </div>
      {selected && (
        <div className="trivia">
          <h3>{selected.name}</h3>
          <p>{selected.trivia}</p>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Die from './components/Die';
import './App.css';

function App() {
  const [face, setFace] = useState(null);
  const [rolling, setRolling] = useState(false);

  const roll = async () => {
    setRolling(true);
    try {
      const res = await fetch('http://172.17.0.1:5000/roll');
      const data = await res.json();
      setFace(data.result);
    } catch (err) {
      console.error('failed to fetch roll', err);
    } finally {
      // stop rolling animation after a short delay so it's visible
      setTimeout(() => setRolling(false), 800);
    }
  };

  useEffect(() => {
    // roll once on load
    roll();
  }, []);

  return (
    <div className="app-container">
      <h1>Animated Die</h1>
      <Die value={face} rolling={rolling} />
      {/* show the numeric result from the API */}
      {face !== null && (
        <p className="roll-result">You rolled: {face}</p>
      )}
      <button onClick={roll} disabled={rolling} className="roll-button">
        {rolling ? 'Rolling...' : 'Roll Again'}
      </button>
    </div>
  );
}

export default App;

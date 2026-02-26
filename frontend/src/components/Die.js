import React, { useEffect, useState } from 'react';
import './Die.css';

const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

export default function Die({ value, rolling }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (rolling) {
      setAnimate(true);
      // end animation after a while
      const id = setTimeout(() => setAnimate(false), 800);
      return () => clearTimeout(id);
    }
  }, [rolling]);

  return (
    <div className={`die ${animate ? 'rolling' : ''}`}>
      {value ? faces[value - 1] : '〰️'}
    </div>
  );
}

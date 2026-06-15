import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [showNull, setShowNull] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock scrolling while active
    document.body.style.overflow = 'hidden';

    // Wait 2 seconds, then fade out
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Unmount completely at 3 seconds
    const removeTimer = setTimeout(() => {
      setShowNull(true);
      document.body.style.overflow = 'unset';
    }, 3000); 

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (showNull) return null;

  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center bg-zinc-950 transform transition-all duration-1000 ease-in-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ zIndex: 999999 }} // Inline style override to guarantee it stays on top
    >
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl text-white tracking-[0.4em] uppercase font-light select-none animate-pulse">
          Monolith
        </h1>
        
        <div 
          className="h-[1px] bg-amber-500 mx-auto mt-6 transition-all duration-[1500ms] ease-out"
          style={{ width: isFading ? '0px' : '128px' }}
        />
        
        <p className="text-[10px] text-zinc-400 tracking-[0.45em] uppercase mt-4 select-none font-medium opacity-80">
          Architecture Studio
        </p>
      </div>
    </div>
  );
}
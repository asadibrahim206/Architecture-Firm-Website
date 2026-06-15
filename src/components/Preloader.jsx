import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpeg'; // Import your uploaded logo asset

export default function Preloader() {
  const [showNull, setShowNull] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Holds screen for exactly 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

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
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white transform transition-all duration-1000 ease-in-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ zIndex: 999999 }}
    >
      <div className="text-center px-4 max-w-md">
        {/* Render Your Uploaded Logo Asset Image smoothly */}
        <img 
          src={logoImg} 
          alt="Design Scales Architecture Logo" 
          className="w-64 md:w-80 h-auto mx-auto object-contain mb-4 animate-pulse duration-[2000ms]"
        />
        
        <div 
          className="h-[2px] bg-zinc-800 mx-auto mt-2 transition-all duration-[1500ms] ease-out"
          style={{ width: isFading ? '0px' : '180px' }}
        />
        
        <p className="text-[11px] text-zinc-500 tracking-[0.4em] uppercase mt-4 select-none font-semibold">
          DESIGN SCALES ARCHITECTURE
        </p>
      </div>
    </div>
  );
}
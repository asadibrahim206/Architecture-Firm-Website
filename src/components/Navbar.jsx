import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path, hash = '') => {
    if (hash) return location.pathname === path && location.hash === hash;
    return location.pathname === path && !location.hash;
  };

  const handleSectionLink = (sectionId) => {
    setIsOpen(false); 
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      window.location.hash = sectionId;
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeLink = () => {
    setIsOpen(false);
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0 });
    }
  };

  return (
    // RESTORED: bg-white/95 and gray border lines
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* BRAND IDENTITY WITH IMAGE LOGO */}
        <button onClick={handleHomeLink} className="flex items-center space-x-3 text-left cursor-pointer outline-none group">
          {/* Removed dark mode image filters so your original logo image renders cleanly */}
          <img src={logoImg} alt="Logo" className="h-12 w-auto object-contain" /> 
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest font-bold uppercase text-zinc-900 leading-tight">
              DESIGN SCALES
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-500 font-medium">
              ARCHITECTURE
            </span>
          </div>
        </button>
        
        {/* CAPITALIZED DESKTOP LINKS (Restored dark text colors for light backdrop) */}
        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-bold">
          <button onClick={handleHomeLink} className={`transition-colors py-2 cursor-pointer border-b-2 outline-none ${isActive('/') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            HOME
          </button>
          <Link to="/about" className={`transition-colors py-2 border-b-2 ${isActive('/about') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            ABOUT
          </Link>
          <Link to="/services" className={`transition-colors py-2 border-b-2 ${isActive('/services') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            SERVICES
          </Link>
          <Link to="/projects" className={`transition-colors py-2 border-b-2 ${isActive('/projects') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            PROJECTS
          </Link>
          <button onClick={() => handleSectionLink('team')} className={`transition-colors py-2 cursor-pointer border-b-2 outline-none ${isActive('/', '#team') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            TEAM
          </button>
          <button onClick={() => handleSectionLink('news')} className={`transition-colors py-2 cursor-pointer border-b-2 outline-none ${isActive('/', '#news') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            NEWS
          </button>
          <Link to="/contact" className={`transition-colors py-2 border-b-2 ${isActive('/contact') ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
            CONTACT
          </Link>
        </div>
        
        {/* MOBILE HAMBURGER CONTROL BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-900 focus:outline-none z-50 p-2 cursor-pointer" aria-label="Toggle Menu">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE BACKDROP BACKGROUND DRAWER */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      
      {/* MOBILE DRAWER CONTAINER (Kept clean white as well) */}
      <div className={`fixed top-0 right-0 h-screen w-80 bg-white text-zinc-900 z-40 shadow-2xl px-8 pt-28 flex flex-col space-y-2 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={handleHomeLink} className={`text-left w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all cursor-pointer outline-none ${isActive('/') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          HOME
        </button>
        <Link to="/about" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all ${isActive('/about') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          ABOUT
        </Link>
        <Link to="/services" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all ${isActive('/services') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          SERVICES
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all ${isActive('/projects') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          PROJECTS
        </Link>
        <button onClick={() => handleSectionLink('team')} className={`text-left w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all cursor-pointer outline-none ${isActive('/', '#team') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          TEAM
        </button>
        <button onClick={() => handleSectionLink('news')} className={`text-left w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all cursor-pointer outline-none ${isActive('/', '#news') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          NEWS
        </button>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-xs font-bold border-l-2 transition-all ${isActive('/contact') ? 'text-amber-600 border-amber-600 bg-zinc-50' : 'text-gray-400 border-transparent hover:text-zinc-900'}`}>
          CONTACT
        </Link>

        <div className="pt-12 mt-auto pb-8 border-t border-gray-100 text-[10px] text-gray-400 tracking-widest uppercase">
          <p>© 2026 DESIGN SCALES ARCHITECTURE</p>
        </div>
      </div>
    </nav>
  );
}
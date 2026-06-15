import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Unified helper to check if a navigation link is currently active
  const isActive = (path, hash = '') => {
    if (hash) return location.pathname === path && location.hash === hash;
    return location.pathname === path && !location.hash;
  };

  // Handles smooth scrolling for leftover sections sitting on the homepage
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO */}
        <button onClick={handleHomeLink} className="font-serif text-2xl tracking-widest font-semibold uppercase text-archDark cursor-pointer outline-none">
          Monolith
        </button>
        
        {/* DESKTOP NAVIGATION MENU */}
        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold">
          <button onClick={handleHomeLink} className={`transition-colors py-2 cursor-pointer border-b-2 outline-none ${isActive('/') ? 'text-archAccent border-archAccent' : 'text-archDark border-transparent hover:text-archAccent'}`}>
            Home
          </button>
          <Link to="/services" className={`transition-colors py-2 border-b-2 ${isActive('/services') ? 'text-archAccent border-archAccent' : 'text-archDark border-transparent hover:text-archAccent'}`}>
            Services
          </Link>
          <Link to="/projects" className={`transition-colors py-2 border-b-2 ${isActive('/projects') ? 'text-archAccent border-archAccent' : 'text-archDark border-transparent hover:text-archAccent'}`}>
            Projects
          </Link>
          <button onClick={() => handleSectionLink('team')} className={`transition-colors py-2 cursor-pointer border-b-2 outline-none ${isActive('/', '#team') ? 'text-archAccent border-archAccent' : 'text-archDark border-transparent hover:text-archAccent'}`}>
            Team
          </button>
          <button onClick={() => handleSectionLink('news')} className={`transition-colors py-2 cursor-pointer border-b-2 outline-none ${isActive('/', '#news') ? 'text-archAccent border-archAccent' : 'text-archDark border-transparent hover:text-archAccent'}`}>
            News
          </button>
          <Link to="/contact" className={`transition-colors py-2 border-b-2 ${isActive('/contact') ? 'text-archAccent border-archAccent' : 'text-archDark border-transparent hover:text-archAccent'}`}>
            Contact
          </Link>
        </div>
        
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-archDark focus:outline-none z-50 p-2 cursor-pointer relative" aria-label="Toggle Menu">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE BACKDROP DRAWER OVERLAY */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      
      {/* MOBILE SIDEBAR PANEL */}
      <div className={`fixed top-0 right-0 h-screen w-80 bg-archDark text-white z-40 shadow-2xl px-8 pt-28 flex flex-col space-y-2 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={handleHomeLink} className={`text-left w-full px-4 py-3 uppercase tracking-widest text-sm font-medium border-l-2 transition-all cursor-pointer outline-none ${isActive('/') ? 'text-archAccent border-archAccent bg-white/5' : 'text-gray-400 border-transparent hover:text-white'}`}>
          Home
        </button>
        <Link to="/services" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-sm font-medium border-l-2 transition-all ${isActive('/services') ? 'text-archAccent border-archAccent bg-white/5' : 'text-gray-400 border-transparent hover:text-white'}`}>
          Services
        </Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-sm font-medium border-l-2 transition-all ${isActive('/projects') ? 'text-archAccent border-archAccent bg-white/5' : 'text-gray-400 border-transparent hover:text-white'}`}>
          Projects
        </Link>
        <button onClick={() => handleSectionLink('team')} className={`text-left w-full px-4 py-3 uppercase tracking-widest text-sm font-medium border-l-2 transition-all cursor-pointer outline-none ${isActive('/', '#team') ? 'text-archAccent border-archAccent bg-white/5' : 'text-gray-400 border-transparent hover:text-white'}`}>
          Team
        </button>
        <button onClick={() => handleSectionLink('news')} className={`text-left w-full px-4 py-3 uppercase tracking-widest text-sm font-medium border-l-2 transition-all cursor-pointer outline-none ${isActive('/', '#news') ? 'text-archAccent border-archAccent bg-white/5' : 'text-gray-400 border-transparent hover:text-white'}`}>
          News
        </button>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={`block w-full px-4 py-3 uppercase tracking-widest text-sm font-medium border-l-2 transition-all ${isActive('/contact') ? 'text-archAccent border-archAccent bg-white/5' : 'text-gray-400 border-transparent hover:text-white'}`}>
          Contact
        </Link>

        <div className="pt-12 mt-auto pb-8 border-t border-white/10 text-[10px] text-gray-500 tracking-widest uppercase">
          <p>© 2026 MONOLITH STUDIO</p>
        </div>
      </div>
    </nav>
  );
}
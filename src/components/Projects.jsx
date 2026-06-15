import React, { useState, useEffect } from 'react';

const PROJECT_DATA = [
  { id: 1, category: 'residential', title: 'The Minimalist Oasis Villa', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', tag: 'Residential' },
  { id: 2, category: 'commercial', title: 'Vertex Glass Corporate HQ', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', tag: 'Commercial' },
  { id: 3, category: 'residential', title: 'Brutalist Concrete Penthouse', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80', tag: 'Residential / Renovation' },
  { id: 4, category: 'commercial', title: 'Aether Co-Working Hub', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', tag: 'Commercial / Interior' },
  { id: 5, category: 'offices', title: 'Skyline Executive Suites', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80', tag: 'Offices' },
  { id: 6, category: 'offices', title: 'The Prism Boardroom Complex', img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80', tag: 'Offices / Structure Design' }
];

export default function Projects({ isOverview = false }) {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);

  const displayedProjects = isOverview 
    ? PROJECT_DATA.slice(0, 3)
    : filter === 'all' 
      ? PROJECT_DATA 
      : PROJECT_DATA.filter(p => p.category === filter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? displayedProjects.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === displayedProjects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'Escape') setActiveIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filter]);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-amber-600 tracking-widest uppercase text-xs font-semibold">Our Portfolio</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 text-zinc-900">
              {isOverview ? "Featured Projects" : "All Architecture Works"}
            </h2>
          </div>
          
          {!isOverview && (
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2 text-xs uppercase tracking-widest font-bold">
              {['all', 'residential', 'commercial', 'offices'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setActiveIndex(null); }}
                  className={`px-4 py-2 transition-all outline-none cursor-pointer ${filter === cat ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-400 hover:text-zinc-900'}`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="bg-white overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
              <div 
                onClick={() => setActiveIndex(index)}
                className="overflow-hidden aspect-video bg-gray-200 cursor-zoom-in relative"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase bg-zinc-950/80 px-4 py-2 backdrop-blur-sm">
                    View Fullscreen
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-amber-600 uppercase tracking-wider font-semibold">{project.tag}</span>
                <h3 className="text-xl font-medium mt-1 text-zinc-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div> {/* <-- THIS WAS THE MISSING CLOSING DIV COMPILING ERROR FIX */}

      {/* LIGHTBOX CAROUSEL MODAL */}
      {activeIndex !== null && (
        <div 
          className="fixed inset-0 z- bg-black/95 backdrop-blur-md flex items-center justify-between p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="absolute top-6 left-6 text-white/60 text-xs tracking-widest uppercase font-mono">
            {activeIndex + 1} / {displayedProjects.length} — {displayedProjects[activeIndex].title}
          </div>

          <button 
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-600 transition-colors text-xs tracking-widest uppercase font-semibold cursor-pointer p-4 z-"
          >
            ✕ Close
          </button>

          <button 
            onClick={handlePrev}
            className="z-50 text-white hover:text-amber-600 bg-white/5 hover:bg-white/10 p-4 md:p-6 transition-all border border-white/10 cursor-pointer outline-none select-none text-xl md:text-2xl font-mono ml-2 md:ml-6"
            aria-label="Previous image"
          >
            &larr;
          </button>

          <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center mx-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={displayedProjects[activeIndex].img} 
              alt={displayedProjects[activeIndex].title} 
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/5 select-none"
            />
          </div>

          <button 
            onClick={handleNext}
            className="z-50 text-white hover:text-amber-600 bg-white/5 hover:bg-white/10 p-4 md:p-6 transition-all border border-white/10 cursor-pointer outline-none select-none text-xl md:text-2xl font-mono mr-2 md:mr-6"
            aria-label="Next image"
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  );
}
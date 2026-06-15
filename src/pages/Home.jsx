import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection'; // Import your beautiful brief summary section
import Projects from '../components/Projects';
import { ALL_SERVICES } from './ServicesPage'; 

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="h-screen relative flex items-center justify-center bg-zinc-950 overflow-hidden">
        {HERO_IMAGES.map((imgUrl, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${imgUrl}')`,
              opacity: index === currentImageIndex ? 0.45 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-amber-500 tracking-[0.3em] uppercase text-sm font-semibold inline-block mb-4">Architecture & Interior Design</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight mb-8">
            Crafting Spaces That <br/><span className="italic font-normal">Define Generations.</span>
          </h1>
          <Link to="/projects" className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-white hover:text-zinc-950 transition-all duration-300">Explore Full Portfolio</Link>
        </div>
      </section>

      {/* NEW ABOUT SECTION - Placed perfectly under the main window fold */}
      <AboutSection />

      {/* BRIEF SERVICES OVERVIEW SECTION */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-amber-500 tracking-widest uppercase text-xs font-semibold">What We Do</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 text-zinc-900">Comprehensive Design Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ALL_SERVICES.slice(0, 4).map((service) => (
            <div key={service.id} className="p-8 bg-gray-50 border border-gray-100 hover:border-amber-500 transition-all group">
              <div className="text-amber-500 text-2xl font-serif mb-4">{service.id}</div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-amber-500 transition-colors uppercase tracking-wide text-sm text-zinc-900">{service.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="inline-block border border-zinc-900 text-zinc-900 px-10 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors duration-300">
            View All 8 Studio Services &rarr;
          </Link>
        </div>
      </section>

      {/* SHORT PROJECTS OVERVIEW BLOCK */}
      <Projects isOverview={true} />
      <div className="bg-gray-50 pb-20 text-center">
        <Link to="/projects" className="inline-block bg-zinc-900 text-white px-12 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-amber-600 transition-colors duration-300">
          View All Projects &rarr;
        </Link>
      </div>

      {/* TEAM SECTION (Updated branding header subtitle) */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-amber-500 tracking-widest uppercase text-xs font-semibold">The Minds Behind Design Scales</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 text-zinc-900">Our Core Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{name: 'Elena Rostova', role: 'Principal Architect', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'}, {name: 'Marcus Vance', role: 'Head of Interior Design', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'}, {name: 'David Choi', role: 'Lead Structural Engineer', img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80'}].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-6">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900">{member.name}</h3>
              <p className="text-xs text-amber-500 uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <span className="text-amber-500 tracking-widest uppercase text-xs font-semibold">Insights & Press</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 text-zinc-900">Latest News</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-gray-100"><span className="text-xs text-gray-400">June 14, 2026</span><h3 className="text-xl font-medium mt-2 mb-4 text-zinc-900">The Future of Sustainable Urban Housing</h3></div>
          <div className="p-8 bg-white border border-gray-100"><span className="text-xs text-gray-400">May 28, 2026</span><h3 className="text-xl font-medium mt-2 mb-4 text-zinc-900">Facelifting: Remodeling Without Destroying</h3></div>
        </div>
      </section>
    </>
  );
}
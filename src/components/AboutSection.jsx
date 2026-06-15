import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* BRIEF LEFT TEXT WRAPPER */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-amber-600 tracking-widest uppercase text-xs font-bold">About Our Studio</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 text-zinc-900">
              Architecting spaces with lasting structural weight.
            </h2>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed font-light">
            Design Scales Architecture transforms complex layout needs into highly refined spatial experiences. We craft minimalist structural ecosystems that respect landscape topographies while offering unprecedented spatial utility and visual purity.
          </p>
          
          <div className="pt-2">
            {/* VIEW MORE INTERACTIVE BUTTON */}
            <Link 
              to="/about" 
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-950 border-b-2 border-zinc-950 pb-2 hover:text-amber-600 hover:border-amber-600 transition-all duration-300 group"
            >
              View Full Story 
              <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ml-2">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* RIGHT PREVIEW ACCENT MEDIA ASSET */}
        <div className="lg:col-span-7 bg-zinc-50 p-6 border border-gray-100 shadow-sm relative">
          <div className="overflow-hidden aspect-video relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
              alt="Architectural structure lines preview" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
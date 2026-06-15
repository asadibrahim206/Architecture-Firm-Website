import React, { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top on mount
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* UPPER LEAF HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-amber-600 tracking-widest uppercase text-xs font-bold">The Studio Profile</span>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 mb-6 text-zinc-900 leading-tight">
            Balancing human scale with bold structural form.
          </h1>
        </div>

        {/* ASYMMETRICAL COLUMN CONTENT MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL - HIGH END EDITORIAL PICTURE */}
          <div className="lg:col-span-7 overflow-hidden aspect-[4/3] bg-zinc-100 shadow-sm relative group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80" 
              alt="Design Scales Architecture Studio Concept" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute bottom-4 left-4 bg-zinc-950/80 text-[10px] text-zinc-300 tracking-widest uppercase px-3 py-1.5 backdrop-blur-sm">
              Design Scales HQ Workspace / © 2026
            </div>
          </div>

          {/* RIGHT PANEL - EXTENDED TEXT BIO IN DETAIL */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 text-zinc-600 text-sm leading-relaxed font-light">
            <h3 className="font-serif text-2xl text-zinc-900 font-medium tracking-wide">Our Philosophy</h3>
            <p>
              Founded on the belief that spatial composition dictates human experience, <strong>Design Scales Architecture</strong> operates at the intersection of structural permanence and poetic layout behavior. We approach every blueprint not as a mere configuration of physical concrete envelopes, but as an active dialogue between land, light, and motion.
            </p>
            <p>
              Our multidisciplinary team bridges technical rigor with creative freedom. From sweeping commercial developments to highly customized, minimalist premium residential villas, our systems focus on sustainable materiality, thermal optimization, and structural authenticity.
            </p>
            
            {/* COMPACT THREE-PILLAR MATRICES */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs uppercase font-bold text-zinc-900 tracking-wider mb-1">01 / Proportions</h4>
                <p className="text-[12px] text-zinc-500 leading-snug">Scaling environments to complement human interaction seamlessly.</p>
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold text-zinc-900 tracking-wider mb-1">02 / Precision</h4>
                <p className="text-[12px] text-zinc-500 leading-snug">Flawless architectural engineering engineering execution from masterplan to fixture.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
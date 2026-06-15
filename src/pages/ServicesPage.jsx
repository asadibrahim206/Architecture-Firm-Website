import React, { useEffect } from 'react';

export const ALL_SERVICES = [
  { id: '01', title: 'Architectural Design', desc: 'Custom, high-end residential blueprints, conceptual scheming, and spatial master-planning tailored for luxury living.', detail: 'From initial site analysis and massing studies to fully realized construction document sets, we create legacy structures.' },
  { id: '02', title: 'Interior & Renovation', desc: 'Premium interior spatial layouts, custom furniture curation, material specifications, and structural interior transformations.', detail: 'We orchestrate light, custom millwork, and premium textures to elevate internal atmospheres into works of art.' },
  { id: '03', title: 'Exterior Facelifting', desc: 'Modernizing outdated building shells using sustainable high-performance materials, premium glass, and parametric louvers.', detail: 'Give existing structures an immediate contemporary edge without compromising their core historical framework.' },
  { id: '04', title: 'Structure Design & Audit', desc: 'Advanced structural engineering assessments, seismic evaluations, load optimization, and precision foundation detailing.', detail: 'Ensuring your spatial design translates perfectly into physical construction with zero engineering compromises.' },
  { id: '05', title: 'Landscape Architecture', desc: 'Seamless integration of natural flora, luxury pools, hardscaping layouts, and ambient exterior lighting blueprints.', detail: 'We blur the lines between internal living rooms and external environments, maximizing natural site topographies.' },
  { id: '06', title: 'Sustainable & Green Building', desc: 'Passive solar design, net-zero energy tracking, rainwater systems, and LEED compliance integration.', detail: 'Future-proofing your real estate investments using ultra-efficient insulation structures and intelligent thermal boundaries.' },
  { id: '07', title: 'Commercial Development Programming', desc: 'High-density retail mapping, modular office layouts, glass corporate tower design, and zoning evaluations.', detail: 'Optimizing corporate spaces for workflow metrics, public interaction flow, and dramatic brand presence.' },
  { id: '08', title: '3D Virtual Reality Walkthroughs', desc: 'Hyper-realistic digital rendering twins, drone integration overlays, and interactive spatial VR headsets tools.', detail: 'Step completely inside your luxury building blueprint design concepts before breaking ground on the build site.' }
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-20">
          <span className="text-archAccent tracking-widest uppercase text-xs font-semibold">Our Studio Offerings</span>
          <h1 className="font-serif text-4xl md:text-5xl mt-2 text-archDark">Comprehensive Architectural Operations</h1>
          <div className="w-20 h-[2px] bg-archAccent mt-6"></div>
        </div>

        {/* Extended 8 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {ALL_SERVICES.map((service) => (
            <div key={service.id} className="group border-b border-gray-100 pb-8 flex gap-6 items-start hover:border-archAccent transition-colors duration-300">
              <span className="font-serif text-2xl text-archAccent font-light">{service.id}</span>
              <div>
                <h3 className="text-xl font-medium text-archDark uppercase tracking-wider mb-2 group-hover:text-archAccent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                  {service.desc}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
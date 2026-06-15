import React, { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "c35da8e5-fea0-4b3d-bfce-2886ed5114fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* STUDIO STRUCTURAL INFO & HOURS PANEL */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div>
            <span className="text-archAccent tracking-widest uppercase text-xs font-semibold">Connect with us</span>
            <h2 className="font-serif text-4xl mt-2 mb-6 text-archDark">Start Your Journey</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Ready to bring your spatial vision to life? Drop us a line, message our channels, or visit our studio headquarters.
            </p>
            
            {/* Studio Address Coordinates */}
            <div className="space-y-4 text-sm text-gray-600 border-b border-gray-100 pb-6">
              <p><strong>Studio:</strong> 102 Spatial Arts Plaza, Suite 400</p>
              <p><strong>Email:</strong> projects@monolithic.design</p>
            </div>

            {/* STUDIO WORKING HOURS BLOCK */}
            <div className="pt-6 border-b border-gray-100 pb-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-archDark mb-3 flex items-center gap-2">
                ⏰ Studio Hours
              </h4>
              <div className="text-sm text-gray-600 space-y-2 font-medium">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-archDark">09:00 AM – 06:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-archDark">10:00 AM – 03:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sunday:</span>
                  <span>Closed / Rest Day</span>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA CONNECTIONS BLOCK */}
            <div className="pt-6 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-archDark">Direct Channels</h4>
              <div className="flex flex-col space-y-3">
                
                {/* Official WhatsApp Integration Link */}
                <a 
                  href="https://wa.me/923000000000" // <-- Replace with your real WhatsApp digits format
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#25D366] transition-colors group"
                >
                  <span className="p-2 bg-gray-50 rounded-md group-hover:bg-[#25D366]/10 transition-colors">
                    {/* SVG Vector Graphic Logo Asset for WhatsApp */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span className="font-medium group-hover:underline">WhatsApp Studio Chat</span>
                </a>
                
                {/* Official Facebook Page Integration Link */}
                <a 
                  href="https://facebook.com/your-page-profile" // <-- Replace with your real Facebook page URL handle
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 text-sm text-gray-600 hover:text-[#1877F2] transition-colors group"
                >
                  <span className="p-2 bg-gray-50 rounded-md group-hover:bg-[#1877F2]/10 transition-colors">
                    {/* SVG Vector Graphic Logo Asset for Facebook */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </span>
                  <span className="font-medium group-hover:underline">Facebook Business Page</span>
                </a>

              </div>
            </div>
          </div>
        </div>
        
        {/* CONTACT PROPOSAL FORM MODULE */}
        <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm self-start">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-2">Your Name</label>
                <input type="text" name="name" required className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-archAccent outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-archAccent outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-2">Project Interest</label>
              <select name="project_type" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-archAccent outline-none">
                <option>Complete Architectural Blueprint</option>
                <option>Interior & Renovation Design</option>
                <option>Exterior Facelifting</option>
                <option>Structural Engineering Audit</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-gray-600 mb-2">Project Outline</label>
              <textarea name="message" rows="6" required className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-archAccent outline-none" placeholder="Tell us about the property dimension, vision, and timeline..."></textarea>
            </div>
            
            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-archDark text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-archAccent disabled:bg-gray-400 transition-colors duration-300 cursor-pointer">
              {isSubmitting ? 'Sending Request...' : 'Send Proposal Request'}
            </button>

            {submitStatus === 'success' && (
              <p className="mt-4 text-sm text-green-600 font-medium">✓ Request logged! Our architecture studio will respond shortly.</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-sm text-red-600 font-medium">✕ Submission failed. Please contact us directly.</p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
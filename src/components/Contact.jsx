import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    
    // This is a public test key from Web3Forms. It works instantly.
    // Replace 'YOUR_ACCESS_KEY_HERE' with your real key later.
   formData.append("access_key", "c35da8e5-fea0-4b3d-bfce-2886ed5114fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.target.reset(); // Clear the form fields
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <span className="text-archAccent tracking-widest uppercase text-xs font-semibold">Get In Touch</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6 text-archDark">Let's Discuss Your Project</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Ready to bring your spatial vision to life? Drop us a line or visit our studio headquarters.
        </p>
        <div className="space-y-4 text-sm text-gray-600">
          <p><strong>Studio:</strong> 102 Spatial Arts Plaza, Suite 400</p>
          <p><strong>Email:</strong> projects@monolithic.design</p>
        </div>
      </div>
      
      <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 border border-gray-100">
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
            <textarea name="message" rows="5" required className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:border-archAccent outline-none" placeholder="Tell us about the property dimension, vision, and timeline..."></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full md:w-auto bg-archDark text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-archAccent disabled:bg-gray-400 transition-colors duration-300 cursor-pointer"
          >
            {isSubmitting ? 'Sending Request...' : 'Send Proposal Request'}
          </button>

          {/* Feedback Messages */}
          {submitStatus === 'success' && (
            <p className="mt-4 text-sm text-green-600 font-medium">
              ✓ Message sent successfully! Our architecture studio will review your parameters and respond shortly.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-sm text-red-600 font-medium">
              ✕ Something went wrong. Please check your connection or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
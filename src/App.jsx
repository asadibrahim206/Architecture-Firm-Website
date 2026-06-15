import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage'; // Import new About Detail Page
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return (
    <Router>
      <div className="bg-white text-zinc-900 font-sans antialiased">
        <Preloader />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} /> {/* Render dynamic narrative view profile here */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="bg-zinc-950 text-gray-500 py-12 border-t border-zinc-900 text-center text-xs tracking-widest uppercase">
          <p>&copy; 2026 Design Scales Architecture. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
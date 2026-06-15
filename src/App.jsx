import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader'; // Import the new Preloader
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return (
    <Router>
      <div className="bg-white text-archDark font-sans antialiased">
        {/* The preloader runs its sequence right over everything seamlessly */}
        <Preloader />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer className="bg-archDark text-gray-400 py-12 border-t border-gray-800 text-center text-xs tracking-widest uppercase">
          <p>&copy; 2026 Monolith Architecture. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
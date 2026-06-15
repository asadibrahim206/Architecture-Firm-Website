import React, { useEffect } from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  // Automatically scroll users back to top when page changes mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <Projects isOverview={false} />
    </div>
  );
}
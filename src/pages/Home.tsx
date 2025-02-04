import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="container mx-auto px-6">
      <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#333333' }}>
            Hi, I'm Andrew.

          </h1>
          <p className="text-xl opacity-90 max-w-lg" style={{ color: '#333333' }}>
          I am passionate about coding and analytics to build intelligent applications that drive business decisions

          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="flex items-center px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#007BFF', color: '#FFFFFF' }}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border-2 transition-all duration-200 hover:scale-105"
              style={{ borderColor: '#007BFF', color: '#007BFF' }}
            >
              Get in Touch
            </Link>

          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-lg transition-transform duration-500 hover:scale-105"
            style={{ borderColor: '#007BFF' }}
          >
            <img
              src="/Drew.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500">
          © {new Date().getFullYear()} Andrew{' '}
          <Link to="/" className="hover:underline"></Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 mb-1">
          <a 
            href="https://github.com/drewIscoding" 
            rel="noreferrer" 
            target="_blank"
            className="text-neutral-500 hover:-translate-y-1 transition-transform duration-200"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-william-7788a91a2"
            rel="noreferrer"
            target="_blank"
            className="text-neutral-500 hover:-translate-y-1 transition-transform duration-200"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
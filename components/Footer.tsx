import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-16 px-6 z-10 relative" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 text-[10px] font-black uppercase tracking-[0.2em]">

        <div className="flex flex-wrap gap-12 text-white">
          <a href="#" className="hover:text-accent transition-colors duration-300 flex items-center gap-2 cursor-pointer" aria-label="GitHub Repository">
            <span className="w-1 h-1 bg-accent" aria-hidden="true"></span>GITHUB_REPO
          </a>
          <a href="#" className="hover:text-accent transition-colors duration-300 flex items-center gap-2 cursor-pointer" aria-label="X / Twitter">
            <span className="w-1 h-1 bg-accent" aria-hidden="true"></span>X_PROTOCOL
          </a>
          <a href="#" className="hover:text-accent transition-colors duration-300 flex items-center gap-2 cursor-pointer" aria-label="LinkedIn">
            <span className="w-1 h-1 bg-accent" aria-hidden="true"></span>LINKEDIN_CORE
          </a>
        </div>

        <div className="opacity-30 text-center md:text-right">
          © 2026 BYTE_DREAMS_SYSTEMS // KINETIC_SCAPE_ENGINE
        </div>

        <div className="flex items-center gap-4 justify-center md:justify-end">
          <span className="opacity-30">LOC: [33.7490° N, 84.3880° W]</span>
          <div className="w-2 h-2 bg-accent shadow-[0_0_10px_var(--accent-color)] animate-pulse" aria-hidden="true"></div>
        </div>

      </div>
    </footer>
  );
};
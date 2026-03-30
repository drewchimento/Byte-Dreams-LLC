import React from 'react';
import { TypewriterText } from './ui/TypewriterText';
import { ScrambleText } from './ui/ScrambleText';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 relative z-10" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none mb-12" aria-hidden="true">
                <pre className="text-[4px] md:text-[5px] lg:text-[6px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">{`  █████████     ███████    ██████   █████ ███████████   █████████     █████████  ███████████
 ███░░░░░███  ███░░░░░███ ░░██████ ░░███ ░█░░░███░░░█  ███░░░░░███   ███░░░░░███░█░░░███░░░█
███     ░░░  ███     ░░███ ░███░███ ░███ ░   ░███  ░  ░███    ░███  ███     ░░░ ░   ░███  ░ 
░███         ░███      ░███ ░███░░███░███     ░███     ░███████████ ░███             ░███    
░███         ░███      ░███ ░███ ░░██████     ░███     ░███░░░░░███ ░███             ░███    
░░███     ███░░███     ███  ░███  ░░█████     ░███     ░███    ░███ ░░███     ███    ░███    
 ░░█████████  ░░░███████░   █████  ░░█████    █████    █████   █████ ░░█████████     █████   
  ░░░░░░░░░     ░░░░░░░    ░░░░░    ░░░░░    ░░░░░    ░░░░░   ░░░░░   ░░░░░░░░░     ░░░░░    `}</pre>
              </div>

            </div>
            <div className="mt-12 lg:mt-auto space-y-6">
              <p className="text-2xl md:text-3xl font-bold opacity-60 max-w-md border-l-4 pl-6 font-heading" style={{ borderColor: 'var(--accent-warm)' }}>
                Let's talk about what AI can do for your business — no pressure, just possibilities.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-mono text-white/40 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  Free 30-min call
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  No commitment
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  Custom roadmap
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Form Container */}
            <div className="bg-black/80 backdrop-blur-xl border-2 border-white shadow-[10px_10px_0px_rgba(255,255,255,1)] p-8 md:p-12 relative">
              <div className="absolute -top-4 left-8 bg-white text-black px-4 py-1 font-black uppercase tracking-[0.2em] text-xs">
                GET_STARTED
              </div>

              <form className="space-y-12 mt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label htmlFor="contact-name" className="block text-[10px] font-black uppercase tracking-widest text-accent group-focus-within:text-white transition-colors">YOUR_NAME</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Smith"
                      className="w-full bg-transparent border-b-2 border-white/30 focus:border-accent px-0 py-2 font-mono text-white text-lg placeholder:opacity-20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="contact-email" className="block text-[10px] font-black uppercase tracking-widest text-accent group-focus-within:text-white transition-colors">YOUR_EMAIL</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-transparent border-b-2 border-white/30 focus:border-accent px-0 py-2 font-mono text-white text-lg placeholder:opacity-20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="contact-message" className="block text-[10px] font-black uppercase tracking-widest text-accent group-focus-within:text-white transition-colors">PROJECT_DETAILS</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about your business and what you'd like to automate..."
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-accent px-0 py-2 font-mono text-white text-lg placeholder:opacity-20 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 font-black uppercase text-xl transition-colors duration-300 relative overflow-hidden group cursor-pointer"
                  style={{ backgroundColor: 'var(--accent-warm)', color: '#000' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff8a50'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-warm)'; }}
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span>[</span>
                    <ScrambleText text="BOOK MY DISCOVERY CALL" />
                    <span>]</span>
                  </div>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
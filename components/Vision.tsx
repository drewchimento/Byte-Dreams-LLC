import React from 'react';
import { TypewriterText } from './ui/TypewriterText';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 px-6 relative z-10" aria-labelledby="vision-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full flex flex-col items-center">
            <TypewriterText text="The Future" as="div" className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest" typingDuration={1} />

            <h2 id="vision-heading" className="sr-only">Our Vision</h2>

            <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4" aria-hidden="true">
              <pre className="text-[3px] md:text-[5px] xl:text-[6px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">{` █████   █████ █████  █████████  █████    ███████    ██████   █████
░░███   ░░███ ░░███  ███░░░░░███░░███   ███░░░░░███ ░░██████ ░░███
 ░███    ░███  ░███ ░███    ░░░  ░███  ███     ░░███ ░███░███ ░███
 ░███    ░███  ░███ ░░█████████  ░███ ░███      ░███ ░███░░███░███
 ░░███   ███   ░███  ░░░░░░░░███ ░███ ░███      ░███ ░███ ░░██████
  ░░░█████░    ░███  ███    ░███ ░███ ░░███     ███  ░███  ░░█████
    ░░███      █████░░█████████  █████ ░░░███████░   █████  ░░█████
     ░░░      ░░░░░  ░░░░░░░░░  ░░░░░    ░░░░░░░    ░░░░░    ░░░░░`}</pre>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Primary statement */}
          <div className="border-l-4 border-accent pl-8">
            <p className="text-2xl md:text-4xl font-black font-heading leading-tight">
              The next generation of companies will not be built around people performing repetitive tasks.
            </p>
          </div>

          <div className="w-16 h-[2px] bg-accent/30 mx-auto" />

          {/* Supporting statement */}
          <p className="text-lg md:text-xl opacity-60 leading-relaxed max-w-3xl">
            They will be built around intelligent systems that handle the routine — freeing humans to focus on strategy, creativity, and relationships.
          </p>

          <div className="w-16 h-[2px] bg-accent/30 mx-auto" />

          {/* Company position */}
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            <span className="font-black font-heading" style={{ color: 'var(--accent-warm)' }}>ByteDreams AI</span>{' '}
            <span className="opacity-60">
              is your partner in building that future. We don't just implement AI — we architect the autonomous backbone of your business.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

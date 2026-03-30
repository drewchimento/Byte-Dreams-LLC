import React from 'react';
import { ScrambleText } from './ui/ScrambleText';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-32 px-6 border-y border-white/10 relative z-10" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-accent text-sm animate-pulse mb-8">
          &gt; READY_TO_TRANSFORM...
        </div>

        <h2 id="cta-heading" className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tight mb-8">
          Build Your AI-Powered Company.
        </h2>

        <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed">
          Book a free strategy session. We'll map your highest-impact AI opportunities and show you exactly how autonomous workflows can transform your operations.
        </p>

        <a
          href="#contact"
          className="inline-block mt-12 border-2 px-12 py-6 font-black uppercase text-xl transition-all duration-200 active:translate-y-1 active:shadow-none cursor-pointer group relative overflow-hidden"
          style={{
            borderColor: 'var(--accent-warm)',
            color: 'var(--accent-warm)',
            backgroundColor: 'rgba(255,107,44,0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-warm)';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,107,44,0.1)';
            e.currentTarget.style.color = 'var(--accent-warm)';
          }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>[</span>
            <ScrambleText text="BOOK YOUR STRATEGY CALL" />
            <span>]</span>
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
        </a>
      </div>
    </section>
  );
};

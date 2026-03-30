import React from 'react';
import { TypewriterText } from './ui/TypewriterText';

const OutcomeCard = ({ id, stat, label, title, desc, delay }: { id: string; stat: string; label: string; title: string; desc: string; delay: number }) => (
  <div
    className="border border-white/20 bg-black/50 p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all duration-300 group relative overflow-hidden cursor-pointer"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Hover Reveal Effect */}
    <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

    <div className="relative z-10">
      <div className="text-xs mb-8 opacity-40 font-black tracking-widest font-mono text-accent">{id}</div>
      <div className="text-5xl md:text-6xl font-black mb-4 text-white group-hover:text-accent transition-colors duration-300 tracking-tighter font-heading">{stat}</div>
      <div className="bg-white text-black text-[10px] px-2 py-1 inline-block mb-8 font-black uppercase">{label}</div>
      <h3 className="text-2xl font-black uppercase mb-4 font-heading">{title}</h3>
      <p className="text-base opacity-60 leading-relaxed font-medium">{desc}</p>
    </div>

    {/* Decorative Corners */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

export const BusinessOutcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-32 px-6 relative z-10" aria-labelledby="outcomes-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full">
            <div className="flex justify-between w-full">
              <TypewriterText text="Business Outcomes" as="div" className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest" typingDuration={1} />
              <div className="font-mono text-accent animate-pulse mb-8 text-sm">
                &gt; PERFORMANCE_METRICS...
              </div>
            </div>

            <h2 id="outcomes-heading" className="sr-only">Business Outcomes</h2>

            <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4" aria-hidden="true">
              <pre className="text-[2px] md:text-[3px] lg:text-[4px] xl:text-[5px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">{`    ███████    █████  █████ ███████████   █████████     ███████    ██████   ██████ ██████████  █████████
  ███░░░░░███ ░░███  ░░███ ░█░░░███░░░█  ███░░░░░███  ███░░░░░███ ░░██████ ██████ ░░███░░░░░█ ███░░░░░███
 ███     ░░███ ░███   ░███ ░   ░███  ░  ███     ░░░  ███     ░░███ ░███░█████░███  ░███  █ ░ ░███    ░░░
░███      ░███ ░███   ░███     ░███    ░███         ░███      ░███ ░███░░███ ░███  ░██████   ░░█████████
░███      ░███ ░███   ░███     ░███    ░███         ░███      ░███ ░███ ░░░  ░███  ░███░░█    ░░░░░░░░███
░░███     ███  ░███   ░███     ░███    ░░███     ███░░███     ███  ░███      ░███  ░███ ░   █ ███    ░███
 ░░░███████░   ░░████████      █████    ░░█████████  ░░░███████░   █████     █████ ██████████░░█████████
   ░░░░░░░      ░░░░░░░░      ░░░░░      ░░░░░░░░░     ░░░░░░░    ░░░░░     ░░░░░ ░░░░░░░░░░  ░░░░░░░░░`}</pre>
            </div>
          </div>
        </div>

        <p className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight mb-16">
          Results, not <span className="text-accent">technology.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OutcomeCard
            id="[ 01_COSTS ]"
            stat="30-70%"
            label="COST_REDUCTION"
            title="Eliminate Overhead"
            desc="Eliminate manual processes and reduce operational overhead across departments."
            delay={0}
          />
          <OutcomeCard
            id="[ 02_TIME ]"
            stat="1000s"
            label="HOURS_RECLAIMED"
            title="Hours Reclaimed"
            desc="Automate repetitive tasks and free your team to focus on high-value work."
            delay={100}
          />
          <OutcomeCard
            id="[ 03_OUTPUT ]"
            stat="5X"
            label="CAMPAIGN_OUTPUT"
            title="Campaign Output"
            desc="Launch more campaigns, content, and experiments with the same team size."
            delay={200}
          />
          <OutcomeCard
            id="[ 04_FLOW ]"
            stat="0"
            label="BOTTLENECKS"
            title="Zero Bottlenecks"
            desc="Remove human bottlenecks from critical workflows with 24/7 autonomous operation."
            delay={300}
          />
          <OutcomeCard
            id="[ 05_SCALE ]"
            stat="∞"
            label="SCALE_FACTOR"
            title="Scale Without Hiring"
            desc="Grow revenue and output without proportionally increasing headcount."
            delay={400}
          />
          <OutcomeCard
            id="[ 06_TRANSFORM ]"
            stat="AI"
            label="NATIVE_ORGANIZATION"
            title="AI-Native Organization"
            desc="Transform from AI-curious to AI-native with systems that compound over time."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

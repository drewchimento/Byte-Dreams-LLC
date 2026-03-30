import React from 'react';
import { TypewriterText } from './ui/TypewriterText';

const ServiceCard = ({ id, stat, label, title, desc, delay }: { id: string, stat: string, label: string, title: string, desc: string, delay: number }) => (
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

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 relative z-10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full">
            <div className="flex justify-between w-full">
              <TypewriterText text="What we build" as="div" className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest" typingDuration={1} />
              <div className="font-mono text-accent animate-pulse mb-8 text-sm">
                &gt; ACTIVE_SERVICE_MODULES...
              </div>
            </div>

            <h2 id="services-heading" className="sr-only">Services</h2>

            <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4" aria-hidden="true">
              <pre className="text-[3px] md:text-[5px] xl:text-[6px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">{`  █████████  ██████████ ███████████   █████   █████ █████   █████████  ██████████  █████████ 
 ███░░░░░███░░███░░░░░█░░███░░░░░███ ░░███   ░░███ ░░███   ███░░░░░███░░███░░░░░█ ███░░░░░███
░███    ░░░  ░███  █ ░  ░███    ░███  ░███    ░███  ░███  ███     ░░░  ░███  █ ░ ░███    ░░░ 
░░█████████  ░██████    ░██████████   ░███    ░███  ░███ ░███          ░██████   ░░█████████ 
 ░░░░░░░░███ ░███░░█    ░███░░░░░███  ░░███   ███   ░███ ░███          ░███░░█    ░░░░░░░░███
 ███    ░███ ░███ ░   █ ░███    ░███   ░░░█████░    ░███ ░░███     ███ ░███ ░   █ ███    ░███
░░█████████  ██████████ █████   █████    ░░███      █████ ░░█████████  ██████████░░█████████ 
 ░░░░░░░░░  ░░░░░░░░░░ ░░░░░   ░░░░░      ░░░      ░░░░░   ░░░░░░░░░  ░░░░░░░░░░  ░░░░░░░░░  `}</pre>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            id="[ 01_AGENTS ]"
            stat="$1.2M+"
            label="CLIENT_REVENUE_GENERATED"
            title="AI Assistants"
            desc="Custom-trained AI chatbots and virtual agents that handle customer questions, qualify leads, and book appointments — 24/7."
            delay={0}
          />
          <ServiceCard
            id="[ 02_AUTOMATE ]"
            stat="85%"
            label="TIME_SAVED_ON_TASKS"
            title="Workflow Automation"
            desc="We identify your manual bottlenecks and replace them with automated pipelines that run on autopilot."
            delay={100}
          />
          <ServiceCard
            id="[ 03_TOOLS ]"
            stat="4X"
            label="FASTER_DEPLOYMENT"
            title="Custom AI Tools"
            desc="Purpose-built tools that connect to your existing stack — from smart dashboards to AI-powered reporting."
            delay={200}
          />
          <ServiceCard
            id="[ 04_INSIGHTS ]"
            stat="24/7"
            label="ALWAYS_MONITORING"
            title="Data Intelligence"
            desc="Continuous data analysis, sentiment tracking, and actionable insights from your business data streams."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
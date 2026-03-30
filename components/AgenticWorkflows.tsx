import React from 'react';
import { TypewriterText } from './ui/TypewriterText';
import { UserCheck, TrendingUp, Settings, Search, HeadphonesIcon } from 'lucide-react';

const AgentCard = ({ id, icon: Icon, title, desc, delay }: { id: string; icon: React.ElementType; title: string; desc: string; delay: number }) => (
  <div
    className="bg-black/80 backdrop-blur-xl border border-white/20 p-6 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all duration-300 group relative overflow-hidden cursor-pointer"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Hover Reveal Effect */}
    <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

    <div className="relative z-10">
      <div className="text-xs mb-4 opacity-40 font-black tracking-widest font-mono text-accent">{id}</div>
      <div className="mb-4 text-accent/50 group-hover:text-accent transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-black uppercase mb-3 font-heading">{title}</h3>
      <p className="text-sm opacity-60 leading-relaxed font-medium">{desc}</p>
    </div>

    {/* Decorative Corners */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

export const AgenticWorkflows: React.FC = () => {
  return (
    <section id="agents" className="py-32 px-6 border-y border-white/10 relative overflow-hidden" aria-labelledby="agents-heading">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full">
            <div className="flex justify-between w-full">
              <TypewriterText text="Agentic Workflows" as="div" className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest" typingDuration={1} />
              <div className="font-mono text-accent animate-pulse mb-8 text-sm">
                &gt; AUTONOMOUS_AGENTS_ONLINE...
              </div>
            </div>

            <h2 id="agents-heading" className="sr-only">Agentic Workflows</h2>

            <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4" aria-hidden="true">
              <pre className="text-[3px] md:text-[5px] xl:text-[6px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">{`   █████████     █████████  ██████████ ██████   █████ ███████████  █████████
  ███░░░░░███   ███░░░░░███░░███░░░░░█░░██████ ░░███ ░█░░░███░░░█ ███░░░░░███
 ░███    ░███  ███     ░░░  ░███  █ ░  ░███░███ ░███ ░   ░███  ░ ░███    ░░░
 ░███████████ ░███          ░██████    ░███░░███░███     ░███    ░░█████████
 ░███░░░░░███ ░███    █████ ░███░░█    ░███ ░░██████     ░███     ░░░░░░░░███
 ░███    ░███ ░░███  ░░███  ░███ ░   █ ░███  ░░█████     ░███     ███    ░███
 █████   █████ ░░█████████  ██████████ █████  ░░█████    █████   ░░█████████
░░░░░   ░░░░░   ░░░░░░░░░  ░░░░░░░░░░ ░░░░░    ░░░░░    ░░░░░     ░░░░░░░░░`}</pre>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight mb-6">
            Not tools. <span className="text-accent">AI coworkers.</span>
          </p>
          <p className="text-lg md:text-xl opacity-60 max-w-3xl leading-relaxed">
            Agentic workflows are autonomous AI systems that perceive, decide, and act — handling complex business processes end-to-end without constant human oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <AgentCard
            id="[ 01_SALES ]"
            icon={UserCheck}
            title="Sales Agents"
            desc="Qualify leads, send follow-ups, book meetings, and update your CRM — all autonomously."
            delay={0}
          />
          <AgentCard
            id="[ 02_MARKETING ]"
            icon={TrendingUp}
            title="Marketing Agents"
            desc="Generate content, manage campaigns, analyze performance, and optimize spend in real-time."
            delay={100}
          />
          <AgentCard
            id="[ 03_OPS ]"
            icon={Settings}
            title="Operations Agents"
            desc="Route tasks, manage inventory, process documents, and coordinate across departments."
            delay={200}
          />
          <AgentCard
            id="[ 04_RESEARCH ]"
            icon={Search}
            title="Research Agents"
            desc="Monitor markets, analyze competitors, synthesize reports, and surface actionable insights."
            delay={300}
          />
          <AgentCard
            id="[ 05_SUPPORT ]"
            icon={HeadphonesIcon}
            title="Support Agents"
            desc="Handle tickets, resolve issues, escalate intelligently, and maintain customer satisfaction."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

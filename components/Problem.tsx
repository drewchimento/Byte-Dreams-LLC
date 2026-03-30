import React from 'react';
import { TypewriterText } from './ui/TypewriterText';
import { RefreshCw, Puzzle, Clock, DollarSign, Bot, Zap } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, desc, delay }: { icon: React.ElementType; title: string; desc: string; delay: number }) => (
  <div
    className="border border-white/20 bg-black/50 p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all duration-300 group relative overflow-hidden cursor-pointer"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Hover Reveal Effect */}
    <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

    <div className="relative z-10">
      <div className="mb-6 text-accent/50 group-hover:text-accent transition-colors duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-black uppercase mb-4 font-heading">{title}</h3>
      <p className="text-base opacity-60 leading-relaxed font-medium">{desc}</p>
    </div>

    {/* Decorative Corners */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-32 px-6 relative z-10" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full">
            <TypewriterText text="The Problem" as="div" className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest" typingDuration={1} />

            <h2 id="problem-heading" className="sr-only">The Problem</h2>

            <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4" aria-hidden="true">
              <pre className="text-[3px] md:text-[4px] lg:text-[5px] xl:text-[6px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">{` ███████████  ███████████      ███████    ███████████  █████       ██████████ ██████   ██████
░░███░░░░░███░░███░░░░░███   ███░░░░░███ ░░███░░░░░███░░███       ░░███░░░░░█░░██████ ██████
 ░███    ░███ ░███    ░███  ███     ░░███ ░███    ░███ ░███        ░███  █ ░  ░███░█████░███
 ░██████████  ░██████████  ░███      ░███ ░██████████  ░███        ░██████    ░███░░███ ░███
 ░███░░░░░░   ░███░░░░░███ ░███      ░███ ░███░░░░░███ ░███        ░███░░█    ░███ ░░░  ░███
 ░███         ░███    ░███ ░░███     ███  ░███    ░███ ░███      █ ░███ ░   █ ░███      ░███
 █████        █████   █████ ░░░███████░   ███████████  ███████████ ██████████ █████     █████
░░░░░        ░░░░░   ░░░░░    ░░░░░░░    ░░░░░░░░░░░  ░░░░░░░░░░░ ░░░░░░░░░░ ░░░░░     ░░░░░`}</pre>
            </div>
          </div>
        </div>

        <p className="text-2xl md:text-3xl font-bold opacity-60 max-w-4xl mb-16 leading-relaxed font-heading">
          Most companies are experimenting with AI. Very few are building AI systems that actually run their business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProblemCard
            icon={RefreshCw}
            title="Buried in Repetitive Work"
            desc="Your team spends hours on data entry, scheduling, and follow-ups that could be fully automated."
            delay={0}
          />
          <ProblemCard
            icon={Puzzle}
            title="Fragmented Tool Stacks"
            desc="Disconnected software creates silos, slows teams, and kills visibility across departments."
            delay={100}
          />
          <ProblemCard
            icon={Clock}
            title="Slow Decision-Making"
            desc="Without real-time data synthesis, decisions are delayed and opportunities are missed."
            delay={200}
          />
          <ProblemCard
            icon={DollarSign}
            title="Rising Hiring Costs"
            desc="Scaling through headcount alone is expensive, slow, and introduces management overhead."
            delay={300}
          />
          <ProblemCard
            icon={Bot}
            title="AI Without Systems"
            desc="Chatbots and copilots without workflow integration create novelty, not transformation."
            delay={400}
          />
          <ProblemCard
            icon={Zap}
            title="Competitors Moving Faster"
            desc="While you evaluate, competitors are deploying AI agents that operate 24/7."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

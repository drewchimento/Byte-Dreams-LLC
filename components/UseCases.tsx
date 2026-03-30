import React, { useRef, useState } from 'react';
import { Briefcase, ShoppingCart, Users, Landmark, Film, BookOpen, MapPin } from 'lucide-react';
import { TypewriterText } from './ui/TypewriterText';

interface TiltCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ id, icon, title, desc }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[400px] perspective-1000 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div
        className="w-full h-full bg-black/80 text-white border border-white/20 p-8 flex flex-col justify-between hover:bg-accent/10 hover:text-white hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] transition-all duration-300 ease-out group backdrop-blur-sm"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
          transition: 'transform 0.1s ease-out, background-color 0.3s, color 0.3s'
        }}
      >
        <div>
          <div className="font-mono text-sm font-bold opacity-60 mb-6 group-hover:text-accent transition-colors">[{id}]</div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-black uppercase leading-none font-heading">{title}</h3>
            <div className="text-white/50 group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110">
              {icon}
            </div>
          </div>
          <div className="h-[2px] w-12 bg-white/30 group-hover:bg-accent mb-6 transition-colors duration-300" />
          <p className="text-base font-bold leading-relaxed opacity-80">{desc}</p>
        </div>

        <div className="font-mono text-[10px] uppercase opacity-40 group-hover:opacity-100 transition-opacity text-accent">
          &gt; LEARN_MORE
        </div>

        {/* Background Icon Watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none transform scale-[3] text-white" aria-hidden="true">
          {icon}
        </div>
      </div>
    </div>
  );
};

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-32 px-6 text-white relative z-10 overflow-hidden" aria-labelledby="usecases-heading">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full">
            <TypewriterText text="Industry Solutions" as="div" className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest" typingDuration={1} />
            <h2 id="usecases-heading" className="sr-only">Industries We Serve</h2>
            <div className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4" aria-hidden="true">
              <pre className="text-[2px] md:text-[3px] lg:text-[4px] xl:text-[5px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">
{` █████ ██████   █████ ██████████   █████  █████  █████████  ███████████ ███████████   █████ ██████████  █████████
░░███ ░░██████ ░░███ ░░███░░░░███ ░░███  ░░███  ███░░░░░███░█░░░███░░░█░░███░░░░░███ ░░███ ░░███░░░░░█ ███░░░░░███
 ░███  ░███░███ ░███  ░███   ░░███ ░███   ░███ ░███    ░░░ ░   ░███  ░  ░███    ░███  ░███  ░███  █ ░ ░███    ░░░
 ░███  ░███░░███░███  ░███    ░███ ░███   ░███ ░░█████████     ░███     ░██████████   ░███  ░██████   ░░█████████
 ░███  ░███ ░░██████  ░███    ░███ ░███   ░███  ░░░░░░░░███    ░███     ░███░░░░░███  ░███  ░███░░█    ░░░░░░░░███
 ░███  ░███  ░░█████  ░███    ███  ░███   ░███  ███    ░███    ░███     ░███    ░███  ░███  ░███ ░   █ ███    ░███
 █████ █████  ░░█████ ██████████   ░░████████  ░░█████████     █████    █████   █████ █████ ██████████░░█████████
░░░░░ ░░░░░    ░░░░░ ░░░░░░░░░░     ░░░░░░░░    ░░░░░░░░░     ░░░░░    ░░░░░   ░░░░░ ░░░░░ ░░░░░░░░░░  ░░░░░░░░░`}
              </pre>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TiltCard
            id="APP_01"
            icon={<Users size={32} />}
            title="COACHES & CREATORS"
            desc="Automate enrollment, client communication, content delivery, and progress tracking."
          />
          <TiltCard
            id="APP_02"
            icon={<Briefcase size={32} />}
            title="AGENCIES"
            desc="Streamline project management, client reporting, proposal generation, and resource allocation."
          />
          <TiltCard
            id="APP_03"
            icon={<ShoppingCart size={32} />}
            title="E-COMMERCE"
            desc="Optimize inventory, personalize customer journeys, automate marketing, and manage fulfillment."
          />
          <TiltCard
            id="APP_04"
            icon={<Users size={32} />}
            title="CONSULTING"
            desc="Automate research, report generation, client onboarding, and knowledge management."
          />
          <TiltCard
            id="APP_05"
            icon={<Landmark size={32} />}
            title="FINTECH"
            desc="Streamline compliance, automate reporting, enhance risk analysis, and improve client advisory."
          />
          <TiltCard
            id="APP_06"
            icon={<Film size={32} />}
            title="MEDIA"
            desc="Scale content production, automate distribution, analyze engagement, and manage rights."
          />
          <TiltCard
            id="APP_07"
            icon={<BookOpen size={32} />}
            title="EDUCATION"
            desc="Personalize learning paths, automate administration, enhance student engagement, and scale tutoring."
          />
          <TiltCard
            id="APP_08"
            icon={<MapPin size={32} />}
            title="LOCAL SERVICES"
            desc="Automate scheduling, customer communication, review management, and operational workflows."
          />
        </div>
      </div>
    </section>
  );
};

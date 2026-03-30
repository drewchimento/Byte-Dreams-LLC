import React, { useState } from 'react';
import { TypewriterText } from './ui/TypewriterText';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border bg-black/50 p-6 transition-all duration-300 cursor-pointer ${
        isOpen
          ? 'border-accent shadow-[0_0_30px_rgba(0,255,65,0.1)]'
          : 'border-white/20 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-black uppercase font-heading">{question}</span>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-accent font-mono text-sm">{isOpen ? '[ - ]' : '[ + ]'}</span>
          <ChevronDown
            size={20}
            className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base opacity-70 leading-relaxed mt-4 font-mono">{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'What exactly are agentic workflows?',
    answer:
      'Agentic workflows are AI systems that go beyond simple chatbots. They can perceive their environment, make decisions, and take actions autonomously \u2014 handling complex multi-step business processes without constant human oversight.',
  },
  {
    question: 'How long does implementation typically take?',
    answer:
      'Most implementations take 2-6 weeks depending on complexity. We start with a focused pilot project to demonstrate value quickly, then expand systematically.',
  },
  {
    question: 'Will this work with our existing tools?',
    answer:
      'Yes. We integrate with your current tech stack \u2014 CRMs, project management tools, communication platforms, and databases. Our solutions enhance your existing infrastructure, not replace it.',
  },
  {
    question: 'What kind of ROI can we expect?',
    answer:
      'Most clients see 30-70% cost reduction in automated processes within the first 90 days. The exact ROI depends on your current manual workload and the processes we automate.',
  },
  {
    question: 'Is our data secure?',
    answer:
      'Absolutely. We implement enterprise-grade security protocols, data encryption, and access controls. Your data never leaves your infrastructure unless explicitly configured to do so.',
  },
  {
    question: "What if we've tried AI before and it didn't work?",
    answer:
      "Most AI failures come from treating it as a point solution rather than a systems problem. Our approach is different \u2014 we architect complete workflows, not just add AI features.",
  },
  {
    question: 'How is this different from hiring a freelancer or agency?',
    answer:
      "Freelancers build tools. We build systems. Our agentic workflows operate autonomously 24/7, continuously improve, and scale without additional headcount. We're building your AI operating system, not a one-off project.",
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work across industries including coaching, agencies, e-commerce, consulting, fintech, media, education, and local services. Our frameworks are adaptable to any business with repeatable processes.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16 border-b border-white/20 pb-8 gap-6 w-full overflow-hidden">
          <div className="w-full">
            <TypewriterText
              text="Common Questions"
              as="div"
              className="text-sm font-mono text-accent/60 mb-8 uppercase tracking-widest"
              typingDuration={1}
            />
            <h2 className="sr-only">Frequently Asked Questions</h2>
            <div
              className="hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.6)] transition-all duration-300 cursor-pointer select-none max-w-full overflow-x-auto overflow-y-hidden pb-4"
              aria-hidden="true"
            >
              <pre className="text-[2px] md:text-[3px] lg:text-[4px] xl:text-[5px] leading-none text-accent font-mono select-none whitespace-pre opacity-70 hover:opacity-100">
{` ███████████   █████████      ██████
░░███░░░░░░█  ███░░░░░███   ███░░░░███
 ░███   █ ░  ░███    ░███  ███    ░░███
 ░███████    ░███████████ ░███     ░███
 ░███░░░█    ░███░░░░░███ ░███   ██░███
 ░███  ░     ░███    ░███ ░░███ ░░████
 █████       █████   █████ ░░░██████░██
░░░░░       ░░░░░   ░░░░░    ░░░░░░ ░░`}
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

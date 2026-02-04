import React, { useEffect, useRef } from 'react';
import { createASCIIShift } from './asciiGlitch';
import Cube from './components/Cube';
import DiscoveryButton from './components/DiscoveryButton';
import ContactForm from './components/ContactForm';
import ScrollReveal from './components/ScrollReveal';
import Typewriter from './components/Typewriter';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Select all body copy elements: p, li, span, a
    // Excluding headings (h1-h6) is handled by not selecting them, 
    // but we also check parent just in case, though generic selectors are usually safe.
    // We target common body text elements.
    const selectors = [
      'p',
      'li',
      'span',
      'a',
      // 'div' // div is dangerous as it might contain structural children. sticking to leaf-ish nodes.
    ];

    const elements: HTMLElement[] = [];
    if (containerRef.current) {
      selectors.forEach(selector => {
        const els = containerRef.current!.querySelectorAll(selector);
        els.forEach((el) => {
          // Ensure it's not a heading or inside a heading-like class if needed
          // And ensure it has text content
          // [MODIFIED] Exclude typewriter elements as they handle their own glitch init
          if (el.textContent?.trim() && !el.closest('h1, h2, h3, h4, h5, h6') && !el.classList.contains('typewriter')) {
            elements.push(el as HTMLElement);
          }
        });
      });
    }

    const cleanups: (() => void)[] = [];

    elements.forEach(el => {
      const { destroy } = createASCIIShift(el, { dur: 1000, spread: 1 });
      cleanups.push(destroy);
    });

    return () => {
      cleanups.forEach(fn => fn());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <nav>
        <div className="logo heading-font">BYTE DREAMS</div>
        <div className="nav-links">
          <DiscoveryButton onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <div className="hero">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '10%' }}>
              <h1>BYTE<br />DREAMS</h1>
              <div style={{ transform: 'scale(1.2) translateY(-90px)' }}>
                <Cube />
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ABOUT US */}
        <section id="about">
          <div className="section-marker">01</div>
          <div className="content">
            <ScrollReveal>
              <h2 className="h2-style">ABOUT US</h2>
              <div style={{ maxWidth: '800px' }}>
                <Typewriter
                  text="AI does not replace people. It fundamentally redefines how they create value. AI sharpens how organizations think, decide, and execute."
                  className="mb-20"
                  speed={15}
                />
                <Typewriter
                  text="That is where we come in. We’re not the kind of consultancy that talks about what could happen someday. We build what actually works today. We design and deploy automations, tools, and operating systems that reshape how your team and business operates."
                  speed={15}
                  delay={100}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* INDUSTRY APPLICATION */}
        <section id="industries">
          <div className="section-marker">02</div>
          <div className="content">
            <h2 className="h2-style">INDUSTRY APPLICATION</h2>
            <div className="industry-grid">
              <ScrollReveal delay={0}>
                <div className="industry-card">
                  <h3>E-COMMERCE</h3>
                  <Typewriter text="Improve customer service, optimize inventory management, and personalized marketing efforts." speed={10} delay={200} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="industry-card">
                  <h3>FINANCE</h3>
                  <Typewriter text="Optimize portfolio management, risk analysis, and personalized financial advice." speed={10} delay={300} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="industry-card">
                  <h3>HEALTHCARE</h3>
                  <Typewriter text="Enhance patient scheduling, automate billing, and improve diagnostics accuracy." speed={10} delay={400} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="industry-card">
                  <h3>REAL ESTATE</h3>
                  <Typewriter text="Facilitate lead generation, property matching, and automated client communication." speed={10} delay={500} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="industry-card">
                  <h3>LOGISTICS</h3>
                  <Typewriter text="Improve route optimization, inventory management, and demand forecasting." speed={10} delay={600} />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="industry-card">
                  <h3>LEGAL</h3>
                  <Typewriter text="Optimize research, archival processes, case review, and client management systems." speed={10} delay={700} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works">
          <div className="section-marker">03</div>
          <div className="content">
            <h2 className="h2-style">HOW IT WORKS</h2>
            <div className="timeline">
              {/* BUILD GROUP */}
              <ScrollReveal delay={0}>
                <div className="timeline-group">
                  <div className="timeline-header">[Build]</div>
                  <div className="timeline-row">
                    <div className="step">
                      <div className="step-num">[01]</div>
                      <div className="step-content">
                        <span className="step-label">Research</span>
                        <Typewriter tag="h3" text="Identify automation opportunities in your business" speed={15} delay={100} />
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-num">[02]</div>
                      <div className="step-content">
                        <span className="step-label">Customize</span>
                        <Typewriter tag="h3" text="Design customized workflows" speed={15} delay={300} />
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-num">[03]</div>
                      <div className="step-content">
                        <span className="step-label">Develop</span>
                        <Typewriter tag="h3" text="System integration" speed={15} delay={500} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* DELIVER GROUP */}
              <ScrollReveal delay={200}>
                <div className="timeline-group">
                  <div className="timeline-header">[Deliver]</div>
                  <div className="timeline-row">
                    <div className="step">
                      <div className="step-num">[04]</div>
                      <div className="step-content">
                        <span className="step-label">Deploy</span>
                        <Typewriter tag="h3" text="Employee training and handover" speed={15} delay={700} />
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-num">[05]</div>
                      <div className="step-content">
                        <span className="step-label">Support</span>
                        <Typewriter tag="h3" text="Assist with ongoing automation" speed={15} delay={900} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <ScrollReveal>
          <a href="mailto:hello@bytedreams.ai" className="cta-box">
            <h2 className="heading-font">BOOK A DISCOVERY CALL —&gt;</h2>
            <p className="heading-font" style={{ marginTop: '20px', letterSpacing: '2px' }}>START YOUR CONVERGENCE UPON REALITY</p>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <ContactForm />
        </ScrollReveal>

        {/* FOOTER */}
        <section style={{ minHeight: '100px', padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
            <div className="heading-font" style={{ fontSize: '12px', opacity: 0.5 }}>BYTE DREAMS LLC <br /> © 2024</div>
            <div className="heading-font" style={{ fontSize: '12px' }}>SF / ATLANTA / REMOTE</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

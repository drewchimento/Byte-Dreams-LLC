import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <nav>
        <div className="logo heading-font">BYTE DREAMS</div>
        <div className="nav-links heading-font" style={{ fontSize: '14px' }}>
          CONTACT / DISCOVERY
        </div>
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <div className="hero">
          <h1>BYTE<br />DREAMS</h1>
          <div className="hero-sub">
            <p className="hero-tagline">We Don’t Sell AI. We Sell Outcomes. Made Possible by AI.</p>
            <p>An AI service agency bridging the gap between abstract technology and real competitive advantage.</p>
          </div>
        </div>

        {/* ABOUT US */}
        <section id="about">
          <div className="section-marker">01</div>
          <div className="content">
            <h2 className="h2-style">ABOUT US</h2>
            <div style={{ maxWidth: '800px' }}>
              <p className="mb-20">AI does not replace people. It fundamentally redefines how they create value. AI sharpens how organizations think, decide, and execute.</p>
              <p>That is where we come in. We’re not the kind of consultancy that talks about what could happen someday. We build what actually works today. We design and deploy automations, tools, and operating systems that reshape how your team and business operates.</p>
            </div>
          </div>
        </section>

        {/* INDUSTRY APPLICATION */}
        <section id="industries">
          <div className="section-marker">02</div>
          <div className="content">
            <h2 className="h2-style">INDUSTRY APPLICATION</h2>
            <div className="industry-grid">
              <div className="industry-card">
                <h3>E-COMMERCE</h3>
                <p>Improve customer service, optimize inventory management, and personalize marketing efforts.</p>
              </div>
              <div className="industry-card">
                <h3>FINANCE</h3>
                <p>Optimize portfolio management, risk analysis, and personalized financial advice.</p>
              </div>
              <div className="industry-card">
                <h3>HEALTHCARE</h3>
                <p>Enhance patient scheduling, automate billing, and improve diagnostics accuracy.</p>
              </div>
              <div className="industry-card">
                <h3>REAL ESTATE</h3>
                <p>Facilitate lead generation, property matching, and automated client communication.</p>
              </div>
              <div className="industry-card">
                <h3>LOGISTICS</h3>
                <p>Improve route optimization, inventory management, and demand forecasting.</p>
              </div>
              <div className="industry-card">
                <h3>LEGAL</h3>
                <p>Optimize research, archival processes, case review, and client management systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works">
          <div className="section-marker">03</div>
          <div className="content">
            <h2 className="h2-style">HOW IT WORKS</h2>
            <div className="timeline">
              <div className="step">
                <div className="step-num">[01]</div>
                <div>
                  <span className="step-label">Research</span>
                  <h3>Identify automation opportunities in your business</h3>
                </div>
              </div>
              <div className="step">
                <div className="step-num">[02]</div>
                <div>
                  <span className="step-label">Customize</span>
                  <h3>Design customized workflows</h3>
                </div>
              </div>
              <div className="step">
                <div className="step-num">[03]</div>
                <div>
                  <span className="step-label">Develop</span>
                  <h3>System integration</h3>
                </div>
              </div>
              <div className="step">
                <div className="step-num">[04]</div>
                <div>
                  <span className="step-label">Deploy</span>
                  <h3>Employee training and handover</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <a href="mailto:hello@bytedreams.ai" className="cta-box">
          <h2 className="heading-font">BOOK A DISCOVERY CALL —&gt;</h2>
          <p className="heading-font" style={{ marginTop: '20px', letterSpacing: '2px' }}>START YOUR CONVERGENCE UPON REALITY</p>
        </a>

        {/* FOOTER */}
        <section style={{ minHeight: '100px', padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
            <div className="heading-font" style={{ fontSize: '12px', opacity: 0.5 }}>BYTE DREAMS LLC <br /> © 2024</div>
            <div className="heading-font" style={{ fontSize: '12px' }}>SF / ATLANTA / REMOTE</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;

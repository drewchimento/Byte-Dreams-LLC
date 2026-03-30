import React, { useEffect, useRef } from 'react';
import { ScrambleText } from './ui/ScrambleText';

const MONA_LISA_ASCII = [
  "                                  _______",
  "                           _,,ad8888888888bba,_",
  "                        ,ad88888I888888888888888ba,",
  "                      ,88888888I88888888888888888888a,",
  "                    ,d888888888I8888888888888888888888b,",
  "                   d88888PP\"\"\"\" \"\"YY88888888888888888888b,",
  "                 ,d88\"'__,,--------,,,,.;ZZZY8888888888888,",
  "                ,8IIl'\"                ;;l\"ZZZIII8888888888,",
  "               ,I88l;'                  ;lZZZZZ888III8888888,",
  "             ,II88Zl;.                  ;llZZZZZ888888I888888,",
  "            ,II888Zl;.                .;;;;;lllZZZ888888I8888b",
  "           ,II8888Z;;                 `;;;;;''llZZ8888888I8888,",
  "           II88888Z;'                        .;lZZZ8888888I888b",
  "           II88888Z; _,aaa,      .,aaaaa,__.l;llZZZ88888888I888",
  "           II88888IZZZZZZZZZ,  .ZZZZZZZZZZZZZZ;llZZ88888888I888,",
  "           II88888IZZ<'(@@>Z|  |ZZZ<'(@@>ZZZZ;;llZZ888888888I88I",
  "          ,II88888;   `\"\"\" ;|  |ZZ; `\"\"\"     ;;llZ8888888888I888",
  "          II888888l            `;;          .;llZZ8888888888I888,",
  "         ,II888888Z;           ;;;        .;;llZZZ8888888888I888I",
  "         III888888Zl;    ..,   `;;       ,;;lllZZZ88888888888I888",
  "         II88888888Z;;...;(_    _)      ,;;;llZZZZ88888888888I888,",
  "         II88888888Zl;;;;;' `--'Z;.   .,;;;;llZZZZ88888888888I888b",
  "         ]I888888888Z;;;;'   \";llllll;..;;;lllZZZZ88888888888I8888,",
  "         II888888888Zl.;;\"Y88bd888P\";;,..;lllZZZZZ88888888888I8888I",
  "         II8888888888Zl;.; `\"PPP\";;;,..;lllZZZZZZZ88888888888I88888",
  "         II888888888888Zl;;. `;;;l;;;;lllZZZZZZZZW88888888888I88888",
  "         `II8888888888888Zl;.    ,;;lllZZZZZZZZWMZ88888888888I88888",
  "          II8888888888888888ZbaalllZZZZZZZZZWWMZZZ8888888888I888888,",
  "          `II88888888888888888b\"WWZZZZZWWWMMZZZZZZI888888888I888888b",
  "           `II88888888888888888;ZZMMMMMMZZZZZZZZllI888888888I8888888",
  "            `II8888888888888888 `;lZZZZZZZZZZZlllll888888888I8888888,",
  "             II8888888888888888, `;lllZZZZllllll;;.Y88888888I8888888b,",
  "            ,II8888888888888888b   .;;lllllll;;;.;..88888888I88888888b,",
  "            II888888888888888PZI;.  .`;;;.;;;..; ...88888888I8888888888,",
  "            II888888888888PZ;;';;.   ;. .;.  .;. .. Y8888888I88888888888b,",
  "           ,II888888888PZ;;'                        `8888888I8888888888888b,",
  "           II888888888'                              888888I8888888888888888b",
  "          ,II888888888                              ,888888I88888888888888888",
  "         ,d88888888888                              d888888I8888888888ZZZZZZZ",
  "      ,ad888888888888I                              8888888I8888ZZZZZZZZZZZZZ",
  "    ,d888888888888888'                              888888IZZZZZZZZZZZZZZZZZZ",
  "  ,d888888888888P'8P'                               Y888ZZZZZZZZZZZZZZZZZZZZZ",
  " ,8888888888888,  \"                                 ,ZZZZZZZZZZZZZZZZZZZZZZZZ",
  "d888888888888888,                                ,ZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
  "888888888888888888a,      _                    ,ZZZZZZZZZZZZZZZZZZZZ888888888",
  "888888888888888888888ba,_d'                  ,ZZZZZZZZZZZZZZZZZ88888888888888",
  "8888888888888888888888888888bbbaaa,,,______,ZZZZZZZZZZZZZZZ888888888888888888",
  "88888888888888888888888888888888888888888ZZZZZZZZZZZZZZZ888888888888888888888",
  "8888888888888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888888888",
  "888888888888888888888888888888888888888ZZZZZZZZZZZZZZ888888888888888888888888",
  "8888888888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888888888888",
  "88888888888888888888888888888888888ZZZZZZZZZZZZZZ8888888888888888888888888888",
  "8888888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888",
  "88888888888888888888888888888888ZZZZZZZZZZZZZZ8888888888888888888",
  "8888888888888888888888888888888ZZZZZZZZZZZZZZ88888888888888888888888888888888"
].join("\n");

export const Hero: React.FC = () => {
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: '0px 0px -80px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    [subtitleRef, buttonsRef, badgesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative">
      {/* First screen: Hero headline only – takes up full viewport */}
      <div className="min-h-screen flex flex-col justify-center px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between pointer-events-none">
          <div className="text-left w-full md:w-1/2 relative z-10 pointer-events-auto shrink-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black leading-tight tracking-normal cursor-default font-heading whitespace-nowrap">
              <span className="block hover:text-accent transition-colors duration-200">We Don't Sell AI.</span>
              <span className="block hover:text-accent transition-colors duration-200">We Sell Outcomes.</span>
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Made Possible by AI.</span>
                <span className="animate-blink text-accent">_</span>
              </span>
            </h1>
          </div>

          <div className="hidden md:flex w-full md:w-1/2 justify-end items-center opacity-[0.25] hover:opacity-[0.85] transition-opacity duration-1000 -mt-16 sm:mt-0 pointer-events-auto cursor-crosshair">
            <pre className="font-mono text-[5px] sm:text-[6px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] leading-[1.05] text-white/90 whitespace-pre">
              {MONA_LISA_ASCII}
            </pre>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Second section: revealed on scroll */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start space-y-16">

          <div
            ref={subtitleRef}
            className="scroll-reveal max-w-xl"
            style={{ transitionDelay: '0ms' }}
          >
            <p className="text-xl md:text-2xl font-bold border-l-4 border-accent pl-6 text-white/80 font-heading">
              Custom AI assistants, workflow automations, and intelligent tools — built specifically for your business.
            </p>
          </div>

          <div
            ref={buttonsRef}
            className="scroll-reveal flex flex-wrap gap-4"
            style={{ transitionDelay: '150ms' }}
          >
            <a
              href="#services"
              className="bg-white text-black px-8 py-4 font-black uppercase text-lg hover:bg-accent transition-colors clip-path-button relative group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10"><ScrambleText text="SEE SERVICES" /></span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 font-black uppercase text-lg transition-all cursor-pointer border-2"
              style={{ borderColor: 'var(--accent-warm)', color: 'var(--accent-warm)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-warm)'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent-warm)'; }}
            >
              BOOK A CALL →
            </a>
          </div>

          {/* Trust Badges */}
          <div
            ref={badgesRef}
            className="scroll-reveal w-full max-w-3xl border-t border-white/10 pt-8"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex flex-wrap gap-8 md:gap-12 items-center text-white/40 text-sm font-mono uppercase tracking-wider">
              <div className="flex items-center gap-2 cursor-default">
                <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_6px_var(--accent-color)]"></div>
                50+ Businesses Served
              </div>
              <div className="flex items-center gap-2 cursor-default">
                <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_6px_var(--accent-color)]"></div>
                98% Satisfaction Rate
              </div>
              <div className="flex items-center gap-2 cursor-default">
                <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_6px_var(--accent-color)]"></div>
                24hr Response Time
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
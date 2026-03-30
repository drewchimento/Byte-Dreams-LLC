import React from 'react';

interface HUDProps {
  isOverride: boolean;
  setIsOverride: (val: boolean) => void;
}

export const HUD: React.FC<HUDProps> = ({ isOverride, setIsOverride }) => {
  return (
    <>

      {/* Right Sidebar Stats */}
      <div className="fixed right-0 top-20 bottom-0 w-12 border-l border-white/10 bg-black/80 backdrop-blur-sm z-30 hidden xl:flex flex-col items-center py-8 font-mono text-[9px] text-accent overflow-hidden" aria-hidden="true">
        <div className="writing-vertical-rl rotate-180 uppercase font-black tracking-widest mb-8 text-white">SYS_HEALTH</div>
        <div className="flex-1 w-full overflow-hidden relative opacity-50">
          <div className="absolute top-0 left-0 w-full animate-marquee-vertical text-center leading-tight space-y-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="space-y-1">
                <p className="opacity-50">0x{Math.floor(Math.random() * 16777215).toString(16).toUpperCase().slice(0, 4)}</p>
                <p>CPU:{Math.floor(Math.random() * 10)}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-2 text-center w-full">
          <div className="w-1.5 h-1.5 bg-accent mx-auto animate-pulse"></div>
          <div className="border-t border-white/20 w-6 mx-auto"></div>
          <div>V.3.1</div>
        </div>
      </div>
    </>
  );
};
import React from 'react';

export const Background: React.FC = () => {
  const color = '#1e1e1e';
  
  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        backgroundColor: '#050505',
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, ${color} 25%, ${color} 26%, transparent 27%, transparent 74%, ${color} 75%, ${color} 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, ${color} 25%, ${color} 26%, transparent 27%, transparent 74%, ${color} 75%, ${color} 76%, transparent 77%, transparent)
        `,
        backgroundSize: '55px 55px',
      }}
    />
  );
};
import React, { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '' }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    
    if (isHovered) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayedText(prev => 
          text.split('').map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 2; // Speed of resolve
      }, 30);
    } else {
      setDisplayedText(text);
    }

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <span 
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayedText}
    </span>
  );
};
import React, { useEffect, useRef, useState } from 'react';
import { createASCIIShift } from '../asciiGlitch';

interface TypewriterProps {
    text: string;
    speed?: number; // ms per character
    delay?: number; // start delay
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
    className?: string;
    style?: React.CSSProperties;
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    speed = 20,
    delay = 0,
    tag: Tag = 'p',
    className = '',
    style = {},
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const elementRef = useRef<HTMLElement>(null);
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTyping(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isTyping) return;

        let currentIndex = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsDone(true);
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isTyping, text, speed, delay]);

    // Init glitch effect after typing is done
    useEffect(() => {
        if (isDone && elementRef.current) {
            // Initialize glitch effect
            const { destroy } = createASCIIShift(elementRef.current, { dur: 1000, spread: 1 });
            cleanupRef.current = destroy;
        }
        return () => {
            if (cleanupRef.current) cleanupRef.current();
        }
    }, [isDone]);


    return (
        <Tag
            ref={elementRef as any}
            className={`typewriter ${className}`}
            style={{
                ...style,
                minHeight: '1.2em', // Prevent layout shift
                visibility: isTyping ? 'visible' : 'hidden', // Hide until start
            }}
        >
            {displayedText}
            {!isDone && isTyping && <span className="cursor">|</span>}
        </Tag>
    );
};

export default Typewriter;

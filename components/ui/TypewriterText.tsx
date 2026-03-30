import React, { useEffect, useRef, useState } from 'react';

interface TypewriterTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
    /** Duration of the typing animation in seconds */
    typingDuration?: number;
    /** Delay before the animation starts in seconds */
    delay?: number;
    /** Number of steps (ideally matches character count) */
    steps?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    className = '',
    as: Tag = 'span',
    typingDuration = 2,
    delay = 0,
    steps,
}) => {
    const ref = useRef<HTMLElement>(null);
    const [isActive, setIsActive] = useState(false);

    const charCount = steps ?? text.length;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsActive(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref as any}
            className={`typewriter-container ${isActive ? 'typewriter-active' : ''} ${className}`}
            style={{
                '--tw-char-count': charCount,
                '--tw-typing-duration': `${typingDuration}s`,
                '--tw-typing-delay': `${delay}s`,
            } as React.CSSProperties}
        >
            {text}
        </Tag>
    );
};

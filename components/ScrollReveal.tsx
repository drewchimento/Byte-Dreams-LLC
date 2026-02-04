import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number; // Delay in ms
    threshold?: number; // Intersection threshold (0.0 - 1.0)
    duration?: number; // Animation duration in ms
    style?: React.CSSProperties; // Allow passing extra styles if needed
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0,
    threshold = 0.2, // Trigger when 20% visible
    duration = 600,
    style = {},
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // Trigger only once
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px', // Slightly offset triggering
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            style={{
                ...style,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

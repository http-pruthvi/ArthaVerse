import type { Variants } from 'framer-motion';

// HUD Animations
export const hudVariants: any = {
    cashChange: (isPositive: boolean) => ({
        scale: [1, 1.2, 1],
        color: isPositive ? ['#fff', '#4ade80', '#fff'] : ['#fff', '#ef4444', '#fff'],
        transition: { duration: 0.4 }
    }),
    stressPulse: (stressLevel: number) => ({
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
            duration: stressLevel > 50 ? 0.5 : 1.5,
            repeat: Infinity,
            ease: "linear"
        }
    }),
    chainTighten: {
        scaleX: [1, 0.9, 1],
        transition: { duration: 0.3 }
    }
};

// Scenario Transition Animations
export const scenarioVariants: Variants = {
    enter: {
        x: 50,
        opacity: 0,
        scale: 0.95
    },
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "backOut"
        }
    },
    exit: {
        x: -50,
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.3 }
    }
};

// Particle Feedback (Simple version for React Motion)
export const particleVariants = {
    initial: { y: 0, opacity: 1, scale: 0.5 },
    animate: {
        y: -50,
        opacity: 0,
        scale: 1.5,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

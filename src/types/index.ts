import type { LucideIcon } from 'lucide-react';

export interface Choice {
    id: string;
    textKey: string; // Changed from text to textKey
    cost?: number;
    icon?: LucideIcon;
    effect: {
        cash?: number;
        stress?: number;
        risk?: number;
        cropHealth?: number;
    };
    nextId?: string;
}

export interface Scenario {
    id: string;
    titleKey: string; // Changed from title to titleKey
    textKey: string;   // Changed from text to textKey
    season: 'Sowing' | 'Growing' | 'Harvest' | 'Lean';
    choices: Choice[];
    narrativeAudio?: string;
    imagePath?: string;
}

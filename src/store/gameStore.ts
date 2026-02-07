import { create } from 'zustand';

export type Language = 'en' | 'hi' | 'mr' | 'bn' | 'te' | 'ta' | 'gu' | 'kn' | 'ml' | 'pa' | 'or';
// English, Hindi, Marathi, Bengali, Telugu, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia

interface GameState {
    // Resources
    cash: number;
    stress: number;
    risk: number;
    cropHealth: number;

    // Progression
    season: 'Sowing' | 'Growing' | 'Harvest' | 'Lean';
    turn: number;
    currentScenarioId: string;
    gameOver: boolean;

    // Settings
    language: Language;
    audioEnabled: boolean;

    // State for transitions
    showSeasonSummary: boolean;
    pendingScenarioId: string | null;

    // Actions
    setLanguage: (lang: Language) => void;
    toggleAudio: () => void;
    updateResources: (cash: number, stress: number, risk: number, cropHealth: number) => void;
    setScenario: (id: string) => void;
    advanceSeason: () => void;
    resetGame: () => void;

    // Transition Actions
    setShowSeasonSummary: (show: boolean) => void;
    setPendingScenarioId: (id: string | null) => void;
}

const INITIAL_STATE = {
    cash: 5000,
    stress: 0,
    risk: 0,
    cropHealth: 100,
    season: 'Sowing' as const,
    turn: 1,
    currentScenarioId: 'start_season',
    gameOver: false,
    language: 'en' as const,
    audioEnabled: true,
    showSeasonSummary: false,
    pendingScenarioId: null,
};

export const useGameStore = create<GameState>((set) => ({
    ...INITIAL_STATE,

    setLanguage: (lang) => set({ language: lang }),

    toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),

    updateResources: (dCash, dStress, dRisk, dCropHealth) => set((state) => {
        const newCash = state.cash + dCash;
        const newStress = Math.min(100, Math.max(0, state.stress + dStress));
        const newRisk = Math.min(100, Math.max(0, state.risk + dRisk));
        const newCropHealth = Math.min(100, Math.max(0, state.cropHealth + dCropHealth));

        // Simple Game Over condition check
        const isGameOver = newCash < 0 || newCropHealth <= 0;

        return {
            cash: newCash,
            stress: newStress,
            risk: newRisk,
            cropHealth: newCropHealth,
            gameOver: isGameOver
        };
    }),

    setScenario: (id) => set({ currentScenarioId: id }),

    advanceSeason: () => set((state) => {
        const seasons = ['Sowing', 'Growing', 'Harvest', 'Lean'] as const;
        const currentIndex = seasons.indexOf(state.season);
        const nextIndex = (currentIndex + 1) % seasons.length;
        return {
            season: seasons[nextIndex],
            turn: state.turn + 1
        };
    }),

    resetGame: () => set({ ...INITIAL_STATE }),

    setShowSeasonSummary: (show) => set({ showSeasonSummary: show }),
    setPendingScenarioId: (id) => set({ pendingScenarioId: id }),
}));

import React, { useEffect } from 'react';
import { useGameStore, type Language } from '../store/gameStore';
import { HUD } from '../components/HUD';
import { ScenarioCard } from '../components/ScenarioCard';
import { getTranslation } from '../data/translations';
import { motion } from 'framer-motion';
import { ScenarioVisuals } from '../components/ScenarioVisuals';
import { SeasonSummary } from '../components/SeasonSummary';

const Game: React.FC = () => {
    const { gameOver, resetGame, language, setLanguage, cash, cropHealth, showSeasonSummary } = useGameStore();

    const t = (key: string) => getTranslation(language, key);

    useEffect(() => {
        // Reset game on mount if needed, or persist? 
        // For now, let's just ensure we aren't in a broken state.
    }, []);

    const handleRestart = () => {
        resetGame();
    };

    if (gameOver) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-800 p-8 rounded-2xl max-w-md w-full text-center border border-white/10"
                >
                    <h1 className="text-4xl font-bold text-red-500 mb-4">{t('gameOver')}</h1>
                    <p className="text-gray-300 mb-6">
                        {cash < 0 ? "You ran out of money." : cropHealth <= 0 ? "Your crops failed." : "The cycle ends here."}
                    </p>
                    <button
                        onClick={handleRestart}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all"
                    >
                        {t('restart')}
                    </button>
                </motion.div>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans selection:bg-green-500/30">
            <HUD />

            {/* Language Switcher (Floating) */}
            <div className="fixed top-20 right-4 z-40 flex gap-2">
                {(['en', 'hi', 'mr'] as Language[]).map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${language === lang ? 'bg-white text-black border-white' : 'bg-black/50 text-gray-400 border-white/20 hover:bg-white/10'}`}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div>

            <main className="pt-24 pb-12 px-4 min-h-screen container mx-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">

                    {/* Left: Scenario Card */}
                    <div className="order-2 md:order-1 flex justify-center">
                        <ScenarioCard />
                    </div>

                    {/* Right: Visuals */}
                    <div className="order-1 md:order-2 h-[50vh] md:h-auto min-h-[400px] flex items-center justify-center relative">
                        <ScenarioVisuals />
                    </div>

                </div>
            </main>

            {/* Season Summary Overlay */}
            {showSeasonSummary && <SeasonSummary />}
        </div>
    );
};

export default Game;

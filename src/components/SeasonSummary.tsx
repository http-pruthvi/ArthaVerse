import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { getTranslation } from '../data/translations';
import { Coins, ArrowRight } from 'lucide-react';

export const SeasonSummary: React.FC = () => {
    const {
        cash,
        language,
        advanceSeason,
        pendingScenarioId,
        setScenario,
        setPendingScenarioId,
        setShowSeasonSummary
    } = useGameStore();

    const handleContinue = () => {
        advanceSeason();
        if (pendingScenarioId) {
            setScenario(pendingScenarioId);
            setPendingScenarioId(null);
        }
        setShowSeasonSummary(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl"
            >
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-slate-800">
                        {getTranslation(language, 'season')} {getTranslation(language, 'next')}
                    </h2>
                    <p className="text-slate-500">Season Completed</p>
                </div>

                <div className="flex justify-center items-center space-x-4 py-6">
                    <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 w-full">
                        <div className="flex items-center justify-center space-x-2 text-yellow-600 mb-1">
                            <Coins size={24} />
                            <span className="font-semibold">{getTranslation(language, 'cash')}</span>
                        </div>
                        <div className="text-3xl font-bold text-slate-800">₹{cash}</div>
                    </div>
                </div>

                <button
                    onClick={handleContinue}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    <span>{getTranslation(language, 'next')}</span>
                    <ArrowRight size={20} />
                </button>

            </motion.div>
        </motion.div>
    );
};

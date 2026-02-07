import React, { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { getTranslation } from '../data/translations';
import { scenarios } from '../data/scenarios';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scenarioVariants } from '../utils/animations';

export const ScenarioCard: React.FC = () => {
    const { currentScenarioId, language, audioEnabled, toggleAudio, updateResources, setScenario, advanceSeason, setShowSeasonSummary, setPendingScenarioId } = useGameStore();

    const scenario = scenarios.find(s => s.id === currentScenarioId);

    const t = (key: string) => getTranslation(language, key);

    // Ref to store the current utterance to prevent garbage collection
    const utteranceRef = React.useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        // Stop any previous speech when scenario changes or component unmounts
        window.speechSynthesis.cancel();

        if (audioEnabled && scenario) {
            // Small timeout to ensure previous cancellation takes effect
            const timer = setTimeout(() => {
                // Separator changed from ". " to " " to minimize pause
                speakText(t(scenario.titleKey) + "   " + t(scenario.textKey));
            }, 100);
            return () => clearTimeout(timer);
        }

        return () => {
            window.speechSynthesis.cancel();
        }
    }, [currentScenarioId, language, audioEnabled, scenario]);

    const speakText = (text: string) => {
        if (!audioEnabled) return;

        window.speechSynthesis.cancel();

        const speak = () => {
            const utterance = new SpeechSynthesisUtterance(text);
            utteranceRef.current = utterance; // Keep reference!

            // Try to match language code (en, hi, mr)
            const voices = window.speechSynthesis.getVoices();
            const langCode = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-US';

            const voice = voices.find(v => v.lang.includes(langCode)) || voices[0];
            if (voice) utterance.voice = voice;

            // Rate and pitch adjustments for better clarity
            utterance.rate = 1.1;

            utterance.onend = () => {
                utteranceRef.current = null;
            };

            window.speechSynthesis.speak(utterance);
        };

        if (window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = speak;
        } else {
            speak();
        }
    };

    const handleChoice = (choiceId: string) => {
        window.speechSynthesis.cancel();
        if (!scenario) return;

        const choice = scenario.choices.find(c => c.id === choiceId);
        if (!choice) return;

        // Apply effects
        updateResources(
            choice.effect.cash || 0,
            choice.effect.stress || 0,
            choice.effect.risk || 0,
            choice.effect.cropHealth || 0
        );

        // Navigate
        if (choice.nextId) {
            const nextScenario = scenarios.find(s => s.id === choice.nextId);

            // Check if season changes (and it's not a loop back to same season)
            if (nextScenario && nextScenario.season !== scenario.season) {
                setPendingScenarioId(choice.nextId);
                setShowSeasonSummary(true);
            } else {
                setScenario(choice.nextId);
            }
        }
    };

    if (!scenario) return <div className="p-10 text-center">Loading Scenario...</div>;

    return (
        <div className="w-full relative z-10">

            <motion.div
                variants={scenarioVariants}
                initial="enter"
                animate="center"
                exit="exit"
                key={currentScenarioId} // Key change triggers animation
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 w-full shadow-2xl border border-white/20"
            >

                {/* Scenario Visual - New Addition */}
                {scenario.imagePath && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-48 md:h-64 w-full"
                    >
                        <img
                            src={scenario.imagePath}
                            alt={t(scenario.titleKey)}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                                {t(scenario.titleKey)}
                            </h2>
                        </div>
                    </motion.div>
                )}

                {/* Header with Audio Toggle (Adjusted layout if image exists) */}
                {!scenario.imagePath && (
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            {t(scenario.titleKey)}
                        </h2>
                        <button
                            onClick={toggleAudio}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            {audioEnabled ? <Volume2 className="text-green-400" /> : <VolumeX className="text-red-400" />}
                        </button>
                    </div>
                )}

                {/* Floating Audio Toggle if Image Exists */}
                {scenario.imagePath && (
                    <button
                        onClick={toggleAudio}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-md z-20 border border-white/20"
                    >
                        {audioEnabled ? <Volume2 className="text-green-400" /> : <VolumeX className="text-red-400" />}
                    </button>
                )}

                {/* Narrative Text */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    {t(scenario.textKey)}
                </p>

                {/* Choices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AnimatePresence>
                        {scenario.choices.map((choice, index) => {
                            const Icon = choice.icon;
                            return (
                                <motion.button
                                    key={choice.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleChoice(choice.id)}
                                    className="group relative flex flex-col items-start p-5 rounded-2xl bg-gradient-to-br from-indigo-900/80 to-purple-900/80 hover:from-indigo-800 hover:to-purple-800 border border-white/10 hover:border-white/30 transition-all transform hover:scale-[1.02] shadow-lg text-left"
                                >
                                    <div className="flex items-center justify-between w-full mb-2">
                                        {Icon && <Icon className="w-8 h-8 text-cyan-300 mb-2 group-hover:scale-110 transition-transform" />}
                                        {choice.cost && choice.cost > 0 && (
                                            <span className="bg-red-500/20 text-red-200 text-xs px-2 py-1 rounded-full border border-red-500/30">
                                                -₹{choice.cost}
                                            </span>
                                        )}
                                    </div>

                                    <span className="font-semibold text-lg text-white mb-1">
                                        {t(choice.textKey)}
                                    </span>

                                    {/* Preview Effects (Optional - can be hidden for harder difficulty) */}
                                    <div className="flex gap-2 text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {choice.effect.risk !== undefined && choice.effect.risk !== 0 && (
                                            <span className={choice.effect.risk > 0 ? "text-red-400" : "text-green-400"}>
                                                {choice.effect.risk > 0 ? "+" : ""}{choice.effect.risk}% Risk
                                            </span>
                                        )}
                                    </div>
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </motion.div>
        </div>
    );
};

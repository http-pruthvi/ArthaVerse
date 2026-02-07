import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { scenarios } from '../data/scenarios';

export const ScenarioVisuals: React.FC = () => {
    const { currentScenarioId, season } = useGameStore();
    const scenario = scenarios.find(s => s.id === currentScenarioId);

    if (!scenario) return <div className="w-full h-full bg-slate-800 rounded-3xl animate-pulse" />;

    // Determine visual theme based on scenario ID or season
    const scenarioId = scenario.id.toLowerCase();
    const isRainy = scenarioId.includes('weather') || scenarioId.includes('rain');
    const isMarket = scenarioId.includes('market') || scenarioId.includes('sell');
    const isPest = scenarioId.includes('pest');
    const isSowing = season === 'Sowing';
    const isGrowing = season === 'Growing';
    const isHarvest = season === 'Harvest';
    const isMoneyLender = scenarioId.includes('money') || scenarioId.includes('bank');
    const isHospital = scenarioId.includes('emergency') || scenarioId.includes('hospital');
    const isGov = scenarioId.includes('gov') || scenarioId.includes('scheme');

    return (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center relative overflow-hidden bg-slate-800/50 rounded-3xl border border-white/5">

            {/* Background Sky */}
            <div className={`absolute inset-0 transition-colors duration-1000 ${isRainy ? 'bg-slate-700' : 'bg-gradient-to-b from-sky-400 to-sky-200'}`} />

            {/* Sun / Moon */}
            {!isRainy && (
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.6)]"
                />
            )}

            {/* Clouds */}
            <motion.div
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10"
            >
                <Cloud color={isRainy ? "#475569" : "#fff"} size={80} />
            </motion.div>
            <motion.div
                animate={{ x: [20, -20, 20] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-1/3"
            >
                <Cloud color={isRainy ? "#475569" : "#fff"} size={60} />
            </motion.div>


            {/* Ground */}
            <div className="absolute bottom-0 w-full h-1/3 bg-[#5d4037]" />
            <div className="absolute bottom-1/3 w-full h-4 bg-[#4e342e]" />


            {/* Scene Elements */}
            <div className="absolute bottom-10 w-full px-10 flex justify-around items-end">

                {/* Sowing / Seeds */}
                {isSowing && !isPest && !isGov && (
                    <div className="flex space-x-8">
                        {[1, 2, 3, 4].map(i => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <SeedMound />
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Growing Crops */}
                {(isGrowing || isHarvest) && (
                    <div className="flex space-x-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <motion.div
                                key={i}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: isHarvest ? 1 : 0.7 }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="origin-bottom"
                            >
                                <CropPlant hasPests={!!isPest} isReady={isHarvest} />
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Market */}
                {isMarket && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-4 rounded-xl shadow-xl z-10"
                    >
                        <div className="text-4xl">⚖️💰</div>
                    </motion.div>
                )}

                {/* Money Lender / Bank */}
                {isMoneyLender && (
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex space-x-10"
                    >
                        <BankBuilding />
                        <MoneyBag />
                    </motion.div>
                )}

                {/* Hospital */}
                {isHospital && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <HospitalBuilding />
                    </motion.div>
                )}

                {/* Government Office */}
                {isGov && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <GovBuilding />
                    </motion.div>
                )}

            </div>

            {/* Weather Effects: Rain */}
            {isRainy && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -20, x: Math.random() * 300 }}
                            animate={{ y: 500 }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: Math.random() }}
                            className="absolute top-0 w-0.5 h-6 bg-blue-300 opacity-60"
                            style={{ left: `${Math.random() * 100}%` }}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

// SVG Components

const Cloud = ({ color, size }: { color: string, size: number }) => (
    <svg width={size} height={size * 0.6} viewBox="0 0 24 24" fill={color}>
        <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M6.5,19 C5.67,19,5,18.33,5,17.5S5.67,16,6.5,16S8,16.67,8,17.5S7.33,19,6.5,19z M12,19c-0.83,0-1.5-0.67-1.5-1.5S11.17,16,12,16 s1.5,0.67,1.5,1.5S12.83,19,12,19z M12,3C7.03,3,3,7.03,3,12s4.03,9,9,9s9-4.03,9-9S16.97,3,12,3z" opacity="0" />
        <path d="M18.5,10c-0.17,0-0.34,0.01-0.5,0.04C17.37,7.18,14.92,5,12,5c-3.48,0-6.38,2.56-6.92,5.92C5.03,11.01,5,11.1,5,11.2 c0,0.22,0.03,0.44,0.07,0.66C2.86,12.77,1.5,14.61,1.5,16.5c0,3.04,2.46,5.5,5.5,5.5h11.5c3.04,0,5.5-2.46,5.5-5.5 C24,13.46,21.54,11,18.5,10z" />
    </svg>
);

const SeedMound = () => (
    <svg width="40" height="20" viewBox="0 0 40 20">
        <path d="M5,20 Q20,0 35,20" fill="#795548" />
        <circle cx="20" cy="10" r="2" fill="#FDD835" />
    </svg>
);

const CropPlant = ({ hasPests, isReady }: { hasPests: boolean, isReady: boolean }) => (
    <svg width="40" height="80" viewBox="0 0 40 80">
        <path d="M20,80 Q20,40 20,20" stroke="#4CAF50" strokeWidth="4" fill="none" />
        <path d="M20,60 Q5,50 10,30" stroke="#4CAF50" strokeWidth="3" fill="none" />
        <path d="M20,50 Q35,40 30,20" stroke="#4CAF50" strokeWidth="3" fill="none" />

        {/* Grain Head */}
        <ellipse cx="20" cy="15" rx="6" ry="15" fill={isReady ? "#FDD835" : "#81C784"} />

        {/* Pests */}
        {hasPests && (
            <>
                <circle cx="15" cy="20" r="2" fill="#3E2723" />
                <circle cx="25" cy="10" r="2" fill="#3E2723" />
                <circle cx="18" cy="30" r="2" fill="#3E2723" />
            </>
        )}
    </svg>
);

const BankBuilding = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
        <rect x="20" y="40" width="60" height="60" fill="#E0E0E0" />
        <polygon points="10,40 50,10 90,40" fill="#BDBDBD" />
        <rect x="30" y="60" width="10" height="40" fill="#9E9E9E" />
        <rect x="45" y="60" width="10" height="40" fill="#9E9E9E" />
        <rect x="60" y="60" width="10" height="40" fill="#9E9E9E" />
        <text x="50" y="35" fontSize="10" textAnchor="middle" fill="#333">BANK</text>
    </svg>
);

const MoneyBag = () => (
    <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="35" r="20" fill="#FFD700" />
        <path d="M20,20 Q30,5 40,20" stroke="#FFD700" strokeWidth="5" fill="none" />
        <text x="30" y="40" fontSize="20" textAnchor="middle" fill="#F57F17">₹</text>
    </svg>
);

const HospitalBuilding = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
        <rect x="20" y="30" width="60" height="70" fill="#F5F5F5" />
        <rect x="45" y="40" width="10" height="30" fill="#EF5350" />
        <rect x="35" y="50" width="30" height="10" fill="#EF5350" />
    </svg>
);

const GovBuilding = () => (
    <svg width="120" height="100" viewBox="0 0 120 100">
        <rect x="10" y="40" width="100" height="60" fill="#ECEFF1" />
        <circle cx="60" cy="40" r="20" fill="#CFD8DC" />
        <rect x="20" y="50" width="10" height="10" fill="#455A64" />
        <rect x="40" y="50" width="10" height="10" fill="#455A64" />
        <rect x="70" y="50" width="10" height="10" fill="#455A64" />
        <rect x="90" y="50" width="10" height="10" fill="#455A64" />
        <path d="M55,20 L65,20 L65,15 L75,17 L65,19 L65,20 L55,20 Z" fill="#FF5722" /> {/* Flag */}
    </svg>
);

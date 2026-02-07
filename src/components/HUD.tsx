import React, { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';
import { getTranslation } from '../data/translations';
import { Sprout, Wallet, CloudRain, HeartPulse, AlertTriangle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { hudVariants } from '../utils/animations';

export const HUD: React.FC = () => {
    const { cash, stress, risk, cropHealth, season, language } = useGameStore();
    const t = (key: string) => getTranslation(language, key);

    const prevCash = useRef(cash);
    const cashControls = useAnimation();

    const stressControls = useAnimation();

    useEffect(() => {
        if (cash !== prevCash.current) {
            const isPositive = cash > prevCash.current;
            cashControls.start(hudVariants.cashChange(isPositive));
            prevCash.current = cash;
        }
    }, [cash, cashControls]);

    useEffect(() => {
        // Pulse faster if stress increases or is high
        stressControls.start(hudVariants.stressPulse(stress));
    }, [stress, stressControls]);


    return (
        <div className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white p-4 shadow-lg z-50 border-b border-white/10">
            <div className="max-w-4xl mx-auto flex justify-between items-center text-sm md:text-base">

                {/* Season & Day */}
                <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-900/50 rounded-lg border border-green-500/30">
                        <Sprout className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{t('season')}</div>
                        <div className="font-bold text-green-100">{t(`seasons.${season.toLowerCase()}`)}</div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="flex space-x-4 md:space-x-8">

                    {/* Cash */}
                    <div className="flex items-center space-x-2">
                        <motion.div animate={cashControls} className="p-1.5 bg-yellow-900/30 rounded-full">
                            <Wallet className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">{t('cash')}</span>
                            <motion.span
                                key={cash} // key change triggers simple react re-render, controls handles visual pop
                                className="font-bold md:text-lg text-yellow-100"
                            >
                                ₹{cash}
                            </motion.span>
                        </div>
                    </div>

                    {/* Stress */}
                    <div className="flex items-center space-x-2">
                        <motion.div animate={stressControls} className="p-1.5 bg-red-900/30 rounded-full">
                            <HeartPulse className="w-5 h-5 text-red-400" />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-400">{t('stress')}</span>
                            <div className="w-16 h-2 bg-gray-700 rounded-full mt-1 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stress}%` }}
                                    transition={{ duration: 1 }}
                                    className={`h-full ${stress > 80 ? 'bg-red-600' : stress > 50 ? 'bg-orange-500' : 'bg-blue-400'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Risk & Crop - Hidden on very small screens or consolidated */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            <AlertTriangle className={`w-4 h-4 ${risk > 50 ? 'text-red-500' : 'text-orange-400'}`} />
                            <span className="text-gray-300">{risk}% {t('risk')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CloudRain className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">{cropHealth}% {t('crop')}</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Risk/Crop Line */}
            <div className="md:hidden flex justify-between px-2 mt-2 pt-2 border-t border-white/5 text-xs text-gray-400">
                <span>{t('risk')}: {risk}%</span>
                <span>{t('crop')}: {cropHealth}%</span>
            </div>

        </div>
    );
};

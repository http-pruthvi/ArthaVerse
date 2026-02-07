import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { Sprout } from 'lucide-react';

export const Home = () => {
    const navigate = useNavigate();
    const resetGame = useGameStore((state) => state.resetGame);

    const handleStart = () => {
        resetGame();
        navigate('/game');
    };

    return (
        <div className="flex flex-col items-center justify-center h-[90vh] p-6 space-y-8 text-center bg-earth-50">
            <div className="p-6 bg-earth-100 rounded-full shadow-lg animate-bounce">
                <Sprout size={64} className="text-growth-500" />
            </div>

            <div className="space-y-2">
                <h1 className="text-4xl font-bold text-earth-700 tracking-tight">ArthaVerse</h1>
                <p className="text-earth-600 font-medium">Build Resilience. Master Money.</p>
            </div>

            <div className="space-y-4 w-full max-w-xs">
                <button
                    onClick={handleStart}
                    className="w-full py-4 bg-earth-600 hover:bg-earth-700 text-white rounded-xl text-xl shadow-xl transition-all active:scale-95"
                >
                    Start New Journey
                </button>

                <p className="text-xs text-earth-400">
                    Offline Capable • Voice Enabled • Hindi & English
                </p>
            </div>
        </div>
    );
};

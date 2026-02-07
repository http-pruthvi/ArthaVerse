import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-stone-100 text-stone-900 font-sans">
            {/* We will add a Header/Navbar here later */}
            <main className="max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden relative">
                {children}
            </main>
        </div>
    );
};

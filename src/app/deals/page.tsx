import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DealsPage() {
    return (
        <main className="min-h-screen bg-[#0f1115] text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4 text-[#E11D2E]">Today's Best Deals</h1>
                <p className="text-gray-400">Exclusive offers just for you.</p>
                <div className="mt-12 p-12 border border-dashed border-gray-700 rounded-2xl bg-[#161a22]">
                    <p>Deals coming soon...</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

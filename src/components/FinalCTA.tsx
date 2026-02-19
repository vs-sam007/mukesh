'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
    return (
        <div className="bg-navy py-12 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Visit Departmental Store Today</h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Your family store for everyday shopping. Experience the best quality groceries and household essentials under one roof.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2 mx-auto">
                    Get Directions <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
}

'use client';

import React from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const offers = [
    { id: '1', name: 'Amul Taaza Fresh Toned Milk', image: '/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png', price: 52, mrp: 56, weight: '1 L', discount: 8, rating: 4.8 },
    { id: '2', name: 'Fortune Sunlite Refined Oil', image: '/images/Gemini_Generated_Image_yzlnbayzlnbayzln.png', price: 145, mrp: 190, weight: '1 L', discount: 24, rating: 4.6 },
    { id: '3', name: 'Surf Excel Easy Wash Detergent', image: '/images/Gemini_Generated_Image_ai7v44ai7v44ai7v.png', price: 99, mrp: 140, weight: '1 kg', discount: 29, rating: 4.7 },
    { id: '4', name: 'India Gate Basmati Rice', image: '/images/Gemini_Generated_Image_dq0kgcdq0kgcdq0k.png', price: 85, mrp: 120, weight: '1 kg', discount: 30, rating: 4.9 },
    { id: '5', name: 'Tata Tea Premium', image: '/images/Gemini_Generated_Image_fvw538fvw538fvw5.png', price: 130, mrp: 160, weight: '250 g', discount: 18, rating: 4.5 },
];

export default function DailyOffers() {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto my-8 relative overflow-hidden rounded-3xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E11D2E]/5 via-[#FFF7F7] to-[#E11D2E]/5 opacity-80" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E11D2E]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#E11D2E]/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative z-10">
                {/* Header with Timer */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 px-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Flash Deals</h2>
                            <span className="bg-[#E11D2E] text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-md shadow-red-500/30">ENDING SOON</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                            <Timer size={18} className="text-[#E11D2E]" />
                            <span>Ends in: <span className="text-[#E11D2E] font-mono font-bold text-lg bg-red-50 px-2 py-0.5 rounded-lg border border-red-100 ml-1">04 : 12 : 45</span></span>
                        </div>
                    </div>
                    <button className="hidden md:flex items-center gap-1 text-sm font-bold text-[#E11D2E] hover:underline decoration-[#E11D2E] underline-offset-4 transition-all hover:translate-x-1">
                        See All Offers <ArrowRight size={16} />
                    </button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-4 px-8 md:mx-0 md:px-2 pt-2">
                    {offers.map((product) => (
                        <div key={product.id} className="min-w-[180px] md:min-w-[220px] snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="flex md:hidden justify-center mt-4">
                    <button className="flex items-center gap-1 text-sm font-bold text-[#E11D2E]">
                        View All <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}

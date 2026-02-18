'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { Timer, ArrowRight } from 'lucide-react';

export default function Deals() {
    return (
        <section className="py-16 px-4 bg-[#F9FAFB] border-y border-gray-100" id="offers">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-display font-bold text-gray-900">Today's Deals</h2>
                            <p className="text-gray-500 text-sm">Best prices for the next 24 hours</p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="flex items-center gap-2 bg-[#E11D2E] text-white px-4 py-2 rounded-lg shadow-lg shadow-red-500/30 animate-pulse">
                            <Timer size={18} />
                            <div className="flex gap-1 font-mono font-bold text-lg leading-none">
                                <span>04</span>:<span>32</span>:<span>12</span>
                            </div>
                        </div>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:bg-red-50 px-4 py-2 rounded-full transition-colors">
                        View All Deals <ArrowRight size={16} />
                    </button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {[
                        {
                            id: 'deal-1',
                            title: "Amul Taaza Homogenised Toned Milk",
                            price: "₹72",
                            originalPrice: "₹76",
                            weight: "1 L",
                            image: "/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png",
                            discount: "5% OFF"
                        },
                        {
                            id: 'deal-2',
                            title: "Lay's India's Magic Masala Chips",
                            price: "₹45",
                            originalPrice: "₹50",
                            weight: "115g",
                            image: "/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png",
                            discount: "10% OFF"
                        },
                        {
                            id: 'deal-3',
                            title: "Coca-Cola Original Taste Soft Drink",
                            price: "₹38",
                            originalPrice: "₹40",
                            weight: "750ml",
                            image: "/images/Gemini_Generated_Image_socfc6socfc6socf.png",
                            discount: "5% OFF"
                        },
                        {
                            id: 'deal-4',
                            title: "Fortune Sunlite Refined Sunflower Oil",
                            price: "₹145",
                            originalPrice: "₹160",
                            weight: "1 L",
                            image: "/images/Gemini_Generated_Image_yzlnbayzlnbayzln.png",
                            discount: "9% OFF"
                        },
                        {
                            id: 'deal-5',
                            title: "Aashirvaad Shudh Chakki Atta",
                            price: "₹255",
                            originalPrice: "₹280",
                            weight: "5 kg",
                            image: "/images/Gemini_Generated_Image_dq0kgcdq0kgcdq0k.png",
                            discount: "8% OFF"
                        }
                    ].map((product) => (
                        <div key={product.id} className="min-w-[200px] md:min-w-[240px] snap-center">
                            <ProductCard product={product} />
                            <div className="mt-2 text-center text-xs font-bold text-[#E11D2E]">Only 5 left!</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


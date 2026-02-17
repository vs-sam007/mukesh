'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { Timer } from 'lucide-react';

export default function Deals() {
    return (
        <section className="py-12 px-4 bg-dark/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Flash Deals</h2>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-red-500/20 border border-red-500/40 text-red-500 rounded-lg text-sm font-bold animate-pulse">
                        <Timer size={14} />
                        <span>Ending in 04:32:12</span>
                    </div>
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
                            image: "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
                            discount: "5% OFF",
                            time: "8 MINS"
                        },
                        {
                            id: 'deal-2',
                            title: "Lay's India's Magic Masala Chips",
                            price: "₹45",
                            originalPrice: "₹50",
                            weight: "115g",
                            image: "https://www.bigbasket.com/media/uploads/p/l/294297-3_3-lays-potato-chips-indias-magic-masala.jpg",
                            discount: "10% OFF",
                            time: "15 MINS"
                        },
                        {
                            id: 'deal-3',
                            title: "Coca-Cola Original Taste Soft Drink",
                            price: "₹38",
                            originalPrice: "₹40",
                            weight: "750ml",
                            image: "https://www.bigbasket.com/media/uploads/p/l/251006_11-coca-cola-soft-drink-original-taste.jpg",
                            discount: "5% OFF",
                            time: "12 MINS"
                        },
                        {
                            id: 'deal-4',
                            title: "Fortune Sunlite Refined Sunflower Oil",
                            price: "₹145",
                            originalPrice: "₹160",
                            weight: "1 L",
                            image: "https://www.bigbasket.com/media/uploads/p/l/274145-3_3-fortune-sunlite-refined-sunflower-oil.jpg",
                            discount: "9% OFF",
                            time: "20 MINS"
                        },
                        {
                            id: 'deal-5',
                            title: "Aashirvaad Shudh Chakki Atta",
                            price: "₹255",
                            originalPrice: "₹280",
                            weight: "5 kg",
                            image: "https://www.bigbasket.com/media/uploads/p/l/126903-2_3-aashirvaad-shudh-chakki-atta.jpg",
                            discount: "8% OFF",
                            time: "25 MINS"
                        }
                    ].map((product) => (
                        <div key={product.id} className="min-w-[200px] md:min-w-[240px] snap-center">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

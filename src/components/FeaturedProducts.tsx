'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

const featured = [
    { id: '11', name: 'Maggi 2-Minute Noodles', image: '/images/Gemini_Generated_Image_s8ptxas8ptxas8pt.png', price: 12, mrp: 14, weight: '70 g', discount: 14, rating: 4.8 },
    { id: '12', name: 'Coca Cola Soft Drink', image: '/images/Gemini_Generated_Image_socfc6socfc6socf.png', price: 40, mrp: 45, weight: '750 ml', discount: 11, rating: 4.7 },
    { id: '13', name: 'Lays Magic Masala Chips', image: '/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png', price: 20, mrp: 20, weight: '50 g', discount: 0, rating: 4.9 },
    { id: '14', name: 'Britannia Good Day Butter', image: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png', price: 25, mrp: 30, weight: '200 g', discount: 16, rating: 4.6 },
    { id: '15', name: 'Dettol Antiseptic Liquid', image: '/images/Gemini_Generated_Image_6eg7hl6eg7hl6eg7.png', price: 60, mrp: 65, weight: '125 ml', discount: 7, rating: 4.8 },
    { id: '16', name: 'Harpic Toilet Cleaner', image: '/images/Gemini_Generated_Image_a9sphra9sphra9sp.png', price: 95, mrp: 105, weight: '500 ml', discount: 9, rating: 4.7 },
];

export default function FeaturedProducts() {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto bg-dark-card/30 rounded-3xl border border-white/5 my-10">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                    <Sparkles className="text-yellow-400 fill-current" size={24} />
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">Top Picks for You</h2>
                </div>
                <button className="hidden md:flex items-center gap-1 text-sm font-bold text-green hover:underline transition-colors">
                    View All <ArrowRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {featured.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <button className="md:hidden w-full mt-6 py-3 rounded-xl border border-white/10 text-text-primary font-bold text-sm bg-dark-card hover:bg-white/5 transition-colors">
                View All Top Picks
            </button>
        </section>
    );
}

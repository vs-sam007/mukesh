'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

const featured = [
    { id: '11', title: 'Maggi 2-Minute Noodles', image: '/images/Gemini_Generated_Image_s8ptxas8ptxas8pt.png', price: '₹12', originalPrice: '₹14', weight: '70 g', discount: '14% OFF', time: '10 MINS' },
    { id: '12', title: 'Coca Cola Soft Drink', image: '/images/Gemini_Generated_Image_socfc6socfc6socf.png', price: '₹40', originalPrice: '₹45', weight: '750 ml', discount: '11% OFF', time: '10 MINS' },
    { id: '13', title: 'Lays Magic Masala Chips', image: '/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png', price: '₹20', originalPrice: '₹20', weight: '50 g', time: '10 MINS' },
    { id: '14', title: 'Britannia Good Day Butter', image: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png', price: '₹25', originalPrice: '₹30', weight: '200 g', discount: '16% OFF', time: '10 MINS' },
    { id: '15', title: 'Dettol Antiseptic Liquid', image: '/images/Gemini_Generated_Image_6eg7hl6eg7hl6eg7.png', price: '₹60', originalPrice: '₹65', weight: '125 ml', discount: '7% OFF', time: '10 MINS' },
    { id: '16', title: 'Harpic Toilet Cleaner', image: '/images/Gemini_Generated_Image_a9sphra9sphra9sp.png', price: '₹95', originalPrice: '₹105', weight: '500 ml', discount: '9% OFF', time: '10 MINS' },
];

export default function FeaturedProducts() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-1">Top Picks for You</h2>
                    <p className="text-gray-500 text-sm">Recommended based on your history</p>
                </div>

                <button className="hidden md:flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:bg-red-50 px-4 py-2 rounded-full transition-colors">
                    View All <ArrowRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {featured.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <button className="md:hidden w-full mt-6 py-3 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-gray-100 transition-colors">
                View All Top Picks
            </button>
        </section>
    );
}


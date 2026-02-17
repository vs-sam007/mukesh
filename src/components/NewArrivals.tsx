'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const newArrivals = [
    { id: '21', title: 'Epigamia Greek Yogurt', image: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png', price: '₹60', originalPrice: '₹60', weight: '90 g', isNew: true, time: '10 MINS' },
    { id: '22', title: 'Paper Boat Coconut Water', image: '/images/Gemini_Generated_Image_dpbbxndpbbxndpbb.png', price: '₹50', originalPrice: '₹55', weight: '200 ml', discount: '9% OFF', isNew: true, time: '15 MINS' },
    { id: '23', title: 'Whole Wheat Brown Bread', image: '/images/Gemini_Generated_Image_e7hwz4e7hwz4e7hw.png', price: '₹45', originalPrice: '₹50', weight: '400 g', discount: '10% OFF', isNew: true, time: '10 MINS' },
    { id: '24', title: 'Raw Pressery Almond Milk', image: '/images/Gemini_Generated_Image_fghexafghexafghe.png', price: '₹120', originalPrice: '₹150', weight: '1 L', discount: '20% OFF', isNew: true, time: '20 MINS' },
];

export default function NewArrivals() {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <span className="text-blue-400 font-bold tracking-wider text-xs uppercase mb-1 block">Fresh Stock</span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">Just Added</h2>
                </div>
                <button className="hidden md:flex items-center gap-1 text-sm font-bold text-green hover:underline transition-colors">
                    View All <ArrowRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

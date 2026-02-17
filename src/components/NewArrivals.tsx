'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const newArrivals = [
    { id: '21', name: 'Epigamia Greek Yogurt', image: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png', price: 60, mrp: 60, weight: '90 g', isNew: true, rating: 4.5 },
    { id: '22', name: 'Paper Boat Coconut Water', image: '/images/Gemini_Generated_Image_dpbbxndpbbxndpbb.png', price: 50, mrp: 55, weight: '200 ml', discount: 9, isNew: true, rating: 4.6 },
    { id: '23', name: 'Whole Wheat Brown Bread', image: '/images/Gemini_Generated_Image_e7hwz4e7hwz4e7hw.png', price: 45, mrp: 50, weight: '400 g', discount: 10, isNew: true, rating: 4.4 },
    { id: '24', name: 'Raw Pressery Almond Milk', image: '/images/Gemini_Generated_Image_fghexafghexafghe.png', price: 120, mrp: 150, weight: '1 L', discount: 20, isNew: true, rating: 4.7 },
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

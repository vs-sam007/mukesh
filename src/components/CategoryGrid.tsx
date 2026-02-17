'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
    { name: 'Vegetables & Fruits', img: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png', color: 'bg-green-500/10' },
    { name: 'Dairy & Breakfast', img: '/images/Gemini_Generated_Image_6eg7hl6eg7hl6eg7.png', color: 'bg-blue-500/10' },
    { name: 'Munchies & Chips', img: '/images/Gemini_Generated_Image_a9sphra9sphra9sp.png', color: 'bg-yellow-500/10' },
    { name: 'Cold Drinks', img: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png', color: 'bg-orange-500/10' },
    { name: 'Instant Food', img: '/images/Gemini_Generated_Image_dpbbxndpbbxndpbb.png', color: 'bg-red-500/10' },
    { name: 'Bakery & Biscuits', img: '/images/Gemini_Generated_Image_e7hwz4e7hwz4e7hw.png', color: 'bg-amber-500/10' },
    { name: 'Tea, Coffee & Health', img: '/images/Gemini_Generated_Image_fghexafghexafghe.png', color: 'bg-brown-500/10' },
    { name: 'Cleaning Essentials', img: '/images/Gemini_Generated_Image_gvnvgjgvnvgjgvnv.png', color: 'bg-cyan-500/10' },
    { name: 'Personal Care', img: '/images/Gemini_Generated_Image_n9c5ffn9c5ffn9c5.png', color: 'bg-pink-500/10' },
    { name: 'Home Needs', img: '/images/Gemini_Generated_Image_oi3d2doi3d2doi3d.png', color: 'bg-emerald-500/10' },
];

export default function CategoryGrid() {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-1">Shop by Category</h2>
                    <p className="text-text-secondary text-sm">Fresh essentials, big discounts.</p>
                </div>
                <Link href="/categories" className="hidden md:flex items-center gap-1 text-sm font-bold text-green hover:underline hover:text-green-hover transition-colors">
                    View All <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-3 cursor-pointer"
                    >
                        <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white flex items-center justify-center border border-red-50 relative overflow-hidden group-hover:border-[#E11D2E]/20 transition-all shadow-md group-hover:shadow-[0_10px_25px_rgba(225,29,46,0.15)]`}>
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center leading-tight group-hover:text-[#E11D2E] transition-colors w-24 md:w-full">
                            {cat.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            <button className="md:hidden w-full mt-6 py-3 rounded-xl border border-white/10 text-text-primary font-bold text-sm bg-dark-card hover:bg-white/5 transition-colors">
                View All Categories
            </button>
        </section>
    );
}

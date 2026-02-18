'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
    { name: 'Vegetables & Fruits', subtitle: 'Fresh from farms', img: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png', color: 'bg-green-500/10 border-green-500/20' },
    { name: 'Dairy & Breakfast', subtitle: 'Milk, Eggs, Bread', img: '/images/Gemini_Generated_Image_6eg7hl6eg7hl6eg7.png', color: 'bg-blue-500/10 border-blue-500/20' },
    { name: 'Munchies & Chips', subtitle: 'Snacks for bingeing', img: '/images/Gemini_Generated_Image_a9sphra9sphra9sp.png', color: 'bg-yellow-500/10 border-yellow-500/20' },
    { name: 'Cold Drinks', subtitle: 'Soft drinks, Juices', img: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png', color: 'bg-orange-500/10 border-orange-500/20' },
    { name: 'Instant Food', subtitle: 'Noodles, Pasta', img: '/images/Gemini_Generated_Image_dpbbxndpbbxndpbb.png', color: 'bg-red-500/10 border-red-500/20' },
    { name: 'Bakery & Biscuits', subtitle: 'Cookies, Rusk', img: '/images/Gemini_Generated_Image_e7hwz4e7hwz4e7hw.png', color: 'bg-amber-500/10 border-amber-500/20' },
    { name: 'Tea, Coffee & Health', subtitle: 'Energy Boosters', img: '/images/Gemini_Generated_Image_fghexafghexafghe.png', color: 'bg-stone-500/10 border-stone-500/20' },
    { name: 'Cleaning Essentials', subtitle: 'Detergents, Cleaners', img: '/images/Gemini_Generated_Image_gvnvgjgvnvgjgvnv.png', color: 'bg-cyan-500/10 border-cyan-500/20' },
    { name: 'Personal Care', subtitle: 'Soaps, Shampoos', img: '/images/Gemini_Generated_Image_n9c5ffn9c5ffn9c5.png', color: 'bg-pink-500/10 border-pink-500/20' },
    { name: 'Home Needs', subtitle: 'Bulbs, Batteries', img: '/images/Gemini_Generated_Image_oi3d2doi3d2doi3d.png', color: 'bg-emerald-500/10 border-emerald-500/20' },
];

export default function CategoryGrid() {
    return (
        <section className="py-16 px-4 bg-[#161a22]" id="categories">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Shop by Category</h2>
                        <p className="text-[#b8c0cc] text-lg">Fresh essentials, big discounts, delivered fast.</p>
                    </div>
                    <Link href="/categories" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#E11D2E] hover:bg-[#E11D2E]/10 px-4 py-2 rounded-full transition-colors">
                        View All Categories <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((cat, idx) => (
                        <Link href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} key={idx}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className={`group relative h-full p-6 rounded-2xl border ${cat.color} hover:bg-[#1c212b] transition-all cursor-pointer flex flex-col items-center text-center`}
                            >
                                <div className="w-32 h-32 mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-100 group-hover:text-[#E11D2E] transition-colors">{cat.name}</h3>
                                <p className="text-sm text-[#b8c0cc] mt-1">{cat.subtitle}</p>

                                <div className="mt-4 w-8 h-8 rounded-full bg-[#2a3140] flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowRight size={14} className="text-[#E11D2E]" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <button className="md:hidden w-full mt-8 py-4 rounded-xl bg-[#1c212b] border border-[#2a3140] text-white font-bold text-sm hover:bg-[#2a3140] transition-colors">
                    View All Categories
                </button>
            </div>
        </section>
    );
}


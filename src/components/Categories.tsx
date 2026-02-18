'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
    { name: 'Fruits & Vegetables', img: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png', count: '120+ Items' },
    { name: 'Atta, Rice & Pulses', img: '/images/Gemini_Generated_Image_dq0kgcdq0kgcdq0k.png', count: '80+ Items' },
    { name: 'Dairy, Bread & Eggs', img: '/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png', count: '50+ Items' },
    { name: 'Snacks & Munchies', img: '/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png', count: '200+ Items' },
    { name: 'Cold Drinks & Juices', img: '/images/Gemini_Generated_Image_socfc6socfc6socf.png', count: '60+ Items' },
    { name: 'Cleaning & Household', img: '/images/Gemini_Generated_Image_gvnvgjgvnvgjgvnv.png', count: '90+ Items' },
    { name: 'Personal Care', img: '/images/Gemini_Generated_Image_n9c5ffn9c5ffn9c5.png', count: '150+ Items' },
    { name: 'Breakfast & Sauces', img: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png', count: '70+ Items' },
];

export default function Categories() {
    return (
        <section id="categories" className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy">Shop by Category</h2>
                    <a href="#" className="hidden md:flex items-center gap-1 text-sm font-bold text-green-600 hover:underline">
                        View All <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="group border border-slate-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-card-hover transition-all bg-white"
                        >
                            <div className="h-32 md:h-48 overflow-hidden bg-slate-100">
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-slate-800 group-hover:text-green-600 transition-colors line-clamp-1">{cat.name}</h3>
                                <p className="text-xs text-slate-500 mt-1">{cat.count}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="w-full py-3 border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                        View All Categories
                    </button>
                </div>
            </div>
        </section>
    );
}

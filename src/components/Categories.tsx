'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
    { name: 'Fruits & Vegetables', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600', count: '120+ Items' },
    { name: 'Atta, Rice & Pulses', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600', count: '80+ Items' },
    { name: 'Dairy, Bread & Eggs', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=600', count: '50+ Items' },
    { name: 'Snacks & Munchies', img: 'https://images.unsplash.com/photo-1621939514649-28b12e816a8d?auto=format&fit=crop&q=80&w=600', count: '200+ Items' },
    { name: 'Cold Drinks & Juices', img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=600', count: '60+ Items' },
    { name: 'Cleaning & Household', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600', count: '90+ Items' },
    { name: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228720-1957be83f709?auto=format&fit=crop&q=80&w=600', count: '150+ Items' },
    { name: 'Breakfast & Sauces', img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600', count: '70+ Items' },
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

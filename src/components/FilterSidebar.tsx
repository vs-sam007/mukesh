'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
    {
        id: 'category',
        name: 'Category',
        options: ['Fruits & Vegetables', 'Dairy & Bakery', 'Staples', 'Snacks', 'Beverages', 'Personal Care', 'Home Care']
    },
    {
        id: 'brand',
        name: 'Brand',
        options: ['Amul', 'Britannia', 'Nestle', 'Tata', 'Haldirams', 'Coca-Cola', 'Pepsi']
    },
    {
        id: 'dietary',
        name: 'Dietary',
        options: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten Free', 'Sugar Free']
    }
];

export default function FilterSidebar() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        brand: true,
        dietary: false
    });

    const toggleSection = (id: string) => {
        setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <aside className="w-64 flex-shrink-0 hidden lg:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-white flex items-center gap-2">
                    <SlidersHorizontal size={18} /> Filters
                </h3>
                <button className="text-xs text-[#E11D2E] hover:text-[#C2000B] font-medium">Clear All</button>
            </div>

            <div className="space-y-6">
                {/* Price Range */}
                <div className="border-b border-white/5 pb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-4">Price Range</h4>
                    <div className="px-2">
                        <input type="range" min="0" max="1000" className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E11D2E]" />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>₹0</span>
                            <span>₹1000+</span>
                        </div>
                    </div>
                </div>

                {/* Dynamic Filters */}
                {filters.map((section) => (
                    <div key={section.id} className="border-b border-white/5 pb-4">
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between text-sm font-semibold text-gray-300 hover:text-white mb-2 py-1"
                        >
                            {section.name}
                            {openSections[section.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        <AnimatePresence>
                            {openSections[section.id] && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="space-y-2 overflow-hidden"
                                >
                                    {section.options.map((option, idx) => (
                                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className="peer w-4 h-4 rounded border-gray-600 bg-white/5 text-[#E11D2E] focus:ring-[#E11D2E] focus:ring-offset-0 focus:ring-offset-transparent transition-all" />
                                            </div>
                                            <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{option}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </aside>
    );
}

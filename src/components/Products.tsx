'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
    { name: 'Groceries', icon: '🌾', desc: 'Premium grains & staples' },
    { name: 'Fresh Produce', icon: '🥦', desc: 'Farm-fresh daily' },
    { name: 'Dairy', icon: '🥛', desc: 'Pure milk & cheese' },
    { name: 'Snacks', icon: '🍫', desc: 'Imported & local treats' },
    { name: 'Household', icon: '🧴', desc: 'Essentials for home' },
    { name: 'Personal Care', icon: '🧼', desc: 'Beauty & wellness' },
];

export default function Products() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Curated Collections</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Handpicked for quality and freshness. Everything you need, elegantly arranged.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item, index) => (
                        <motion.div
                            key={index}
                            style={{ y: index % 2 === 0 ? 0 : y }} // Staggered parallax effect
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative h-[300px] glass-panel rounded-2xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors duration-500 cursor-pointer"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 transition-all duration-700 rounded-2xl" />

                            <div className="relative z-10">
                                <span className="text-6xl mb-6 block filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">{item.name}</h3>
                                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                            </div>

                            <div className="relative z-10 flex justify-end">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400/50 group-hover:bg-amber-500/10 transition-all">
                                    <span className="text-slate-400 group-hover:text-amber-400">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

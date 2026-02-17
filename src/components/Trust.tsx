'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
    "Over 30 years of family trust",
    "Hygenic and sanitized environment",
    "Direct sourcing from local farmers",
    "Free home delivery within 5km",
    "Easy returns and exchanges",
    "Digital payment friendly"
];

export default function Trust() {
    return (
        <section className="py-20 px-6 bg-slate-950 overflow-hidden text-white relative">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] w-full bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 transform origin-bottom-right border border-white/5"
                >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Storefront Image */}
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3')" }}
                    />

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute top-10 right-10 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center border border-white/10"
                    >
                        <span className="text-3xl font-bold text-green-400">30+</span>
                        <span className="text-xs text-slate-400 uppercase tracking-widest">Years</span>
                    </motion.div>
                </motion.div>

                {/* Right Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-semibold mb-6 border border-yellow-500/20">
                        Why Choose Us?
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Not just a store, <br />
                        <span className="text-green-500">a part of your family.</span>
                    </h2>
                    <p className="text-slate-400 mb-8 text-lg font-light">
                        We believe in building relationships, not just customers. Every product on our shelf is selected with the same care you would use for your own family.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                                <span className="text-slate-200 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <button className="mt-10 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
                        Read Our Story
                    </button>
                </motion.div>

            </div>
        </section>
    );
}

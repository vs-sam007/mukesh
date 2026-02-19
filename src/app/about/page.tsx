'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Award, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-dark text-text-primary font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green/5 via-dark to-dark z-0" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green font-bold tracking-wider text-sm uppercase mb-4 block"
                    >
                        Since 1995
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Serving Lucknow with <span className="text-gradient">Love & Quality</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-text-secondary text-lg md:text-xl leading-relaxed"
                    >
                        From a small kirana store in Alambagh to Lucknow&apos;s most trusted departmental store. This is the story of Departmental Store.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/images/Gemini_Generated_Image_ai7v44ai7v44ai7v.png"
                            alt="Store Interior"
                            className="rounded-3xl shadow-2xl border border-white/5 w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-display font-bold text-white">Our Humble Beginnings</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Departmental Store started as a dream in 1995. Mr. Mukesh Kumar wanted to create a place where families in Alambagh could find high-quality groceries without compromising on price.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            What began as a 200 sq. ft. shop is now a comprehensive departmental store, but our core values remain the same: <strong>Freshness, Trust, and Community.</strong>
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-dark-card p-4 rounded-xl border border-white/5">
                                <h3 className="text-2xl font-bold text-green mb-1">25+</h3>
                                <p className="text-sm text-text-secondary">Years of Service</p>
                            </div>
                            <div className="bg-dark-card p-4 rounded-xl border border-white/5">
                                <h3 className="text-2xl font-bold text-green mb-1">10k+</h3>
                                <p className="text-sm text-text-secondary">Happy Families</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 px-4 bg-dark-card/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-display font-bold text-center mb-12">Why We Are Special</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: "Quality Guarantee", desc: "We source directly from farmers and trusted brands to ensure you get only the best." },
                            { icon: Heart, title: "Customer First", desc: "For us, you are not just a customer, but a part of our extended family." },
                            { icon: TrendingUp, title: "Fair Pricing", desc: "Premium quality shouldn't come with a premium price tag. We offer the best market rates." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-dark-card border border-white/5 p-8 rounded-2xl hover:border-green/30 transition-colors text-center"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-green">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

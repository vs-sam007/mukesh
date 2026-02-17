'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Need something? <br />
                    <span className="text-green-400">Call us or visit today!</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-slate-300 text-lg mb-12"
                >
                    We are open every day from 9:00 AM to 10:00 PM. <br />
                    Free home delivery for orders above ₹500 within 2km radius.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+919876543210"
                        className="flex flex-col items-center justify-center w-40 h-40 bg-white text-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all group"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Phone size={24} />
                        </div>
                        <span className="font-bold">Call Now</span>
                        <span className="text-xs text-slate-400 mt-1">+91 98765...</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex flex-col items-center justify-center w-40 h-40 bg-green-600 text-white rounded-3xl shadow-xl hover:bg-green-500 transition-all shadow-green-500/30"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-3">
                            <MessageCircle size={24} />
                        </div>
                        <span className="font-bold">WhatsApp</span>
                        <span className="text-xs text-green-100 mt-1">Order Online</span>
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex flex-col items-center justify-center w-40 h-40 bg-slate-800 text-white rounded-3xl shadow-xl hover:bg-slate-700 transition-all border border-slate-700"
                    >
                        <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 mb-3 group-hover:text-white">
                            <Navigation size={24} />
                        </div>
                        <span className="font-bold">Directions</span>
                        <span className="text-xs text-slate-500 mt-1">Locate Us</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import { Search, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const bannerImages = [
    '/images/Gemini_Generated_Image_ai7v44ai7v44ai7v.png',
    '/images/Gemini_Generated_Image_dq0kgcdq0kgcdq0k.png',
    '/images/Gemini_Generated_Image_fvw538fvw538fvw5.png',
    '/images/Gemini_Generated_Image_s8ptxas8ptxas8pt.png',
    '/images/Gemini_Generated_Image_socfc6socfc6socf.png',
    '/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png',
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center pt-40 pb-16 px-4 overflow-hidden">

            {/* Background Carousel */}
            <div className="absolute inset-0 z-0 bg-white">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentImage}
                        src={bannerImages[currentImage]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full object-cover"
                        alt="Hero Background"
                    />
                </AnimatePresence>
                {/* White Tint Overlay for Contrast */}
                <div className="absolute inset-0 bg-white/50" />

                {/* Gradient Fade from Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-white/80 to-transparent" />

                {/* Radial Accents */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,46,0.05)_0%,transparent_40%),radial-gradient(circle_at_top_left,rgba(225,29,46,0.05)_0%,transparent_40%)]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm shadow-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D2E] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D2E]"></span>
                    </span>
                    <span className="text-[#E11D2E] font-bold text-xs uppercase tracking-wider">Delivery in 10-30 mins ⚡</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-gray-900 drop-shadow-sm"
                >
                    <span className="block">Groceries delivered</span>
                    <span className="text-gradient">faster than you think.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10 font-medium leading-relaxed"
                >
                    From fresh veggies to daily essentials, get everything delivered to your doorstep in minutes. No minimum order.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full max-w-2xl relative group"
                >
                    <div className="absolute inset-0 bg-[#E11D2E]/20 rounded-2xl blur-xl group-hover:bg-[#E11D2E]/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="relative bg-white border border-red-100 rounded-2xl flex items-center p-2 shadow-xl shadow-red-500/5 focus-within:border-[#E11D2E]/50 transition-colors">
                        <Search className="text-gray-400 ml-3" size={24} />
                        <input
                            type="text"
                            placeholder="Search for 'milk', 'chips', 'vegetables'..."
                            className="bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 flex-1 px-4 py-3 text-lg"
                        />
                        <button className="hidden md:block bg-gradient-to-r from-[#E11D2E] to-[#BE123C] text-white font-bold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5">
                            Search
                        </button>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10"
                >
                    <button
                        onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors flex items-center gap-2 shadow-lg"
                    >
                        Shop Now
                    </button>
                    <button
                        onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-white border border-red-100 text-[#E11D2E] font-bold rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2 shadow-sm"
                    >
                        View Today's Deals <Zap size={18} className="fill-current" />
                    </button>
                </motion.div>
            </div>

        </section>
    );
}

function FloatingIcon({ src, delay, x, y, rotate }: { src: string, delay: number, x: string, y: string, rotate: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0], rotate: [rotate, rotate + 10, rotate] }}
            transition={{
                duration: 0.5,
                delay: delay,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ left: x, top: y }}
            className="absolute hidden lg:block z-0 pointer-events-none drop-shadow-xl opacity-60 mix-blend-multiply"
        >
            <img src={src} alt="icon" className="w-16 h-16 md:w-24 md:h-24 hover:scale-110 transition-transform" />
        </motion.div>
    );
}

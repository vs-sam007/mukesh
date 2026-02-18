'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        image: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png',
        alt: 'Groceries & Daily Essentials',
        title: <>Fresh Groceries. <br /><span className="text-[#E11D2E]">Delivered Daily.</span></>,
        subtext: "Farm-fresh vegetables, fruits, and daily staples at your doorstep."
    },
    {
        id: 2,
        image: '/images/Gemini_Generated_Image_n9c5ffn9c5ffn9c5.png',
        alt: 'Beauty & Personal Care',
        title: <>Radiate Confidence. <br /><span className="text-[#E11D2E]">Premium Beauty.</span></>,
        subtext: "Top brands for skincare, makeup, and personal grooming."
    },
    {
        id: 3,
        image: '/images/Gemini_Generated_Image_oi3d2doi3d2doi3d.png',
        alt: 'Home & Kitchen Products',
        title: <>Essentials for a <br /><span className="text-[#E11D2E]">Happy Home.</span></>,
        subtext: "Cookware, cleaning supplies, and home organization solutions."
    },
    {
        id: 4,
        image: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png',
        alt: 'Snacks & Beverages',
        title: <>Snacks, Drinks & <br /><span className="text-[#E11D2E]">Instant Cravings.</span></>,
        subtext: "From chips to chocolates, get everything in minutes."
    },
    {
        id: 5,
        image: '/images/Gemini_Generated_Image_gvnvgjgvnvgjgvnv.png',
        alt: 'Electronics & Accessories',
        title: <>Smart Living. <br /><span className="text-[#E11D2E]">Top Electronics.</span></>,
        subtext: "Headphones, chargers, and gadgets for your modern lifestyle."
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // 3 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-[#0f1115] overflow-hidden">
            {/* Static Background Slider */}
            <AnimatePresence mode='popLayout'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 5, ease: "linear" } // Ken Burns Effect
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        className="w-full h-full object-cover opacity-70"
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/50 to-transparent" />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={`text-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-5xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                            {slides[currentSlide].title}
                        </h1>

                        <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                            {slides[currentSlide].subtext}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/products" className="px-10 py-5 bg-[#E11D2E] hover:bg-[#C2000B] text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-600/30 flex items-center gap-3">
                                Start Shopping <ShoppingBag size={22} />
                            </Link>
                            <Link href="/deals" className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-full transition-all flex items-center gap-3">
                                View Today’s Deals <ArrowRight size={22} />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`transition-all duration-500 rounded-full h-2 ${currentSlide === idx ? 'w-10 bg-[#E11D2E]' : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, User, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import TrustStrip from '@/components/TrustStrip';

const CATEGORIES = [
    "Groceries", "Snacks & Beverages", "Personal Care", "Beauty",
    "Baby Care", "Home & Kitchen", "Cleaning", "Electronics"
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openDrawer, itemCount } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
                <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
                    <TrustStrip />
                </div>

                <header
                    className={`relative w-full transition-all duration-300 border-b ${scrolled
                        ? 'bg-[#0f1115]/90 backdrop-blur-xl shadow-lg border-transparent py-2'
                        : 'bg-transparent border-transparent py-4'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4 md:gap-8">

                        {/* 1. Hamburger (Mobile) */}
                        <button
                            className="md:hidden p-2 -ml-2 text-white hover:bg-white/10 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>

                        {/* 2. Logo */}
                        <Link href="/" className="flex items-center gap-2 shrink-0 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#E11D2E] to-[#BE123C] text-white rounded-xl flex items-center justify-center font-display font-bold text-2xl shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform">
                                M
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-display font-bold text-lg text-white tracking-tight">Departmental Store</span>
                            </div>
                        </Link>

                        {/* 3. Search Bar (Centered & Prominent) */}
                        <div className={`hidden md:flex flex-1 max-w-2xl relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.01]' : ''}`}>
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    placeholder="Search for products, brands and more..."
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    className={`w-full pl-5 pr-12 py-2.5 rounded-full border border-transparent bg-[#1c212b] text-white placeholder-gray-500 focus:outline-none focus:bg-[#161a22] focus:border-[#E11D2E] focus:ring-4 focus:ring-[#E11D2E]/10 transition-all text-sm shadow-inner`}
                                />
                                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#E11D2E] hover:bg-[#BE123C] text-white px-4 rounded-full transition-colors flex items-center justify-center shadow-lg shadow-red-900/20">
                                    <Search size={18} />
                                </button>
                            </div>
                        </div>

                        {/* 4. Right Actions */}
                        <div className="flex items-center gap-1 md:gap-4 shrink-0">

                            {/* Account */}
                            <button className="hidden md:flex flex-col items-center justify-center min-w-[60px] p-1 rounded-lg hover:bg-white/5 group text-gray-300 hover:text-white transition-colors">
                                <User size={22} strokeWidth={1.5} className="mb-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-medium">Account</span>
                            </button>

                            {/* Wishlist */}
                            <button className="hidden md:flex flex-col items-center justify-center min-w-[60px] p-1 rounded-lg hover:bg-white/5 group text-gray-300 hover:text-white transition-colors">
                                <Heart size={22} strokeWidth={1.5} className="mb-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-medium">Wishlist</span>
                            </button>

                            {/* Cart */}
                            <button
                                onClick={openDrawer}
                                className="flex md:flex-col items-center justify-center min-w-[40px] md:min-w-[60px] p-1 rounded-lg hover:bg-white/5 group text-gray-300 hover:text-white transition-colors relative"
                            >
                                <ShoppingCart size={22} strokeWidth={1.5} className="mb-0.5 group-hover:scale-110 transition-transform" />
                                <span className="hidden md:inline text-[10px] font-medium">Cart</span>
                                {itemCount > 0 && (
                                    <span className="absolute top-0 right-0 md:top-0 md:right-2 w-4 h-4 bg-[#E11D2E] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#0f1115]">
                                        {itemCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* 5. Mega Menu Strip (Desktop Only) */}
                    <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100 py-2 border-t border-[#2a3140]/30 bg-[#0f1115]/80 backdrop-blur-md'}`}>
                        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-medium text-gray-400">
                            {CATEGORIES.map((cat) => (
                                <Link key={cat} href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-full transition-all whitespace-nowrap">
                                    {cat}
                                </Link>
                            ))}
                            <Link href="/deals" className="text-[#E11D2E] flex items-center gap-1 font-bold hover:bg-[#E11D2E]/10 px-3 py-1 rounded-full transition-colors">
                                Today's Deals
                            </Link>
                        </div>
                    </div>
                </header>
            </div>

            {/* Spacer for Sticky Header removed/adjusted as Hero sits behind */}

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 z-[60] md:hidden backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#161a22] z-[70] md:hidden shadow-2xl flex flex-col border-r border-[#2a3140]"
                        >
                            <div className="p-5 border-b border-[#2a3140] flex items-center justify-between">
                                <div className="font-display font-bold text-lg text-white">Menu</div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-gray-400">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0f1115] border border-[#2a3140] text-white placeholder-gray-500 focus:outline-none focus:border-[#E11D2E] text-sm"
                                    />
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                                <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2 px-2">Shop By Category</div>
                                {CATEGORIES.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="flex items-center justify-between p-3 rounded-xl text-gray-300 hover:bg-white/5 font-medium active:bg-white/10 transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {cat} <ChevronDown size={16} className="-rotate-90 text-gray-600" />
                                    </Link>
                                ))}
                            </div>

                            <div className="p-4 border-t border-[#2a3140] bg-[#0f1115] space-y-3">
                                <button className="w-full py-3 rounded-xl bg-[#E11D2E] text-white font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-all">
                                    Login / Sign Up
                                </button>
                                <div className="flex justify-center gap-6 pt-2 text-gray-500">
                                    <Link href="/contact" className="hover:text-white text-xs">Contact Us</Link>
                                    <Link href="/faq" className="hover:text-white text-xs">Help</Link>
                                    <Link href="/terms" className="hover:text-white text-xs">Terms</Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}


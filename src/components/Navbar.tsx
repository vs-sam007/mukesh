'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, MapPin, Menu, Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openDrawer, itemCount } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-red-50' : 'bg-transparent'
                    }`}
            >
                {/* Top Bar Removed */}

                <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-8">

                    {/* Logo - Red Brand */}
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#E11D2E] to-[#BE123C] text-white rounded-xl flex items-center justify-center font-display font-bold text-2xl shadow-lg shadow-red-500/30">
                            M
                        </div>
                        <span className={`font-display font-bold text-xl hidden sm:block tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900 bg-white/50 px-2 py-1 rounded-lg backdrop-blur-sm'}`}>
                            Mukesh <span className="text-[#E11D2E]">Store</span>
                        </span>
                    </Link>

                    {/* Location Selector */}
                    <div className={`hidden lg:flex flex-col leading-tight cursor-pointer p-2 rounded-lg transition-all group ${scrolled ? 'hover:bg-red-50' : 'bg-white/80 backdrop-blur-md border border-white/40 shadow-sm hover:bg-white'}`}>
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-wider group-hover:text-[#E11D2E] transition-colors">Delivering to</span>
                        <span className="text-sm font-bold text-gray-900 flex items-center gap-1">
                            Lucknow, 226001 <MapPin size={12} className="text-[#E11D2E]" />
                        </span>
                    </div>

                    {/* Search Bar - White with Red Glow Focus */}
                    <div className={`hidden md:flex flex-1 max-w-xl relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                        <div className="relative w-full group">
                            <input
                                type="text"
                                placeholder="Search 'milk', 'chips', 'bread'..."
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className={`w-full pl-12 pr-4 py-3 rounded-2xl border text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#E11D2E]/50 focus:ring-4 focus:ring-[#E11D2E]/10 transition-all text-sm shadow-sm ${scrolled ? 'bg-[#FFF7F7] border-red-100' : 'bg-white/90 border-white/50 backdrop-blur-md'}`}
                            />
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isSearchFocused ? 'text-[#E11D2E]' : 'text-gray-500'}`} size={20} />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4 md:gap-6 shrink-0">
                        <button className={`hidden md:flex transition-colors font-bold text-sm hover:underline decoration-[#E11D2E] underline-offset-4 ${scrolled ? 'text-gray-600 hover:text-[#E11D2E]' : 'text-gray-800 bg-white/50 px-3 py-1.5 rounded-lg backdrop-blur-sm hover:bg-white hover:text-[#E11D2E]'}`}>
                            Login
                        </button>

                        <button
                            className={`relative group p-2.5 rounded-xl transition-colors ${scrolled ? 'hover:bg-red-50' : 'bg-white/50 backdrop-blur-md hover:bg-white'}`}
                            onClick={openDrawer}
                        >
                            <ShoppingCart size={24} className="text-gray-900 group-hover:text-[#E11D2E] transition-colors" />
                            {itemCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    key={itemCount}
                                    className="absolute -top-1 -right-1 w-5 h-5 bg-[#E11D2E] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow-md z-10"
                                >
                                    {itemCount}
                                </motion.span>
                            )}
                        </button>

                        <button
                            className="md:hidden text-gray-900 hover:text-[#E11D2E] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Search Bar */}
                <div className="md:hidden px-4 pb-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search essentials..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFF7F7] border border-red-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#E11D2E]/50 text-sm shadow-sm"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[125px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-red-50 z-40 md:hidden overflow-hidden shadow-xl"
                    >
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                                <MapPin size={18} className="text-[#E11D2E]" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500">Delivering to</span>
                                    <span className="text-sm font-bold text-gray-900">Lucknow, 226001</span>
                                </div>
                            </div>
                            <Link href="/orders" className="p-3 hover:bg-gray-50 rounded-lg text-gray-900 font-medium transition-colors">My Orders</Link>
                            <Link href="/profile" className="p-3 hover:bg-gray-50 rounded-lg text-gray-900 font-medium transition-colors">Profile</Link>
                            <button className="p-3 bg-[#E11D2E] text-white font-bold rounded-lg mt-2 shadow-lg shadow-red-500/20 active:scale-95 transition-all">Login / Sign Up</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

'use client';

import React from 'react';
import { Home, Grid, Zap, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export default function BottomNav() {
    const pathname = usePathname();
    const { openDrawer, itemCount } = useCart();

    const navItems = [
        { name: 'Home', icon: Home, href: '/' },
        { name: 'Categories', icon: Grid, href: '#categories' }, // Anchor link for now or /categories
        { name: 'Offers', icon: Zap, href: '#offers' },
        { name: 'Cart', icon: ShoppingCart, action: openDrawer },
        { name: 'Profile', icon: User, href: '/profile' },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-red-50 z-50 pb-safe shadow-[0_-5px_20px_rgba(225,29,46,0.05)]">
            <div className="flex justify-between items-center px-6 py-3">
                {navItems.map((item, idx) => {
                    const isActive = item.href ? pathname === item.href : false;

                    return (
                        <div key={idx} className="relative">
                            <button
                                onClick={item.action ? item.action : () => { }}
                                className={`flex flex-col items-center gap-1 relative transition-colors ${isActive ? 'text-[#E11D2E]' : 'text-gray-400'}`}
                            >
                                {item.href ? (
                                    <Link href={item.href} className="flex flex-col items-center gap-1">
                                        <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'drop-shadow-sm' : ''} />
                                        <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.name}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <div className="relative">
                                            {item.name === 'Cart' ? (
                                                <div className={`p-3 -mt-6 rounded-full shadow-lg border-4 border-white transform transition-transform active:scale-95 ${isActive || itemCount > 0 ? 'bg-gradient-to-r from-[#E11D2E] to-[#BE123C] text-white shadow-red-500/40' : 'bg-gray-100 text-gray-500'}`}>
                                                    <item.icon size={24} strokeWidth={2.5} />
                                                </div>
                                            ) : (
                                                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                            )}

                                            {item.name === 'Cart' && itemCount > 0 && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    key={itemCount}
                                                    className="absolute top-0 right-0 w-4 h-4 bg-white text-[#E11D2E] text-[10px] font-bold rounded-full flex items-center justify-center border border-red-100 shadow-sm"
                                                >
                                                    {itemCount}
                                                </motion.span>
                                            )}
                                        </div>
                                        {item.name !== 'Cart' && <span className="text-[10px] font-medium">{item.name}</span>}
                                    </>
                                )}
                            </button>
                            {isActive && (
                                <motion.div
                                    layoutId="bottomNavIndicator"
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#E11D2E] rounded-b-lg shadow-[0_2px_10px_rgba(225,29,46,0.5)]"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Timer, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const flashDeals = [
    {
        id: "flash-1",
        name: "Farm Fresh Strawberries",
        price: 199,
        originalPrice: 299,
        image: "https://images.unsplash.com/photo-1518635017498-87f519b1a2df?auto=format&fit=crop&q=80&w=200",
        discount: "33% OFF",
        weight: "250g"
    },
    {
        id: "flash-2",
        name: "Premium Basmati Rice",
        price: 450,
        originalPrice: 650,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200",
        discount: "30% OFF",
        weight: "1kg"
    },
    {
        id: "flash-3",
        name: "Organic Honey",
        price: 320,
        originalPrice: 400,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=200",
        discount: "20% OFF",
        weight: "500g"
    }
];

export default function FlashDealPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentDealIndex, setCurrentDealIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
    const [isAdded, setIsAdded] = useState(false);

    const { addItem } = useCart();

    // Cycle deals and show popup
    useEffect(() => {
        const initialTimer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(initialTimer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setIsAdded(false);
        setTimeout(() => {
            setCurrentDealIndex((prev) => (prev + 1) % flashDeals.length);
            setIsVisible(true);
            setTimeLeft(120);
        }, 5000);
    };

    const handleAddToCart = () => {
        const deal = flashDeals[currentDealIndex];
        addItem({
            id: deal.id,
            name: deal.name,
            price: deal.price,
            image: deal.image,
            quantity: 1,
            weight: deal.weight
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    useEffect(() => {
        if (!isVisible) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [isVisible]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const deal = flashDeals[currentDealIndex];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 w-[300px] bg-neutral-900 rounded-2xl shadow-2xl border border-red-500/20 overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#E11D2E] to-[#BE123C] p-3 flex justify-between items-center text-white shadow-md">
                        <div className="flex items-center gap-2">
                            <Zap size={16} className="fill-yellow-400 text-yellow-400 animate-pulse" />
                            <span className="font-bold text-sm uppercase tracking-wider">Flash Deal</span>
                        </div>
                        <button onClick={handleClose} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                            <X size={16} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex gap-4">
                        <div className="w-20 h-20 bg-white/5 rounded-lg overflow-hidden shrink-0 border border-white/10">
                            <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center flex-1 min-w-0">
                            <h4 className="font-bold text-white text-sm line-clamp-2 leading-tight mb-1">{deal.name}</h4>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-gray-400 text-xs line-through">₹{deal.originalPrice}</span>
                                <span className="text-[#E11D2E] font-bold text-lg leading-none">₹{deal.price}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#E11D2E] bg-red-500/10 border border-red-500/20 px-2 py-1 rounded-md w-fit">
                                <Timer size={12} />
                                <span>Ends in {formatTime(timeLeft)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`w-full py-3 font-bold text-sm flex items-center justify-center gap-2 transition-all ${isAdded ? 'bg-green-600 text-white' : 'bg-white text-neutral-900 hover:bg-gray-200'}`}
                    >
                        {isAdded ? (
                            <>Added to Cart <Check size={16} /></>
                        ) : (
                            <>Grab Deal <ShoppingBag size={16} /></>
                        )}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

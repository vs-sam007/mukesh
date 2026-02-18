'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Zap, Timer } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Mock Flash Deal Data
const FLASH_DEALS = [
    {
        id: 'flash-1',
        name: 'Coca Cola Soft Drink',
        price: 35,
        originalPrice: 40,
        image: '/images/Gemini_Generated_Image_socfc6socfc6socf.png',
        weight: '750 ml',
        quantity: 1
    },
    {
        id: 'flash-2',
        name: 'Tata Salt Vacuum Evaporated',
        price: 25,
        originalPrice: 28,
        image: '/images/Gemini_Generated_Image_oi3d2doi3d2doi3d.png',
        weight: '1 kg',
        quantity: 1
    },
    {
        id: 'flash-3',
        name: 'Maggi 2-Minute Noodles',
        price: 12,
        originalPrice: 14,
        image: '/images/Gemini_Generated_Image_s8ptxas8ptxas8pt.png',
        weight: '70 g',
        quantity: 1
    }
];

export default function FlashDealPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentDeal, setCurrentDeal] = useState(FLASH_DEALS[0]);
    const { addItem } = useCart();

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const showPopup = () => {
            // Pick a random deal
            const randomDeal = FLASH_DEALS[Math.floor(Math.random() * FLASH_DEALS.length)];
            setCurrentDeal(randomDeal);
            setIsVisible(true);
        };

        // Initial delay or subsequent delays
        if (!isVisible) {
            timer = setTimeout(showPopup, 5000); // 5 seconds interval
        }

        return () => clearTimeout(timer);
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleAddToCart = () => {
        addItem({
            id: currentDeal.id,
            name: currentDeal.name,
            price: currentDeal.price,
            image: currentDeal.image,
            quantity: 1,
            weight: currentDeal.weight
        });
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-24 right-4 md:right-8 z-50 w-80 md:w-96"
                >
                    <div className="bg-[#1c212b] border border-[#E11D2E]/30 rounded-2xl shadow-2xl overflow-hidden relative">
                        {/* Header with Timer Effect */}
                        <div className="bg-gradient-to-r from-[#E11D2E] to-[#BE123C] p-3 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2 font-bold animate-pulse">
                                <Zap size={18} className="fill-yellow-300 text-yellow-300" />
                                FLASH DEAL
                            </div>
                            <button
                                onClick={handleClose}
                                className="hover:bg-black/20 rounded-full p-1 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex gap-4">
                            <div className="w-24 h-24 bg-white rounded-xl p-2 shrink-0 relative">
                                <img
                                    src={currentDeal.image}
                                    alt={currentDeal.name}
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute -top-2 -left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                                    {Math.round(((currentDeal.originalPrice - currentDeal.price) / currentDeal.originalPrice) * 100)}% OFF
                                </div>
                            </div>

                            <div className="flex-1">
                                <h4 className="font-bold text-white text-sm line-clamp-2 mb-1">{currentDeal.name}</h4>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[#E11D2E] font-bold text-lg">₹{currentDeal.price}</span>
                                    <span className="text-gray-500 text-sm line-through">₹{currentDeal.originalPrice}</span>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full py-2 bg-white text-black font-bold text-sm rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <ShoppingCart size={16} /> Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Progress Bar Timer Animation (Visual only) */}
                        <div className="h-1 bg-[#2a3140] w-full">
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 10, ease: "linear" }} // Auto-close visual cue (optional, logical auto-close not requested but matches 'Flash' vibe. I won't auto-close logical though to not annoy user too much if they are reading)
                                className="h-full bg-[#E11D2E]"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

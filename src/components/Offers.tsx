'use client';

import React from 'react';
import { motion } from 'framer-motion';

const offers = [
    "🔥 FLAT 10% OFF on Orders above ₹2000",
    "🥬 Fresh Vegetables Arrive Daily at 7 AM",
    "💳 We Accept All UPI & Cards",
    "🚚 Free Home Delivery within 2km",
    "🌾 New: Organic Wheat Flour in Stock",
    "🧼 Buy 1 Get 1 Free on Select Detergents"
];

export default function Offers() {
    return (
        <div className="bg-green-600 text-white py-3 overflow-hidden whitespace-nowrap relative z-20">
            <div className="flex gap-8">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-8 min-w-full"
                >
                    {[...offers, ...offers].map((offer, idx) => (
                        <span key={idx} className="text-sm font-semibold tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70" /> {offer}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-8 min-w-full absolute top-3 left-full pl-8"
                >
                    {[...offers, ...offers].map((offer, idx) => (
                        <span key={idx} className="text-sm font-semibold tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70" /> {offer}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

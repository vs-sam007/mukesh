'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function OffersMarquee() {
    const offers = [
        "💥 FLAT 50% OFF on your first order! Code: WELCOME50",
        "⚡ Free Delivery on orders above ₹199",
        "🕒 Delivery in 10-30 minutes guaranteed",
        "💳 10% Cashback on UPI payments",
        "🥦 Fresh vegetables directly from farmers",
    ];

    // Duplicate offers to create seamless loop
    const marqueeContent = [...offers, ...offers, ...offers];

    return (
        <div className="w-full bg-green text-dark overflow-hidden py-3 relative z-20 border-y border-green-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-green via-transparent to-green z-10 pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {marqueeContent.map((offer, index) => (
                    <div key={index} className="flex items-center gap-2 mx-6">
                        <Zap size={16} className="fill-current" />
                        <span className="font-bold text-sm uppercase tracking-wide">{offer}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

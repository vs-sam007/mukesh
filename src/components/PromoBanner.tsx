'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Gift, ShoppingBag } from 'lucide-react';

export default function PromoBanner() {
    return (
        <section className="py-8 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Banner 1 */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 flex items-center justify-between text-white shadow-lg overflow-hidden relative"
                >
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                        <Truck size={150} />
                    </div>
                    <div className="relative z-10">
                        <div className="bg-white/20 w-fit px-2 py-1 rounded text-[10px] font-bold uppercase mb-2">Free Delivery</div>
                        <h3 className="text-xl font-bold leading-tight mb-1">On orders above ₹499</h3>
                        <p className="text-gray-300 text-sm">Super fast delivery guaranteed.</p>
                    </div>
                </motion.div>

                {/* Banner 2 */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-r from-[#E11D2E] to-[#BE123C] rounded-2xl p-6 flex items-center justify-between text-white shadow-lg shadow-red-500/20 overflow-hidden relative"
                >
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                        <Gift size={150} />
                    </div>
                    <div className="relative z-10">
                        <div className="bg-white/20 w-fit px-2 py-1 rounded text-[10px] font-bold uppercase mb-2">Festival Sale</div>
                        <h3 className="text-xl font-bold leading-tight mb-1">Up to 50% OFF</h3>
                        <p className="text-red-100 text-sm">On all household cleaning items.</p>
                    </div>
                </motion.div>

                {/* Banner 3 */}
                <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 flex items-center justify-between text-white shadow-lg overflow-hidden relative"
                >
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                        <ShoppingBag size={150} />
                    </div>
                    <div className="relative z-10">
                        <div className="bg-white/20 w-fit px-2 py-1 rounded text-[10px] font-bold uppercase mb-2">Bulk Savings</div>
                        <h3 className="text-xl font-bold leading-tight mb-1">Buy More, Save More</h3>
                        <p className="text-blue-100 text-sm">Extra 5% off on orders above ₹2000</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

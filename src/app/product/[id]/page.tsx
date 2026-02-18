'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Minus, Plus, ShoppingCart, Truck, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);

    return (
        <main className="bg-dark min-h-screen">
            <Navbar />

            <div className="pt-28 pb-12 max-w-7xl mx-auto px-4">

                {/* Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Left: Image */}
                    <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex items-center justify-center h-[500px] relative">
                        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                            20% OFF
                        </div>
                        <img
                            src="/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png"
                            alt="Amul Milk"
                            className="h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                        />
                    </div>

                    {/* Right: Details */}
                    <div>
                        <div className="text-sm text-green-400 font-bold tracking-wider mb-2 uppercase">Dairy & Breakfast</div>
                        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">Amul Taaza Homogenised Toned Milk</h1>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-yellow-500">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" className="text-gray-600" />
                            </div>
                            <span className="text-gray-400 text-sm">(124 reviews)</span>
                        </div>

                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-3xl font-bold text-white">₹72</span>
                            <span className="text-lg text-gray-500 line-through mb-1">₹76</span>
                            <span className="text-green-500 font-bold text-sm mb-1">You save ₹4</span>
                        </div>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Amul Taaza is homogenised toned milk. It is fresh, nutritious, and tasty. It is ideal for making tea, coffee, dahi, and sweets. No preservatives added.
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center bg-dark-card border border-white/10 rounded-xl">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 text-gray-300 hover:text-white"
                                >
                                    <Minus size={20} />
                                </button>
                                <span className="w-12 text-center text-white font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 text-gray-300 hover:text-white"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>

                            <button className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-dark font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                <Clock className="text-green-400" size={24} />
                                <div>
                                    <h4 className="font-bold text-white text-sm">Fast Delivery</h4>
                                    <p className="text-xs text-gray-500">In 15 mins</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                <ShieldCheck className="text-green-400" size={24} />
                                <div>
                                    <h4 className="font-bold text-white text-sm">Quality</h4>
                                    <p className="text-xs text-gray-500">100% Original</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Additional Info Tabs */}
                <div className="border-t border-white/10 pt-12">
                    <h3 className="text-xl font-bold text-white mb-6">Product Details</h3>
                    <div className="bg-dark-card rounded-2xl p-6 border border-white/5 text-gray-400 space-y-4">
                        <p><strong>Brand:</strong> Amul</p>
                        <p><strong>Form:</strong> Liquid</p>
                        <p><strong>Package Information:</strong> Carton</p>
                        <p><strong>Weight:</strong> 1 L</p>
                        <p><strong>Ingredients:</strong> Toned Milk, Vitamin A & D</p>
                        <p><strong>Shelf Life:</strong> 90 Days</p>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}

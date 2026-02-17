'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
    const { isDrawerOpen, closeDrawer, items, updateQuantity, removeItem, cartTotal, itemCount } = useCart();

    const deliveryFee = 15;
    const handlingFee = 5;
    const grandTotal = cartTotal + deliveryFee + handlingFee;

    return (
        <AnimatePresence>
            {isDrawerOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDrawer}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white border-l border-red-50 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white/90 backdrop-blur-md">
                            <div>
                                <h2 className="text-xl font-display font-bold text-gray-900">My Cart</h2>
                                <p className="text-sm text-gray-500">{itemCount} items</p>
                            </div>
                            <button onClick={closeDrawer} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="text-gray-900" size={24} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" className="w-24 h-24 opacity-20" />
                                    <p className="text-lg font-medium text-gray-900">Your cart is empty</p>
                                    <button onClick={closeDrawer} className="text-[#E11D2E] font-bold">Start Shopping</button>
                                </div>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="flex gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium text-gray-900 line-clamp-2 text-sm">{item.name}</h3>
                                                <p className="text-xs text-gray-500 mt-1">{item.weight}</p>
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
                                                </div>
                                                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg h-8">
                                                    <button
                                                        onClick={() => item.quantity > 1 ? updateQuantity(item.id, -1) : removeItem(item.id)}
                                                        className="px-2 h-full hover:bg-gray-200 text-[#E11D2E] transition-colors"
                                                    >
                                                        {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                                                    </button>
                                                    <span className="font-bold text-sm px-2 text-gray-900">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="px-2 h-full hover:bg-gray-200 text-[#E11D2E] transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Bill Details & Checkout */}
                        {items.length > 0 && (
                            <div className="p-5 bg-white border-t border-gray-100 space-y-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Item Total</span>
                                        <span className="text-gray-900">₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Delivery Fee</span>
                                        <span className="text-green-600 font-bold">FREE</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Handling Fee</span>
                                        <span className="text-gray-900">₹{handlingFee}</span>
                                    </div>
                                    <div className="h-px bg-gray-100 my-2" />
                                    <div className="flex justify-between text-base font-bold text-gray-900">
                                        <span>Grand Total</span>
                                        <span>₹{cartTotal + handlingFee}</span>
                                    </div>
                                </div>

                                <Link href="/checkout" onClick={closeDrawer} className="w-full py-4 bg-gradient-to-r from-[#E11D2E] to-[#BE123C] hover:shadow-lg hover:shadow-red-500/30 text-white font-bold text-lg rounded-xl flex items-center justify-between px-6 transition-all hover:scale-[1.02]">
                                    <span>Proceed to Pay</span>
                                    <span className="flex items-center gap-2">₹{cartTotal + handlingFee} <ArrowRight size={20} /></span>
                                </Link>

                                <p className="text-[10px] text-center text-text-secondary">
                                    Safe and secure payments. 100% authentic products.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

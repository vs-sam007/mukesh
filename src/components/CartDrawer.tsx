'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
    const { isDrawerOpen, closeDrawer, items, updateQuantity, removeItem, cartTotal, itemCount } = useCart();

    const deliveryFee = cartTotal > 499 ? 0 : 29;
    const grandTotal = cartTotal + deliveryFee;

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
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white border-l border-gray-100 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                            <div>
                                <h2 className="text-xl font-display font-bold text-gray-900">Your Cart</h2>
                                <p className="text-sm text-gray-500">{itemCount} items</p>
                            </div>
                            <button onClick={closeDrawer} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="text-gray-900" size={24} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                                    <ShoppingBag size={64} className="text-gray-200" />
                                    <p className="text-lg font-medium text-gray-400">Your cart is empty</p>
                                    <button onClick={closeDrawer} className="text-[#E11D2E] font-bold hover:underline">Start Shopping</button>
                                </div>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-100">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="font-bold text-gray-900 line-clamp-2 text-sm leading-tight">{item.name}</h3>
                                                <p className="text-xs text-gray-500 mt-1">{item.weight}</p>
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>

                                                <div className="flex items-center bg-white border border-gray-200 rounded-lg h-8 shadow-sm">
                                                    <button
                                                        onClick={() => item.quantity > 1 ? updateQuantity(item.id, -1) : removeItem(item.id)}
                                                        className="px-2.5 h-full hover:bg-gray-50 text-gray-600 transition-colors"
                                                    >
                                                        {item.quantity === 1 ? <Trash2 size={13} className="text-[#E11D2E]" /> : <Minus size={13} />}
                                                    </button>
                                                    <span className="font-bold text-sm px-2 text-gray-900 w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="px-2.5 h-full hover:bg-gray-50 text-gray-600 transition-colors"
                                                    >
                                                        <Plus size={13} />
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
                            <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                                <div className="space-y-2 text-sm mb-4">
                                    <div className="flex justify-between text-gray-500">
                                        <span>Item Total</span>
                                        <span className="text-gray-900 font-medium">₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span>Delivery Fee</span>
                                        <span className={deliveryFee === 0 ? "text-green-600 font-bold" : "text-gray-900 font-medium"}>
                                            {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                                        </span>
                                    </div>
                                    <div className="h-px bg-gray-200 my-2" />
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>To Pay</span>
                                        <span>₹{grandTotal}</span>
                                    </div>
                                    {deliveryFee > 0 && (
                                        <p className="text-xs text-gray-400 mt-1">Free delivery on orders above ₹499</p>
                                    )}
                                </div>

                                <Link href="/checkout" onClick={closeDrawer} className="w-full py-3.5 bg-[#111827] hover:bg-black text-white font-bold text-base rounded-xl flex items-center justify-between px-6 transition-all shadow-lg shadow-gray-200">
                                    <span>Checkout</span>
                                    <span className="flex items-center gap-2">₹{grandTotal} <ArrowRight size={18} /></span>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}


'use client';

import React from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export interface ProductProps {
    id: string;
    name: string;
    image: string;
    price: number;
    mrp?: number;
    weight: string;
    discount?: number;
    rating?: number;
    isNew?: boolean;
}

export default function ProductCard({ product }: { product: ProductProps }) {
    const { items, addItem, updateQuantity, removeItem } = useCart();

    // Find if item is in cart
    const cartItem = items.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            weight: product.weight
        });
    };

    const handleIncrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        updateQuantity(product.id, 1);
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (quantity > 1) {
            updateQuantity(product.id, -1);
        } else {
            removeItem(product.id);
        }
    };

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group relative bg-[#FFF7F7] border border-red-100 rounded-2xl p-3 flex flex-col gap-3 shadow-sm hover:shadow-[0_10px_30px_rgba(225,29,46,0.15)] hover:border-[#E11D2E]/20 transition-all duration-300 w-full min-w-[160px] md:min-w-[200px]"
        >
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {product.discount && (
                    <span className="bg-[#E11D2E] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-md shadow-red-500/20">
                        {product.discount}% OFF
                    </span>
                )}
                {product.isNew && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                        New
                    </span>
                )}
            </div>

            {/* Image Area */}
            <div className="relative h-32 md:h-40 bg-white rounded-xl flex items-center justify-center p-4 overflow-hidden group-hover:bg-white transition-colors border border-gray-50">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-md mix-blend-multiply"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-1">
                <div className="flex justify-between items-start">
                    <span className="text-gray-500 text-xs bg-white px-2 py-0.5 rounded-md border border-gray-100">{product.weight}</span>
                    <div className="flex items-center gap-1 bg-red-50 px-1.5 py-0.5 rounded-md">
                        <span className="text-[#E11D2E] text-xs font-bold">{product.rating || 4.5}</span>
                        <Star size={10} className="fill-current text-[#E11D2E]" />
                    </div>
                </div>

                <h3 className="text-gray-900 font-bold text-sm md:text-base leading-tight mt-1 line-clamp-2 min-h-[2.5em] group-hover:text-[#E11D2E] transition-colors">
                    {product.name}
                </h3>

                <div className="flex items-end gap-2 mt-auto">
                    <div className="flex flex-col">
                        <span className="text-gray-400 text-xs line-through">₹{product.mrp}</span>
                        <span className="text-gray-900 font-bold text-lg">₹{product.price}</span>
                    </div>

                    {/* Add Button / Quantity Stepper */}
                    <div className="ml-auto">
                        {quantity === 0 ? (
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={handleAdd}
                                className="bg-white text-[#E11D2E] border border-[#E11D2E] hover:bg-[#E11D2E] hover:text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 transition-all shadow-sm hover:shadow-red-500/20"
                            >
                                ADD <Plus size={14} />
                            </motion.button>
                        ) : (
                            <div className="flex items-center bg-[#E11D2E] text-white rounded-lg overflow-hidden h-8 shadow-md shadow-red-500/30">
                                <button onClick={handleDecrement} className="px-2 h-full hover:bg-black/10 transition-colors">
                                    <Minus size={14} strokeWidth={3} />
                                </button>
                                <span className="font-bold text-sm px-1 min-w-[20px] text-center">{quantity}</span>
                                <button onClick={handleIncrement} className="px-2 h-full hover:bg-black/10 transition-colors">
                                    <Plus size={14} strokeWidth={3} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

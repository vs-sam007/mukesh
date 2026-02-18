'use client';

import React from 'react';
import { Plus, Minus, Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { ProductProps } from '@/types/product';

export default function ProductCard({ product }: { product: ProductProps }) {
    const { items, addItem, updateQuantity, removeItem } = useCart();

    // Helper to parse price string (e.g., "₹180" -> 180)
    const parsePrice = (priceStr: string): number => {
        return Number(priceStr.replace(/[^0-9.]/g, '')) || 0;
    };

    const numericPrice = parsePrice(product.price);

    // Find if item is in cart
    const cartItem = items.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({
            id: product.id,
            name: product.title,
            price: numericPrice,
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
            whileHover={{ y: -6 }}
            className="group relative w-full bg-[#1c212b] rounded-2xl border border-[#2a3140] p-4 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
            {/* Wishlist Icon */}
            <button className="absolute top-3 right-3 p-1.5 rounded-full bg-[#2a3140] text-gray-400 hover:text-[#E11D2E] hover:bg-[#E11D2E]/10 transition-colors z-10 opacity-0 group-hover:opacity-100">
                <Heart size={16} />
            </button>

            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {product.discount && (
                    <span className="bg-[#E11D2E] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                        {product.discount}
                    </span>
                )}
            </div>

            {/* Image Area */}
            <div className="relative w-full h-40 mb-4 flex items-center justify-center p-2">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain drop-shadow-sm"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 mb-1">
                    <div className="bg-green-900/30 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        4.8 <Star size={8} fill="currentColor" />
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">1.2k reviews</span>
                </div>

                <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 h-[2.5em] group-hover:text-[#E11D2E] transition-colors" title={product.title}>
                    {product.title}
                </h3>

                <p className="text-gray-400 text-xs font-medium">{product.weight}</p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#2a3140]">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs line-through">{product.originalPrice}</span>
                        <span className="text-white font-bold text-lg">{product.price}</span>
                    </div>

                    {quantity === 0 ? (
                        <button
                            onClick={handleAdd}
                            className="bg-transparent border border-[#E11D2E] text-[#E11D2E] hover:bg-[#E11D2E] hover:text-white px-5 py-1.5 rounded-lg text-sm font-bold transition-all shadow-sm active:scale-95"
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex items-center bg-[#E11D2E] text-white rounded-lg h-9 shadow-md">
                            <button onClick={handleDecrement} className="px-3 h-full hover:bg-black/10 transition-colors">
                                <Minus size={14} />
                            </button>
                            <span className="font-bold text-sm px-1 min-w-[20px] text-center">{quantity}</span>
                            <button onClick={handleIncrement} className="px-3 h-full hover:bg-black/10 transition-colors">
                                <Plus size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

'use client';

import { Plus, Minus, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { ProductProps } from '@/types/product';

interface Props {
    product: ProductProps;
}

export default function ProductCard({ product }: Props) {
    const { items, addItem, updateQuantity, removeItem } = useCart();

    // Convert "₹180" -> 180
    const parsePrice = (priceStr: string) =>
        Number(priceStr.replace(/[^0-9.]/g, '')) || 0;

    const numericPrice = parsePrice(product.price);

    const cartItem = items.find((item) => item.id === product.id);
    const quantity = cartItem?.quantity ?? 0;

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({
            id: product.id,
            name: product.title, // cart expects name
            price: numericPrice,
            image: product.image,
            quantity: 1,
            weight: product.weight,
        });
    };

    const handleIncrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        updateQuantity(product.id, 1);
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.stopPropagation();
        quantity > 1
            ? updateQuantity(product.id, -1)
            : removeItem(product.id);
    };

    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="group relative w-full bg-[#1c212b] rounded-2xl border border-[#2a3140] p-4 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
            {/* Wishlist */}
            <button className="absolute top-3 right-3 p-1.5 rounded-full bg-[#2a3140] text-gray-400 hover:text-[#E11D2E] hover:bg-[#E11D2E]/10 transition opacity-0 group-hover:opacity-100">
                <Heart size={16} />
            </button>

            {/* Discount Badge */}
            {product.discount && (
                <span className="absolute top-3 left-3 bg-[#E11D2E] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {product.discount}
                </span>
            )}

            {/* Image */}
            <div className="w-full h-40 mb-4 flex items-center justify-center p-2">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Info */}
            <div>
                <div className="flex items-center gap-1 mb-1">
                    <span className="bg-green-900/30 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        4.8 <Star size={8} fill="currentColor" />
                    </span>
                    <span className="text-[10px] text-gray-400">1.2k reviews</span>
                </div>

                <h3 className="text-white font-bold text-sm line-clamp-2 group-hover:text-[#E11D2E] transition">
                    {product.title}
                </h3>

                <p className="text-gray-400 text-xs">{product.weight}</p>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#2a3140]">
                    <div>
                        <p className="text-gray-500 text-xs line-through">
                            {product.originalPrice}
                        </p>
                        <p className="text-white font-bold text-lg">{product.price}</p>
                    </div>

                    {quantity === 0 ? (
                        <button
                            onClick={handleAdd}
                            className="border border-[#E11D2E] text-[#E11D2E] hover:bg-[#E11D2E] hover:text-white px-5 py-1.5 rounded-lg text-sm font-bold transition active:scale-95"
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex items-center bg-[#E11D2E] text-white rounded-lg h-9">
                            <button onClick={handleDecrement} className="px-3">
                                <Minus size={14} />
                            </button>
                            <span className="px-2 font-bold">{quantity}</span>
                            <button onClick={handleIncrement} className="px-3">
                                <Plus size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

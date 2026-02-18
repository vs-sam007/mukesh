'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ProductProps } from '@/types/product';

const products: ProductProps[] = [
    { id: 'cat-1', title: 'Himalaya Baby Powder', price: '₹180', originalPrice: '₹200', weight: '400g', image: '/images/Gemini_Generated_Image_n9c5ffn9c5ffn9c5.png', discount: '10% OFF', time: '20 MINS', isNew: false, rating: 4.5 },
    { id: 'cat-2', title: 'Dettol Original Liquid Handwash', price: '₹199', originalPrice: '₹220', weight: '900ml', image: '/images/Gemini_Generated_Image_6eg7hl6eg7hl6eg7.png', discount: '9% OFF', time: '25 MINS', isNew: false, rating: 4.8 },
    { id: 'cat-3', title: 'Kissan Mixed Fruit Jam', price: '₹220', originalPrice: '₹240', weight: '700g', image: '/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png', time: '15 MINS', isNew: false, rating: 4.2 },
    { id: 'cat-4', title: 'Brooke Bond Red Label Tea', price: '₹260', originalPrice: '₹300', weight: '500g', image: '/images/Gemini_Generated_Image_fvw538fvw538fvw5.png', discount: '13% OFF', time: '10 MINS', isNew: false, rating: 4.6 },
    { id: 'cat-5', title: 'Tata Salt Vacuum Evaporated', price: '₹24', originalPrice: '₹28', weight: '1kg', image: '/images/Gemini_Generated_Image_oi3d2doi3d2doi3d.png', time: '30 MINS', isNew: false, rating: 4.7 },
    { id: 'cat-6', title: 'Britannia Good Day Cashew Cookies', price: '₹35', originalPrice: '₹40', weight: '200g', image: '/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png', time: '20 MINS', isNew: false, rating: 4.5 },
    { id: 'cat-7', title: 'Surf Excel Excel Matic Top Load', price: '₹450', originalPrice: '₹500', weight: '2kg', image: '/images/Gemini_Generated_Image_ai7v44ai7v44ai7v.png', discount: '10% OFF', time: '40 MINS', isNew: true, rating: 4.8 },
    { id: 'cat-8', title: 'Haldirams Bhujia Sev', price: '₹110', originalPrice: '₹120', weight: '400g', image: '/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png', time: '15 MINS', isNew: false, rating: 4.4 },
    { id: 'cat-9', title: 'Amul Taaza Homogenised Toned Milk', price: '₹72', originalPrice: '₹76', weight: '1 L', image: '/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png', discount: '5% OFF', time: '10 MINS', isNew: false, rating: 4.9 },
    { id: 'cat-10', title: 'Fortune Sunlite Refined Sunflower Oil', price: '₹145', originalPrice: '₹160', weight: '1 L', image: '/images/Gemini_Generated_Image_yzlnbayzlnbayzln.png', discount: '9% OFF', time: '35 MINS', isNew: false, rating: 4.6 },
    { id: 'cat-11', title: 'Aashirvaad Shudh Chakki Atta', price: '₹255', originalPrice: '₹280', weight: '5 kg', image: '/images/Gemini_Generated_Image_dq0kgcdq0kgcdq0k.png', discount: '8% OFF', time: '45 MINS', isNew: false, rating: 4.8 },
    { id: 'cat-12', title: 'Maggi 2-Minute Noodles Masala', price: '₹140', originalPrice: '₹160', weight: '840g', image: '/images/Gemini_Generated_Image_s8ptxas8ptxas8pt.png', discount: '12% OFF', time: '15 MINS', isNew: false, rating: 4.7 },
];

export default function CategoryPage() {
    return (
        <main className="bg-[#0f1115] min-h-screen text-white border-t border-[#2a3140]">
            <Navbar />

            <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 box-border">

                {/* Breadcrumbs / Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <div className="text-xs text-[#b8c0cc] mb-1">Home / Snacks / Chips</div>
                        <h1 className="text-3xl font-bold text-white">Example Category</h1>
                        <p className="text-sm text-[#b8c0cc] mt-1">Found 48 products</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-medium text-[#b8c0cc] hover:text-[#E11D2E] bg-[#161a22] px-4 py-2 rounded-lg border border-[#2a3140] shadow-sm hover:border-[#E11D2E]/30 transition-colors">
                            Sort by: Popularity <ChevronDown size={14} />
                        </button>
                        <button className="lg:hidden p-2 bg-[#161a22] rounded-lg border border-[#2a3140] text-gray-400">
                            <SlidersHorizontal size={20} />
                        </button>
                    </div>
                </div>

                <div className="flex gap-8 relative">
                    {/* Sidebar */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <FilterSidebar />
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                                Load More Products
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}

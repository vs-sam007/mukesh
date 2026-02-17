'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const products = [
    { name: 'Himalaya Baby Powder', price: '₹180', originalPrice: '₹200', weight: '400g', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4', badge: 'Top Pick' },
    { name: 'Dettol Original Liquid Handwash', price: '₹199', originalPrice: '₹220', weight: '900ml', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f', badge: 'Best Seller' },
    { name: 'Kissan Mixed Fruit Jam', price: '₹220', originalPrice: '₹240', weight: '700g', img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b', badge: '' },
    { name: 'Brooke Bond Red Label Tea', price: '₹260', originalPrice: '₹300', weight: '500g', img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12', badge: 'Popular' },
    { name: 'Tata Salt Vacuum Evaporated', price: '₹24', originalPrice: '₹28', weight: '1kg', img: 'https://www.bigbasket.com/media/uploads/p/l/241600_5-tata-salt-iodized.jpg', badge: '' },
    { name: 'Britannia Good Day Cashew Cookies', price: '₹35', originalPrice: '₹40', weight: '200g', img: 'https://www.bigbasket.com/media/uploads/p/l/264491_12-britannia-good-day-cookies-cashew.jpg', badge: '' },
    { name: 'Surf Excel Excel Matic Top Load', price: '₹450', originalPrice: '₹500', weight: '2kg', img: 'https://www.bigbasket.com/media/uploads/p/l/266976_8-surf-excel-detergent-powder-matic-top-load.jpg', badge: 'Deal' },
    { name: 'Haldirams Bhujia Sev', price: '₹110', originalPrice: '₹120', weight: '400g', img: 'https://www.bigbasket.com/media/uploads/p/l/10000574_17-haldirams-namkeen-bhujia-sev.jpg', badge: '' },
    { name: 'Amul Taaza Homogenised Toned Milk', price: '₹72', originalPrice: '₹76', weight: '1 L', img: 'https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg', badge: '5% OFF' },
    { name: 'Fortune Sunlite Refined Sunflower Oil', price: '₹145', originalPrice: '₹160', weight: '1 L', img: 'https://www.bigbasket.com/media/uploads/p/l/274145-3_3-fortune-sunlite-refined-sunflower-oil.jpg', badge: '9% OFF' },
    { name: 'Aashirvaad Shudh Chakki Atta', price: '₹255', originalPrice: '₹280', weight: '5 kg', img: 'https://www.bigbasket.com/media/uploads/p/l/126903-2_3-aashirvaad-shudh-chakki-atta.jpg', badge: '8% OFF' },
    { name: 'Maggi 2-Minute Noodles Masala', price: '₹140', originalPrice: '₹160', weight: '840g', img: 'https://www.bigbasket.com/media/uploads/p/l/266109_18-maggi-2-minute-instant-noodles-masala.jpg', badge: '' },
];

export default function CategoryPage() {
    return (
        <main className="bg-dark min-h-screen">
            <Navbar />

            <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 box-border">

                {/* Breadcrumbs / Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Home / Snacks / Chips</div>
                        <h1 className="text-3xl font-bold text-white">Example Category</h1>
                        <p className="text-sm text-gray-400 mt-1">Found 48 products</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                            Sort by: Popularity <ChevronDown size={14} />
                        </button>
                        <button className="lg:hidden p-2 bg-white/5 rounded-lg border border-white/10 text-white">
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
                            {products.map((product, idx) => (
                                <ProductCard
                                    key={idx}
                                    title={product.name}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    weight={product.weight}
                                    image={product.img}
                                    discount={product.badge && product.badge.includes('OFF') ? product.badge : undefined}
                                    time="20 MINS"
                                />
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

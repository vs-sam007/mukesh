'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ProductProps } from '@/types/product';

const products: ProductProps[] = [
    { id: 'cat-1', title: 'Himalaya Baby Powder', price: '₹180', originalPrice: '₹200', weight: '400g', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4', discount: '10% OFF', time: '20 MINS', isNew: false, rating: 4.5 },
    { id: 'cat-2', title: 'Dettol Original Liquid Handwash', price: '₹199', originalPrice: '₹220', weight: '900ml', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f', discount: '9% OFF', time: '25 MINS', isNew: false, rating: 4.8 },
    { id: 'cat-3', title: 'Kissan Mixed Fruit Jam', price: '₹220', originalPrice: '₹240', weight: '700g', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b', time: '15 MINS', isNew: false, rating: 4.2 },
    { id: 'cat-4', title: 'Brooke Bond Red Label Tea', price: '₹260', originalPrice: '₹300', weight: '500g', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12', discount: '13% OFF', time: '10 MINS', isNew: false, rating: 4.6 },
    { id: 'cat-5', title: 'Tata Salt Vacuum Evaporated', price: '₹24', originalPrice: '₹28', weight: '1kg', image: 'https://www.bigbasket.com/media/uploads/p/l/241600_5-tata-salt-iodized.jpg', time: '30 MINS', isNew: false, rating: 4.7 },
    { id: 'cat-6', title: 'Britannia Good Day Cashew Cookies', price: '₹35', originalPrice: '₹40', weight: '200g', image: 'https://www.bigbasket.com/media/uploads/p/l/264491_12-britannia-good-day-cookies-cashew.jpg', time: '20 MINS', isNew: false, rating: 4.5 },
    { id: 'cat-7', title: 'Surf Excel Excel Matic Top Load', price: '₹450', originalPrice: '₹500', weight: '2kg', image: 'https://www.bigbasket.com/media/uploads/p/l/266976_8-surf-excel-detergent-powder-matic-top-load.jpg', discount: '10% OFF', time: '40 MINS', isNew: true, rating: 4.8 },
    { id: 'cat-8', title: 'Haldirams Bhujia Sev', price: '₹110', originalPrice: '₹120', weight: '400g', image: 'https://www.bigbasket.com/media/uploads/p/l/10000574_17-haldirams-namkeen-bhujia-sev.jpg', time: '15 MINS', isNew: false, rating: 4.4 },
    { id: 'cat-9', title: 'Amul Taaza Homogenised Toned Milk', price: '₹72', originalPrice: '₹76', weight: '1 L', image: 'https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg', discount: '5% OFF', time: '10 MINS', isNew: false, rating: 4.9 },
    { id: 'cat-10', title: 'Fortune Sunlite Refined Sunflower Oil', price: '₹145', originalPrice: '₹160', weight: '1 L', image: 'https://www.bigbasket.com/media/uploads/p/l/274145-3_3-fortune-sunlite-refined-sunflower-oil.jpg', discount: '9% OFF', time: '35 MINS', isNew: false, rating: 4.6 },
    { id: 'cat-11', title: 'Aashirvaad Shudh Chakki Atta', price: '₹255', originalPrice: '₹280', weight: '5 kg', image: 'https://www.bigbasket.com/media/uploads/p/l/126903-2_3-aashirvaad-shudh-chakki-atta.jpg', discount: '8% OFF', time: '45 MINS', isNew: false, rating: 4.8 },
    { id: 'cat-12', title: 'Maggi 2-Minute Noodles Masala', price: '₹140', originalPrice: '₹160', weight: '840g', image: 'https://www.bigbasket.com/media/uploads/p/l/266109_18-maggi-2-minute-instant-noodles-masala.jpg', discount: '12% OFF', time: '15 MINS', isNew: false, rating: 4.7 },
];

export default function CategoryPage() {
    return (
        <main className="bg-white min-h-screen text-gray-900 border-t border-red-50">
            <Navbar />

            <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 box-border">

                {/* Breadcrumbs / Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Home / Snacks / Chips</div>
                        <h1 className="text-3xl font-bold text-gray-900">Example Category</h1>
                        <p className="text-sm text-gray-500 mt-1">Found 48 products</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#E11D2E] bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:border-red-100 transition-colors">
                            Sort by: Popularity <ChevronDown size={14} />
                        </button>
                        <button className="lg:hidden p-2 bg-white rounded-lg border border-gray-200 text-gray-600">
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

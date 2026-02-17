'use client';

import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 'bs-1', title: 'Himalaya Baby Powder', price: '₹180', originalPrice: '₹200', weight: '400g', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4', isNew: true, time: '20 MINS' },
    { id: 'bs-2', title: 'Dettol Original Liquid Handwash', price: '₹199', originalPrice: '₹220', weight: '900ml', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f', time: '20 MINS' },
    { id: 'bs-3', title: 'Kissan Mixed Fruit Jam', price: '₹220', originalPrice: '₹240', weight: '700g', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b', time: '15 MINS' },
    { id: 'bs-4', title: 'Brooke Bond Red Label Tea', price: '₹260', originalPrice: '₹300', weight: '500g', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12', time: '10 MINS' },
    { id: 'bs-5', title: 'Tata Salt Vacuum Evaporated', price: '₹24', originalPrice: '₹28', weight: '1kg', image: 'https://www.bigbasket.com/media/uploads/p/l/241600_5-tata-salt-iodized.jpg', time: '30 MINS' },
    { id: 'bs-6', title: 'Britannia Good Day Cashew Cookies', price: '₹35', originalPrice: '₹40', weight: '200g', image: 'https://www.bigbasket.com/media/uploads/p/l/264491_12-britannia-good-day-cookies-cashew.jpg', time: '20 MINS' },
    { id: 'bs-7', title: 'Surf Excel Excel Matic Top Load', price: '₹450', originalPrice: '₹500', weight: '2kg', image: 'https://www.bigbasket.com/media/uploads/p/l/266976_8-surf-excel-detergent-powder-matic-top-load.jpg', discount: '10% OFF', time: '40 MINS' },
    { id: 'bs-8', title: 'Haldirams Bhujia Sev', price: '₹110', originalPrice: '₹120', weight: '400g', image: 'https://www.bigbasket.com/media/uploads/p/l/10000574_17-haldirams-namkeen-bhujia-sev.jpg', time: '15 MINS' },
];

export default function BestSellers() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Best Sellers</h2>
                    <button className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors">See All</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

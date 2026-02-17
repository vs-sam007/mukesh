'use client';

import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 'bs-1', name: 'Himalaya Baby Powder', price: 180, mrp: 200, weight: '400g', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4', isNew: true, rating: 4.8 },
    { id: 'bs-2', name: 'Dettol Original Liquid Handwash', price: 199, mrp: 220, weight: '900ml', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f', rating: 4.9 },
    { id: 'bs-3', name: 'Kissan Mixed Fruit Jam', price: 220, mrp: 240, weight: '700g', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b', rating: 4.5 },
    { id: 'bs-4', name: 'Brooke Bond Red Label Tea', price: 260, mrp: 300, weight: '500g', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12', rating: 4.7 },
    { id: 'bs-5', name: 'Tata Salt Vacuum Evaporated', price: 24, mrp: 28, weight: '1kg', image: 'https://www.bigbasket.com/media/uploads/p/l/241600_5-tata-salt-iodized.jpg', rating: 4.6 },
    { id: 'bs-6', name: 'Britannia Good Day Cashew Cookies', price: 35, mrp: 40, weight: '200g', image: 'https://www.bigbasket.com/media/uploads/p/l/264491_12-britannia-good-day-cookies-cashew.jpg', rating: 4.5 },
    { id: 'bs-7', name: 'Surf Excel Excel Matic Top Load', price: 450, mrp: 500, weight: '2kg', image: 'https://www.bigbasket.com/media/uploads/p/l/266976_8-surf-excel-detergent-powder-matic-top-load.jpg', discount: 10, rating: 4.8 },
    { id: 'bs-8', name: 'Haldirams Bhujia Sev', price: 110, mrp: 120, weight: '400g', image: 'https://www.bigbasket.com/media/uploads/p/l/10000574_17-haldirams-namkeen-bhujia-sev.jpg', rating: 4.7 },
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

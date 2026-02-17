'use client';

import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { name: 'Himalaya Baby Powder', price: '₹180', originalPrice: '₹200', weight: '400g', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4', badge: 'Top Pick' },
    { name: 'Dettol Original Liquid Handwash', price: '₹199', originalPrice: '₹220', weight: '900ml', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f', badge: 'Best Seller' },
    { name: 'Kissan Mixed Fruit Jam', price: '₹220', originalPrice: '₹240', weight: '700g', img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b', badge: '' },
    { name: 'Brooke Bond Red Label Tea', price: '₹260', originalPrice: '₹300', weight: '500g', img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12', badge: 'Popular' },
    { name: 'Tata Salt Vacuum Evaporated', price: '₹24', originalPrice: '₹28', weight: '1kg', img: 'https://www.bigbasket.com/media/uploads/p/l/241600_5-tata-salt-iodized.jpg', badge: '' },
    { name: 'Britannia Good Day Cashew Cookies', price: '₹35', originalPrice: '₹40', weight: '200g', img: 'https://www.bigbasket.com/media/uploads/p/l/264491_12-britannia-good-day-cookies-cashew.jpg', badge: '' },
    { name: 'Surf Excel Excel Matic Top Load', price: '₹450', originalPrice: '₹500', weight: '2kg', img: 'https://www.bigbasket.com/media/uploads/p/l/266976_8-surf-excel-detergent-powder-matic-top-load.jpg', badge: 'Deal' },
    { name: 'Haldirams Bhujia Sev', price: '₹110', originalPrice: '₹120', weight: '400g', img: 'https://www.bigbasket.com/media/uploads/p/l/10000574_17-haldirams-namkeen-bhujia-sev.jpg', badge: '' },
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
                    {products.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            title={product.name}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            weight={product.weight}
                            image={product.img}
                            discount={product.badge === 'Deal' ? '10%' : undefined}
                            time="20 MINS"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

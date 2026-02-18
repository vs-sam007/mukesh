import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#0f1115] text-white">
            <Navbar />
            <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">All Products</h1>
                <p className="text-gray-400">Browse our complete collection of fresh groceries and essentials.</p>
                <div className="mt-12 p-12 border border-dashed border-gray-700 rounded-2xl bg-[#161a22]">
                    <p>Product listing coming soon...</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

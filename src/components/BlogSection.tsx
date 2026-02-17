'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: '5 Healthy Breakfast Ideas for Busy Mornings',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600',
        category: 'Recipes',
        readTime: '4 min',
        description: 'Quick, nutritious, and delicious breakfast options.'
    },
    {
        id: 2,
        title: 'How to Keep Your Vegetables Fresh for Longer',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600',
        category: 'Tips',
        readTime: '3 min',
        description: 'Simple hacks to extend the shelf life of your greens.'
    },
    {
        id: 3,
        title: 'Easy 15-Minute Evening Snacks',
        image: 'https://images.unsplash.com/photo-1621939514649-28b12e816a8d?auto=format&fit=crop&q=80&w=600',
        category: 'Recipes',
        readTime: '5 min',
        description: 'Tasty snack recipes that are ready in a flash.'
    }
];

export default function BlogSection() {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">Fresh Reads</h2>
                <button className="hidden md:flex items-center gap-1 text-sm font-bold text-green hover:underline transition-colors">
                    View All Articles <ArrowRight size={16} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, idx) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group bg-dark-card border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-green/10 transition-all cursor-pointer"
                    >
                        <div className="h-48 overflow-hidden bg-white/5 relative">
                            <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                {post.category}
                            </span>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
                                <Clock size={12} />
                                <span>{post.readTime} read</span>
                            </div>
                            <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight group-hover:text-green transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-text-secondary text-sm line-clamp-2">
                                {post.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="md:hidden w-full mt-6 py-3 rounded-xl border border-white/10 text-text-primary font-bold text-sm bg-dark-card hover:bg-white/5 transition-colors">
                View All Articles
            </button>
        </section>
    );
}

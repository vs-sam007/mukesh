'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "5 Quick & Healthy Breakfast Recipes for Busy Mornings",
        excerpt: "Start your day right with these nutritious meals that take less than 15 minutes to prepare.",
        image: "/images/Gemini_Generated_Image_b5mg9xb5mg9xb5mg.png",
        date: "Feb 15, 2026",
        author: "Priya Singh",
        category: "Recipes"
    },
    {
        id: 2,
        title: "The Ultimate Guide to Choosing Fresh Vegetables",
        excerpt: "Learn the secrets of picking the perfect tomatoes, crisp greens, and ripe fruits every time.",
        image: "/images/Gemini_Generated_Image_2zif1h2zif1h2zif.png",
        date: "Feb 12, 2026",
        author: "Mukesh Kumar",
        category: "Tips & Tricks"
    },
    {
        id: 3,
        title: "Why Organic Milk is Better for Your Family",
        excerpt: "Discover the health benefits of switching to organic milk and how it differs from regular milk.",
        image: "/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png",
        date: "Feb 10, 2026",
        author: "Dr. R.K. Gupta",
        category: "Health"
    },
    {
        id: 4,
        title: "Top 10 Snacks for Your Movie Night",
        excerpt: "Planning a binge-watch session? Here are the best munchies to keep you company.",
        image: "/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png",
        date: "Feb 08, 2026",
        author: "Team Mukesh",
        category: "Lifestyle"
    },
    {
        id: 5,
        title: "How to Store Green Leafy Vegetables for Longer",
        excerpt: "Stop throwing away spinach! Here is how you can keep your greens fresh for up to a week.",
        image: "/images/Gemini_Generated_Image_e7hwz4e7hwz4e7hw.png",
        date: "Feb 05, 2026",
        author: "Priya Singh",
        category: "Kitchen Hacks"
    },
    {
        id: 6,
        title: "Benefits of Dry Fruits in Winter",
        excerpt: "Keep warm and healthy this winter with these essential dry fruits in your diet.",
        image: "/images/Gemini_Generated_Image_fvw538fvw538fvw5.png",
        date: "Feb 01, 2026",
        author: "Dr. A. Mishra",
        category: "Health"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-dark text-text-primary font-sans">
            <Navbar />

            <section className="pt-32 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Fresh <span className="text-green">Reads</span></h1>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Recipes, health tips, and store updates curated just for you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-dark-card border border-white/5 rounded-2xl overflow-hidden hover:border-green/30 transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                        {post.category}
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-green transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-green transition-colors">
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

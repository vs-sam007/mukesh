'use client';

import React, { useState } from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';
import { motion } from 'framer-motion';

const initialReviews = [
    { id: 1, name: 'Rahul Sharma', rating: 5, date: '2 days ago', text: 'Super fast delivery! Got my groceries in 15 mins. The veggies were fresh too.', likes: 12 },
    { id: 2, name: 'Priya Verma', rating: 5, date: '1 week ago', text: 'Love the app interface, very smooth. Deals are amazing compared to other apps.', likes: 8 },
    { id: 3, name: 'Amit Singh', rating: 4, date: '3 weeks ago', text: 'Good service but need to add more bakery items. Delivery executive was polite.', likes: 5 },
];

export default function ReviewsSection() {
    const [reviews, setReviews] = useState(initialReviews);
    const [showForm, setShowForm] = useState(false);

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2">Customer Stories</h2>
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-current" />)}
                        </div>
                        <span className="text-text-primary font-bold">4.8/5</span>
                        <span className="text-text-secondary text-sm">(based on 1200+ reviews)</span>
                    </div>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-green text-dark font-bold px-6 py-3 rounded-xl hover:bg-green-hover transition-colors shadow-lg shadow-green/20"
                >
                    {showForm ? 'Cancel Review' : 'Write a Review'}
                </button>
            </div>

            {/* Review Form - Collapsible */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-dark-card border border-white/5 p-6 rounded-2xl mb-8 overflow-hidden"
                >
                    <h3 className="text-lg font-bold text-white mb-4">Share you experience</h3>
                    <div className="space-y-4">
                        <div className="flex gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} size={28} className="text-gray-600 hover:text-yellow-500 cursor-pointer transition-colors" />
                            ))}
                        </div>
                        <input className="w-full bg-dark border border-white/10 rounded-xl p-3 text-text-primary focus:border-green outline-none" placeholder="Your Name" />
                        <textarea className="w-full bg-dark border border-white/10 rounded-xl p-3 text-text-primary h-24 focus:border-green outline-none resize-none" placeholder="Tell us about your delivery..." />
                        <button className="w-full bg-white text-dark font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">Submit Review</button>
                    </div>
                </motion.div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-dark-card border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-green">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                                    <span className="text-xs text-text-secondary">{review.date}</span>
                                </div>
                            </div>
                            <div className="flex text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                            </div>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            "{review.text}"
                        </p>
                        <div className="flex items-center gap-4 text-xs text-text-secondary">
                            <button className="flex items-center gap-1 hover:text-white transition-colors">
                                <ThumbsUp size={14} /> Helpful ({review.likes})
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="w-full mt-8 py-3 text-sm text-green font-bold hover:underline">
                Read All 1,245 Reviews
            </button>
        </section>
    );
}

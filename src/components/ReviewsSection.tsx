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

    const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });

    const handleSubmit = () => {
        if (!newReview.name || !newReview.text) return;
        const review = {
            id: reviews.length + 1,
            name: newReview.name,
            rating: newReview.rating,
            date: 'Just now',
            text: newReview.text,
            likes: 0
        };
        setReviews([review, ...reviews]);
        setNewReview({ name: '', text: '', rating: 5 });
        setShowForm(false);
    };

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto bg-[#0f1115]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Customer Stories</h2>
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-current" />)}
                        </div>
                        <span className="text-white font-bold">4.8/5</span>
                        <span className="text-[#b8c0cc] text-sm">(based on 1200+ reviews)</span>
                    </div>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-[#E11D2E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#C2000B] transition-colors shadow-lg shadow-red-900/20"
                >
                    {showForm ? 'Cancel Review' : 'Write a Review'}
                </button>
            </div>

            {/* Review Form - Collapsible */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-[#1c212b] border border-[#2a3140] p-6 rounded-2xl mb-8 overflow-hidden"
                >
                    <h3 className="text-lg font-bold text-white mb-4">Share you experience</h3>
                    <div className="space-y-4">
                        <div className="flex gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star
                                    key={i}
                                    size={28}
                                    className={`cursor-pointer transition-colors ${i <= newReview.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`}
                                    onClick={() => setNewReview({ ...newReview, rating: i })}
                                />
                            ))}
                        </div>
                        <input
                            className="w-full bg-[#0f1115] border border-[#2a3140] rounded-xl p-3 text-white focus:border-[#E11D2E] outline-none"
                            placeholder="Your Name"
                            value={newReview.name}
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        />
                        <textarea
                            className="w-full bg-[#0f1115] border border-[#2a3140] rounded-xl p-3 text-white h-24 focus:border-[#E11D2E] outline-none resize-none"
                            placeholder="Tell us about your delivery..."
                            value={newReview.text}
                            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Submit Review
                        </button>
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
                        className="bg-[#1c212b] border border-[#2a3140] p-6 rounded-2xl hover:border-[#E11D2E]/30 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#2a3140] rounded-full flex items-center justify-center text-[#E11D2E]">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                                    <span className="text-xs text-[#b8c0cc]">{review.date}</span>
                                </div>
                            </div>
                            <div className="flex text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                            </div>
                        </div>
                        <p className="text-[#b8c0cc] text-sm leading-relaxed mb-4">
                            "{review.text}"
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#b8c0cc]">
                            <button className="flex items-center gap-1 hover:text-white transition-colors">
                                <ThumbsUp size={14} /> Helpful ({review.likes})
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="w-full mt-8 py-3 text-sm text-[#E11D2E] font-bold hover:underline">
                Read All 1,245 Reviews
            </button>
        </section>
    );
}

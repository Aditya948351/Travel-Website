import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, location, year, review, rating = 5 }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
        >
            <div className="flex items-center gap-1 text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-gray-300'}`}></i>
                ))}
            </div>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed italic flex-grow">"{review}"</p>
            <div className="border-t pt-4 mt-auto">
                <h4 className="font-bold text-secondary">{name}</h4>
                <p className="text-sm text-gray-600">{location}</p>
                <p className="text-xs text-primary font-semibold">{year}</p>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;

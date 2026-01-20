import React from 'react';

const TestimonialCard = ({ name, location, year, review }) => {
    return (
        <div className="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-1 text-yellow-500 mb-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">"{review}"</p>
            <div className="border-t pt-4">
                <h4 className="font-bold text-secondary">{name}</h4>
                <p className="text-sm text-gray-600">{location}</p>
                <p className="text-xs text-primary font-semibold">{year}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;

import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-primary text-4xl mb-4">
                <i className={icon}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default ServiceCard;

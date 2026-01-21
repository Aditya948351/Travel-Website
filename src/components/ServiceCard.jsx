import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full border-b-4 border-transparent hover:border-primary"
        >
            <div className="text-primary text-4xl mb-4">
                <i className={icon}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default ServiceCard;

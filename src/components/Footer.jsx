import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-12 pb-6">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Column 1: About */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">ASPIRE ABROAD</h3>
                    <p className="text-gray-300 text-sm mb-4">
                        Official representative of FEFU. We provide complete assistance for MBBS admission in Russia.
                        Trust the experts for your medical career abroad.
                    </p>
                    <div className="flex gap-4 text-lg">
                        <a href="#" className="hover:text-primary"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:text-primary"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-primary"><i className="fab fa-youtube"></i></a>
                        <a href="#" className="hover:text-primary"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">QUICK LINKS</h3>
                    <ul className="text-sm space-y-2">
                        <li><Link to="/" className="hover:text-primary">Home</Link></li>
                        <li><a href="#about" className="hover:text-primary">About Us</a></li>
                        <li><a href="#services" className="hover:text-primary">Our Services</a></li>
                        <li><a href="#contact" className="hover:text-primary">Contact Us</a></li>
                        <li><Link to="/login" className="hover:text-primary">Login</Link></li>
                        <li><Link to="/register" className="hover:text-primary">Register</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div id="contact">
                    <h3 className="text-xl font-bold mb-4 text-primary">GET IN TOUCH</h3>
                    <ul className="text-sm space-y-3">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-map-marker-alt mt-1 text-primary"></i>
                            <span>
                                [Your Office Address]<br />
                                [City, State, Country]
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fas fa-phone-alt text-primary"></i>
                            <span>+91 XXXXXXXXXX</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fas fa-envelope text-primary"></i>
                            <span>contact@aspireabroad.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                <p>&copy; 2026 Aspire Abroad. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

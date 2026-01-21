import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 px-4 text-sm">
                <div className="container flex justify-between items-center flex-wrap gap-2">
                    <div className="flex gap-4">
                        <span><i className="fab fa-whatsapp"></i> +91 XXXXXXXXXX (whatsapp call/text only)</span>
                        <span><i className="fas fa-envelope"></i> contact@aspireabroad.com</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-200"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
                <div className="container flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 text-decoration-none">
                        <div className="h-16 w-24 overflow-hidden flex items-center justify-center">
                            <img
                                src="/travelabroad.png"
                                alt="Aspire Abroad Logo"
                                className="w-full h-full object-cover object-center transform scale-125"
                            />
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-6 font-bold text-sm uppercase">
                            <li><Link to="/" className="hover:text-primary transition">HOME</Link></li>
                            <li><a href="#about" className="hover:text-primary transition">ABOUT US</a></li>
                            <li><a href="#services" className="hover:text-primary transition">OUR SERVICES</a></li>
                            <li><a href="#contact" className="hover:text-primary transition">CONTACT US</a></li>
                            <li><Link to="/login" className="hover:text-primary transition">LOGIN</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button (Placeholder) */}
                    <button className="md:hidden text-2xl text-primary">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Navbar;

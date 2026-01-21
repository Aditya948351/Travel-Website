import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isDashboard = location.pathname === '/dashboard';
    const logoHeight = isDashboard ? '40px' : '60px';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
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
            <header className="bg-white py-2 shadow-sm sticky top-0 z-50">
                <div className="w-full px-6 flex justify-between items-center relative">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 text-decoration-none" onClick={closeMenu}>
                        <div style={{ height: logoHeight, width: '120px' }} className="overflow-hidden flex items-center justify-center">
                            <img
                                src="/travelabroad.png?v=2"
                                alt="Aspire Abroad Logo"
                                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                            />
                        </div>
                        <span className="text-primary font-bold text-xl tracking-wide">ASPIRE ABROAD</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-6 font-bold text-sm uppercase">
                            <li><Link to="/" className="hover:text-primary transition">HOME</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition">ABOUT US</Link></li>
                            <li><a href="#services" className="hover:text-primary transition">OUR SERVICES</a></li>
                            <li><a href="#contact" className="hover:text-primary transition">CONTACT US</a></li>
                            <li><Link to="/login" className="hover:text-primary transition">LOGIN</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-primary focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Mobile Navigation Dropdown */}
                    <div className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="flex flex-col font-bold text-sm uppercase text-center py-4 space-y-4">
                            <li><Link to="/" className="block hover:text-primary transition" onClick={closeMenu}>HOME</Link></li>
                            <li><Link to="/about" className="block hover:text-primary transition" onClick={closeMenu}>ABOUT US</Link></li>
                            <li><a href="#services" className="block hover:text-primary transition" onClick={closeMenu}>OUR SERVICES</a></li>
                            <li><a href="#contact" className="block hover:text-primary transition" onClick={closeMenu}>CONTACT US</a></li>
                            <li><Link to="/login" className="block hover:text-primary transition" onClick={closeMenu}>LOGIN</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;

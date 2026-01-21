import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import ReviewForm from '../components/ReviewForm';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [showReviewForm, setShowReviewForm] = useState(false);

    useEffect(() => {
        // Fetch approved reviews
        const q = query(
            collection(db, 'reviews'),
            // where('approved', '==', true), // Uncomment when admin approval is implemented
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reviewsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReviews(reviewsData);
        });

        return () => unsubscribe();
    }, []);

    const services = [
        {
            icon: "fas fa-file-alt",
            title: "Smooth Application Process",
            description: "We guide students through every step of the application process, ensuring all forms and documents are completed accurately and submitted on time."
        },
        {
            icon: "fas fa-user-check",
            title: "Admission Process Assistance",
            description: "Our team provides personalized support throughout the admission process, helping students meet all requirements and deadlines."
        },
        {
            icon: "fas fa-envelope-open-text",
            title: "Invitation Letter Facilitation",
            description: "We assist in obtaining the official invitation letter from the foreign ministry, a crucial step in the admission process."
        },
        {
            icon: "fas fa-passport",
            title: "Visa Assistance",
            description: "Our experts provide comprehensive support in the visa application process, including document preparation and interview preparation."
        },
        {
            icon: "fas fa-plane",
            title: "Travel Arrangements",
            description: "We help students with travel bookings, ensuring a hassle-free journey from India to their chosen destination."
        },
        {
            icon: "fas fa-hands-helping",
            title: "On-Ground Support",
            description: "A dedicated representative from our agency will accompany students from India to Russia, providing assistance and ensuring a smooth transition upon arrival."
        },
        {
            icon: "fas fa-dollar-sign",
            title: "Forex Exchange Assistance",
            description: "We guide students in exchanging currency at competitive rates, ensuring they have the necessary funds for their stay."
        },
        {
            icon: "fas fa-university",
            title: "University Assistance",
            description: "Once at the university, we provide ongoing support to help students acclimate to their new environment and navigate university life."
        },
        {
            icon: "fas fa-folder-open",
            title: "Documentation Support",
            description: "We assist with all necessary documentation required after reaching the university, ensuring compliance with local regulations and academic requirements."
        }
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-section bg-gray-500 flex items-center justify-center text-center text-white relative"
                style={{ backgroundColor: '#808080', minHeight: '100vh' }}
            >
                <div className="container px-4 py-20 md:py-0">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl mb-2 uppercase tracking-wide"
                    >
                        Aspire Abroad
                    </motion.h2>
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-tight md:leading-normal"
                        style={{ maxWidth: '900px', margin: '0 auto' }}
                    >
                        Official <br /> Representative of <br /> FEFU
                    </motion.h1>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/register"
                        className="btn btn-primary text-base md:text-lg px-6 py-2 md:px-8 md:py-3 uppercase inline-block"
                    >
                        Register Now
                    </motion.a>
                </div>

                {/* Whatsapp Float Icon */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    style={{ position: 'absolute', bottom: '20px', right: '20px' }}
                >
                    <a href="#" className="text-white bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: '#25D366' }}>
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </motion.div>
            </motion.section>



            {/* Services Section */}
            <section id="services" className="py-16 bg-light-gray">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Services We Offer</h2>
                        <p className="text-gray-600">Comprehensive support for your journey to studying MBBS abroad</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Name That You Trust</h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="text-center p-6">
                            <div className="text-primary text-5xl mb-4">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary">Highest Recruiter of FEFU</h3>
                            <p className="text-gray-600">
                                We are the highest recruiter of FEFU, proudly facilitating the largest number of student admissions in FEFU in recent years.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center p-6">
                            <div className="text-primary text-5xl mb-4">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary">Official Representative of FEFU</h3>
                            <p className="text-gray-600">
                                We are proud to be the official representative of Far Eastern Federal University (FEFU). Applying directly through us ensures safety, honesty, lower charges, and transparency.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center p-6">
                            <div className="text-primary text-5xl mb-4">
                                <i className="fas fa-hand-holding-usd"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary">No One Time Charges (OTC)</h3>
                            <p className="text-gray-600">
                                Our agency has no hidden charges. There are no one-time charges (OTC) or miscellaneous charges. What you see is what you pay.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-light-gray">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">What Our Students Say</h2>
                        <p className="text-gray-600">Hear from students who trusted us with their dreams</p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowReviewForm(!showReviewForm)}
                            className="mt-6 btn btn-outline-primary px-6 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                        >
                            {showReviewForm ? 'Close Review Form' : 'Write a Review'}
                        </motion.button>
                    </motion.div>

                    {/* Review Form */}
                    {showReviewForm && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mb-12 max-w-2xl mx-auto"
                        >
                            <ReviewForm onSuccess={() => setShowReviewForm(false)} />
                        </motion.div>
                    )}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <motion.div key={review.id} variants={fadeInUp}>
                                    <TestimonialCard
                                        name={review.userName}
                                        location={review.userLocation}
                                        year={new Date(review.createdAt?.seconds * 1000).toLocaleDateString()}
                                        review={review.reviewText}
                                        rating={review.rating}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-10 text-gray-500">
                                Loading reviews...
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Video Gallery Section */}
            <section className="py-16 bg-white">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Video Gallery</h2>
                        <p className="text-gray-600">Watch our students' journey to success</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-all"
                                style={{ height: '250px' }}
                            >
                                <div className="text-center text-gray-500">
                                    <i className="fab fa-youtube text-6xl mb-2 text-red-600"></i>
                                    <p>Video Placeholder</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Subscribe/Contact Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-16 bg-primary text-white"
            >
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-lg mb-8">Contact us today to begin your MBBS abroad application process</p>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="/register"
                        className="btn bg-white text-primary px-8 py-3 text-lg font-bold hover:bg-gray-100 inline-block rounded-full shadow-lg"
                    >
                        Get Started Now
                    </motion.a>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default Home;

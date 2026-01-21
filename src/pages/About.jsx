import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
                className="relative bg-primary text-white py-20 md:py-32 flex items-center justify-center text-center"
            >
                <div className="container px-4 relative z-10">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider"
                    >
                        About Aspire Abroad
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-2xl max-w-3xl mx-auto font-light"
                    >
                        Your trusted partner in pursuing medical education at Far Eastern Federal University.
                    </motion.p>
                </div>
                {/* Background Pattern/Overlay */}
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </motion.section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Aspire Abroad was founded with a singular mission: to bridge the gap between ambitious students in India and world-class medical education in Russia. We recognized the challenges students face—complex admission processes, lack of transparent information, and the fear of the unknown.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            As the <strong>Official Representative of Far Eastern Federal University (FEFU)</strong>, we have eliminated these barriers. We provide a direct, secure, and transparent pathway for students to achieve their dreams of becoming doctors. Our journey is defined by the success stories of the hundreds of students we have guided to FEFU.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 bg-light-gray">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        {/* Mission */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                            <div className="text-primary text-4xl mb-6">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower students with the correct guidance and resources to pursue affordable, high-quality medical education abroad. We strive to make the admission process seamless, transparent, and stress-free for both students and parents.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                            <div className="text-primary text-4xl mb-6">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted and preferred educational consultancy for medical studies in Russia, known for our integrity, student-centric approach, and unwavering commitment to student success.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us (Expanded) */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Aspire Abroad?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We are more than just consultants; we are your partners in this journey.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: "fas fa-university", title: "Direct Admission", desc: "No third-party agents. We are directly authorized by FEFU." },
                            { icon: "fas fa-hand-holding-usd", title: "Transparent Costs", desc: "No hidden fees, no donation, and no capitation fees." },
                            { icon: "fas fa-user-shield", title: "Full Support", desc: "From application to arrival and beyond, we are with you." },
                            { icon: "fas fa-file-contract", title: "Guaranteed Seat", desc: "We ensure your admission if you meet the eligibility criteria." },
                            { icon: "fas fa-globe", title: "Global Exposure", desc: "Study in a truly international environment at FEFU." },
                            { icon: "fas fa-heart", title: "Student Welfare", desc: "We prioritize your safety and comfort above all else." }
                        ].map((item, index) => (
                            <motion.div key={index} variants={fadeInUp} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                                <div className="text-primary text-5xl mb-4">
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="py-20 bg-primary text-white text-center"
            >
                <div className="container px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Join the hundreds of successful students who have trusted Aspire Abroad.</p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/register"
                        className="btn bg-white text-primary px-10 py-4 text-lg font-bold hover:bg-gray-100 inline-block rounded-full shadow-lg"
                    >
                        Apply Now
                    </motion.a>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default About;

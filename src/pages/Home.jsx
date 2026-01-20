import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
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

    const testimonials = [
        {
            name: "Suhaina Shaji",
            location: "Kerala, India",
            year: "FEFU 1st year student",
            review: "I am so grateful to Aspire Abroad for all the support they provided during my study abroad journey! The entire team was incredibly helpful. I highly recommend Aspire Abroad to anyone looking to study abroad!"
        },
        {
            name: "Sneha Pradhan",
            location: "Odisha, India",
            year: "FEFU 2nd year student",
            review: "I am currently in my second year of studies, and I can't express enough how grateful I am for Aspire Abroad. The agency has been a tremendous help throughout my journey. If you're looking for the best agency to help with your admission process, I highly recommend Aspire Abroad!"
        },
        {
            name: "Ayush Chandel",
            location: "Himachal Pradesh, Shimla",
            year: "FEFU 2nd year student",
            review: "I had an amazing experience with Aspire Abroad! The agency was incredibly helpful throughout my study abroad process. They always provided clear guidance and support, making the entire journey much smoother."
        },
        {
            name: "Dhruv Pravin Bharude",
            location: "Mumbai, Maharashtra",
            year: "FEFU 1st year student",
            review: "I had a fantastic experience with Aspire Abroad! From start to finish, the team was incredibly honest and helpful, making the entire process stress-free. They guided me through every step, answering all my questions and providing valuable insights."
        },
        {
            name: "Kesar Yadav",
            location: "Uttar Pradesh",
            year: "Studying in FEFU",
            review: "After researching various agencies, I found that they offer the lowest charges in the market, which was a huge relief for my family and me. The team at Aspire Abroad is incredibly helpful and honest, guiding me through every step of the process with transparency."
        },
        {
            name: "Abhinav Ranjan",
            location: "Jharkhand, India",
            year: "Studying at FEFU",
            review: "The support I received from Aspire Abroad was exceptional. They made my dream of studying MBBS in Russia a reality. Highly recommended for anyone looking to study abroad!"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section bg-gray-500 flex items-center justify-center text-center text-white relative" style={{ backgroundColor: '#808080', minHeight: '600px' }}>
                <div className="container px-4">
                    <h2 className="text-xl mb-2 uppercase tracking-wide">Aspire Abroad</h2>
                    <h1 className="text-6xl font-bold mb-8 uppercase" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        Official <br /> Representative of <br /> FEFU
                    </h1>

                    <a href="/register" className="btn btn-primary text-lg px-8 py-3 uppercase inline-block">
                        Register Now
                    </a>
                </div>

                {/* Whatsapp Float Icon */}
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                    <a href="#" className="text-white bg-green-500 rounded-full shadow-lg flex items-center justify-center" style={{ width: '60px', height: '60px', fontSize: '2rem', backgroundColor: '#25D366' }}>
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Far Eastern Federal University</h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We are the official representative of Far Eastern Federal University (FEFU), one of the leading medical universities in Russia.
                            FEFU has granted us the power of attorney to facilitate direct admissions, meaning you can apply without the need for any third-party agency or agent.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bg-light-gray">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Services We Offer</h2>
                        <p className="text-gray-600">Comprehensive support for your journey to studying MBBS abroad</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Name That You Trust</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-primary text-5xl mb-4">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary">Highest Recruiter of FEFU</h3>
                            <p className="text-gray-600">
                                We are the highest recruiter of FEFU, proudly facilitating the largest number of student admissions in FEFU in recent years.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="text-primary text-5xl mb-4">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary">Official Representative of FEFU</h3>
                            <p className="text-gray-600">
                                We are proud to be the official representative of Far Eastern Federal University (FEFU). Applying directly through us ensures safety, honesty, lower charges, and transparency.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="text-primary text-5xl mb-4">
                                <i className="fas fa-hand-holding-usd"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-secondary">No One Time Charges (OTC)</h3>
                            <p className="text-gray-600">
                                Our agency has no hidden charges. There are no one-time charges (OTC) or miscellaneous charges. What you see is what you pay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-light-gray">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">What Our Students Say</h2>
                        <p className="text-gray-600">Hear from students who trusted us with their dreams</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                location={testimonial.location}
                                year={testimonial.year}
                                review={testimonial.review}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Gallery Section */}
            <section className="py-16 bg-white">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Recent Video Gallery</h2>
                        <p className="text-gray-600">Watch our students' journey to success</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Placeholder for videos */}
                        <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '250px' }}>
                            <div className="text-center text-gray-500">
                                <i className="fab fa-youtube text-6xl mb-2"></i>
                                <p>Video Placeholder</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '250px' }}>
                            <div className="text-center text-gray-500">
                                <i className="fab fa-youtube text-6xl mb-2"></i>
                                <p>Video Placeholder</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '250px' }}>
                            <div className="text-center text-gray-500">
                                <i className="fab fa-youtube text-6xl mb-2"></i>
                                <p>Video Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe/Contact Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-lg mb-8">Contact us today to begin your MBBS abroad application process</p>
                    <a href="/register" className="btn bg-white text-primary px-8 py-3 text-lg font-bold hover:bg-gray-100">
                        Get Started Now
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;

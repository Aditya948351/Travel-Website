import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to create account. ' + err.message);
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-light-gray">
            <header className="bg-white py-4 shadow-sm">
                <div className="container flex justify-between items-center">
                    <Link to="/" className="text-primary font-bold text-xl flex items-center gap-2">
                        <img src="/travelabroad.png" alt="Aspire Abroad" style={{ height: '40px', width: 'auto' }} />
                        Aspire Abroad
                    </Link>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
            </header>

            <main className="flex-1 flex justify-center items-center p-4">
                <div className="auth-card">
                    <h2 className="text-2xl font-bold text-primary mb-6 text-center uppercase">Register</h2>

                    {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="form-input"
                                placeholder="Enter your full name"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-input"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-input"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">
                            REGISTER
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <p>Already have an account? <Link to="/login" className="text-primary font-bold">Login here</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;

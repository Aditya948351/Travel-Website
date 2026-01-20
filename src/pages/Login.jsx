import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to login. Please check your credentials.');
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
                    <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
            </header>

            <main className="flex-1 flex justify-center items-center p-4">
                <div className="auth-card">
                    <h2 className="text-2xl font-bold text-primary mb-6 text-center uppercase">Login</h2>

                    {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">
                            LOGIN
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <p>Don't have an account? <Link to="/register" className="text-primary font-bold">Register here</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;

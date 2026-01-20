import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [myReviews, setMyReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUser(currentUser);
            fetchMyReviews(currentUser.uid);
        }
    }, []);

    const fetchMyReviews = async (userId) => {
        try {
            const q = query(
                collection(db, 'reviews'),
                where('userId', '==', userId),
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            const reviews = [];
            querySnapshot.forEach((doc) => {
                reviews.push({ id: doc.id, ...doc.data() });
            });
            setMyReviews(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleReviewSuccess = () => {
        if (user) {
            fetchMyReviews(user.uid);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 bg-light-gray py-8">
                <div className="container px-4">
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-primary">Welcome, {user?.displayName || user?.email}!</h1>
                            <p className="text-gray-600">Manage your reviews and profile</p>
                        </div>
                        <button onClick={handleLogout} className="btn btn-primary">
                            Logout
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Review Form */}
                        <div>
                            <ReviewForm onSuccess={handleReviewSuccess} />
                        </div>

                        {/* My Reviews */}
                        <div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-primary mb-4">My Reviews</h3>

                                {loading ? (
                                    <p className="text-gray-600">Loading your reviews...</p>
                                ) : myReviews.length === 0 ? (
                                    <p className="text-gray-600">You haven't submitted any reviews yet.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {myReviews.map((review) => (
                                            <div key={review.id} className="border-b pb-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-1 text-yellow-500">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <i key={i} className="fas fa-star"></i>
                                                        ))}
                                                    </div>
                                                    <span className={`text-xs px-2 py-1 rounded ${review.approved ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                        {review.approved ? 'Approved' : 'Pending Approval'}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-700 mb-2">{review.reviewText}</p>
                                                <p className="text-xs text-gray-500">{review.userLocation}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;

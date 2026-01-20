import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

const ReviewForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        location: '',
        rating: 5,
        reviewText: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            const user = auth.currentUser;
            if (!user) {
                setError('You must be logged in to submit a review');
                setSubmitting(false);
                return;
            }

            await addDoc(collection(db, 'reviews'), {
                userId: user.uid,
                userName: user.displayName || user.email.split('@')[0],
                userLocation: formData.location,
                rating: parseInt(formData.rating),
                reviewText: formData.reviewText,
                createdAt: serverTimestamp(),
                approved: false // Reviews need approval before showing on homepage
            });

            // Reset form
            setFormData({ location: '', rating: 5, reviewText: '' });
            if (onSuccess) onSuccess();
            alert('Review submitted successfully! It will appear on the homepage after approval.');
        } catch (err) {
            setError('Failed to submit review: ' + err.message);
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">Submit Your Review</h3>

            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="form-label" htmlFor="location">Your Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-input"
                        placeholder="e.g., Mumbai, Maharashtra"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label" htmlFor="rating">Rating</label>
                    <select
                        id="rating"
                        name="rating"
                        className="form-input"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    >
                        <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                        <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                        <option value="3">⭐⭐⭐ (3 stars)</option>
                        <option value="2">⭐⭐ (2 stars)</option>
                        <option value="1">⭐ (1 star)</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="form-label" htmlFor="reviewText">Your Review</label>
                    <textarea
                        id="reviewText"
                        name="reviewText"
                        className="form-input"
                        rows="5"
                        placeholder="Share your experience with Aspire Abroad..."
                        value={formData.reviewText}
                        onChange={handleChange}
                        required
                        style={{ resize: 'vertical' }}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={submitting}
                >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;

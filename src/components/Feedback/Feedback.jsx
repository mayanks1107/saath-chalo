import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
    const [feedback, setFeedback] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !feedback || !name || !rating) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // Add code here to send the feedback data to an API or store it in a database.
        setSubmitted(true);
    };

    return (
        <div className="feedback">
            <div className="_body">
                <div className={`_box ${submitted ? "submitted" : ""}`}>
                    {submitted ? (
                        <div className="submitted-message">
                            <h2>Thank You!</h2>
                            <p>Your feedback has been submitted successfully.</p>
                        </div>
                    ) : (
                        <>
                            <h2>Submit Feedback</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input-field">
                                    <label>Name:</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <label>Email:</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <label>Feedback:</label>
                                    <textarea rows="3" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
                                </div>
                                <div className="input-field">
                                    <label>Rating:</label>
                                    <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
                                </div>
                                <button type="submit" className="feedback_btn">Submit</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

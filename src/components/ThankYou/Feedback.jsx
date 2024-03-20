import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
    const [feedback, setFeedback] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !feedback) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // Add code here to send the feedback data to an API or store it in a database.
        alert("Feedback submitted successfully!");
    };

    return (
        <div className="feedback">
            <div className="_body">
                <div className="_box">
                    <h2>Submit Feedback</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <br />
                        <div className="input-field">
                            <label>Feedback:</label>
                            <textarea rows="1" cols="15" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
                        </div>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
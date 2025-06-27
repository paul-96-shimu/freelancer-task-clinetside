import React from 'react';

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We’ll get back to you soon.");
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Message</label>
                    <textarea
                        placeholder="Write your message..."
                        className="w-full border px-3 py-2 rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
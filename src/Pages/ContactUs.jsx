import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We’ll get back to you soon.");
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
                    Get in Touch
                </h2>
                <p className="text-center text-gray-600 mb-10">
                    We'd love to hear from you. Please fill out the form below or reach us on social media.
                </p>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200"
                    >
                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold text-gray-700">Your Message</label>
                            <textarea
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info & Social Links */}
                    <div className="text-center md:text-left space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
                        <p className="text-gray-600">
                            📧 Email: <a href="mailto:contact@yourdomain.com" className="text-blue-600 hover:underline">contact@yourdomain.com</a><br />
                            📍 Address: 123 Freelance St, Dhaka, Bangladesh
                        </p>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Follow Us</h4>
                            <div className="flex justify-center md:justify-start space-x-4 text-2xl text-blue-600">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebook className="hover:text-blue-800" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <FaTwitter className="hover:text-sky-600" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                    <FaLinkedin className="hover:text-blue-700" />
                                </a>
                                <a href="mailto:contact@yourdomain.com">
                                    <FaEnvelope className="hover:text-red-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional footer section */}
                <div className="text-center mt-16 text-sm text-gray-400">
                    © {new Date().getFullYear()} Your Freelance Site. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
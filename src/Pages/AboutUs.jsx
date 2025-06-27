import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    About Us
                </h2>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                    Welcome to <span className="font-semibold text-blue-600">TaskZone</span>, the go-to platform for freelancers and clients to connect, collaborate, and create. Whether you’re a business owner looking to outsource tasks or a talented individual seeking freelance work, TaskZone bridges the gap with trust and technology.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    We started with a mission to empower individuals to monetize their skills and help businesses grow with affordable freelance services. From design and development to writing, marketing, and more — you’ll find professionals ready to deliver quality results.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    At TaskZone, we value transparency, security, and a seamless experience. Our goal is to make freelance hiring as easy as online shopping.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Thank you for choosing <span className="font-medium text-blue-600">TaskZone</span>. Let’s build the future of freelancing together.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
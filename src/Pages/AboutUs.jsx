import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                About Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to <span className="font-semibold text-blue-600">TaskZone</span>, a dynamic platform that connects skilled freelancers with clients who need tasks done — quickly, efficiently, and affordably.
            </p>
            <p className="text-gray-600 mb-4">
                Our mission is to empower freelancers to showcase their talents, find meaningful work, and grow professionally. At the same time, we help clients save time by hiring trusted individuals for everything from design and development to writing, marketing, and beyond.
            </p>
            <p className="text-gray-600 mb-4">
                Whether you're a student, a professional, or someone looking to earn through remote work, <span className="text-blue-600 font-medium">TaskZone</span> provides the perfect place to get started. We value trust, transparency, and quality service.
            </p>
            <p className="text-gray-600">Thanks for being a part of our journey!</p>
        </div>
    );
};

export default AboutUs;
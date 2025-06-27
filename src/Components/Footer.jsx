import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white  mt-10 py-12 rounded-t-xl ">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand & Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">TaskMarket</h2>
                    <p className="text-gray-300">A trusted platform for freelancers to find quality tasks and earn reliably.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Browse Tasks</a></li>
                        <li><a href="#" className="hover:text-white">Add Task</a></li>
                        <li><a href="#" className="hover:text-white">My Tasks</a></li>
                    </ul>
                </div>

                {/* Support & Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                    <div className="flex space-x-4 mt-4 text-lg">
                        <a href="https://www.facebook.com" className="hover:text-blue-400"><FaFacebook /></a>
                        <a href="https://twitter.com/" className="hover:text-blue-400"><FaSquareTwitter /></a>
                        <a href="https://www.linkedin.com" className="hover:text-blue-400"><FiLinkedin /></a>
                        <a href="https://www.instagram.com" className="hover:text-blue-400"><FaInstagramSquare /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} TaskMarket. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


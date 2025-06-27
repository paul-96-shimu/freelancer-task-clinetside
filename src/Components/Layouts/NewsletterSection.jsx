import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="bg-blue-100 py-12 px-4">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700 mb-6">Get the latest freelance tips, offers & updates straight to your inbox.</p>
                <form className="flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded border  text-black border-gray-300 focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
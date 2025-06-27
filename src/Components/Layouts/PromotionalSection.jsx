import React from 'react';

const PromotionalSection = () => {
    return (
        <section className="bg-blue-50 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    Special Offer 🎉
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                    Get <span className="font-bold text-blue-600">20% off</span> on your first task posting or freelancer hire!
                </p>
                <button className="btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Claim Offer
                </button>
            </div>
        </section>
    );
};

export default PromotionalSection;
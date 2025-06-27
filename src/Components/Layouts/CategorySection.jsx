import React from 'react';

const CategorySection = () => {

    const categories = [
        "Web Development", "Graphic Design", "Digital Marketing", "Content Writing",
        "Data Entry", "SEO Services", "Video Editing", "Mobile App Development"
    ];
    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">Explore Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
                        >
                            <p className="text-lg font-semibold text-gray-700">{category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
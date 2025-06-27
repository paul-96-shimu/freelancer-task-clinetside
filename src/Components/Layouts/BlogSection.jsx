import React from 'react';

const BlogSection = () => {
    const blogs = [
        {
            title: "How to Hire the Right Freelancer",
            snippet: "Learn the step-by-step process of selecting the perfect talent for your project..."
        },
        {
            title: "Top 5 Freelancing Tips",
            snippet: "Improve your chances of success by following these proven freelancing strategies..."
        },
        {
            title: "TaskZone vs Other Platforms",
            snippet: "Why TaskZone gives you more value, better results, and simpler tools..."
        },
    ];
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">From Our Blog</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="border rounded-lg p-6 shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-600">{blog.snippet}</p>
                            <button className="mt-4 text-blue-600 hover:underline">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
import React from 'react';

const Banner = () => {
    return (


        <div>
            {/* Carousel Section */}
            <section className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/wZbtq5fv/freelancer3.jpg"
                        className="w-full object-cover h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/JRWk04jP/freelancer2.jpg"
                        className="w-full object-cover h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/wrjjWL1S/freelancer1.jpg"
                        className="w-full object-cover h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/SwpZWY68/freelancer4.jpg"
                        className="w-full object-cover h-[500px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-blue-700">Top Rated Freelancers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Shimu Paul", field: "Web Developer", rating: 4.9 },
                            { name: "Nayeem Hasan", field: "Graphic Designer", rating: 4.8 },
                            { name: "Anika Rahman", field: "Content Writer", rating: 5.0 },
                        ].map((freelancer, idx) => (
                            <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold">{freelancer.name}</h3>
                                <p className="text-blue-600 mt-1">{freelancer.field}</p>
                                <p className="text-yellow-500 mt-3 text-lg">⭐ {freelancer.rating} / 5.0</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Freelancer Success Tips</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-lg mb-2">📝 Build a Strong Profile</h3>
                            <p className="text-gray-600">Complete your profile with a professional bio, skills, and portfolio to attract clients.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-lg mb-2">📅 Deliver On Time</h3>
                            <p className="text-gray-600">Always meet deadlines. Timely delivery builds trust and earns repeat work.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-lg mb-2">💬 Communicate Clearly</h3>
                            <p className="text-gray-600">Respond quickly and professionally to client messages and questions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="font-semibold text-lg mb-2">🌟 Get Reviews</h3>
                            <p className="text-gray-600">Encourage happy clients to leave reviews. High ratings lead to more trust.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Banner;
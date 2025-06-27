import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div className='py-12 dark:bg-gray-900 bg-white text-black dark:text-white'>

            {/* Theme Toggle Button */}
            <div className='flex justify-end pr-6'>

                <ThemeToggle />

            </div>

            {/* Animated Section using react-awesome-reveal */}
            <div className='text-center my-12 space-y-6'>
                <Fade>
                    <h1 className='text-4xl font-bold text-blue-600'>
                        Freelance Task Marketplace
                    </h1>
                </Fade>

                <Zoom>
                    <p className='text-lg text-gray-700 dark:text-gray-300'>
                        Find tasks, post projects, and earn money!
                    </p>
                </Zoom>

                <Slide direction="left">
                    <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition-all">
                        Explore Now
                    </button>
                </Slide>
            </div>

            {/* Other Components */}
            <Banner />
            <Footer />

        </div>
    );
};

export default Home;


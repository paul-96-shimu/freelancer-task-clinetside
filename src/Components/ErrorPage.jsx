import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4">
            {/* <img
        src={errorImage}
        alt="404 Not Found"
        className="max-w-xs md:max-w-md mb-6 animate-bounce"
      /> */}

            <img src="https://i.ibb.co/HTQ34xML/error-page.jpg" alt=""
                className="max-w-xs md:max-w-md mb-6 animate-bounce"
            />
            <h1 className="text-5xl font-extrabold text-red-500 mb-2">404</h1>
            <p className="text-xl text-gray-700 mb-4">
                Oops! The page you are looking for doesn’t exist.
            </p>
            <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;
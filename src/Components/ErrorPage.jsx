import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;
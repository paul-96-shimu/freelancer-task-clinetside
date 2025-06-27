import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.config';
import Swal from 'sweetalert2';

import { FcGoogle } from "react-icons/fc";
const Login = () => {

    const emailRef = useRef()
    const [error, setError] = useState(" ")

    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const handelLoginButton = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log("Logged in user:", user);
                toast.success("Login Successful 🎉");
                setTimeout(() => {

                    navigate("/");
                }, 1500);


            })
            .catch(error => {

                setError(error.message)
                toast.error("Failed to send reset email.");

            });
    }
    const provider = new GoogleAuthProvider();

    const handleGoogleSignInButton = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Google Sign In Successful 🎉',
                    showConfirmButton: false,
                    timer: 1500


                });

                setTimeout(() => {
                    navigate("/addtask");
                }, 1500);

            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Google Sign In Failed 😢',
                    text: error.message
                });
            });
    };


    const handleForgetPassword = () => {
        // console.log(emailRef.current.value);
        const email = emailRef.current.value

        setError('');
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email is sent! Please check your email");
            })
            .catch(error => {

                setError(error.message)
                toast.error("Failed to send reset email.");

            });

    }



    return (
        <div className="hero bg-base-200 min-h-screen  mt-12">




            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <ToastContainer />
                <form onSubmit={handelLoginButton} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <button onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                    </div>

                    {error && <p className='text-red-600 text-xs'>{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="flex justify-center mb-4">
                        <button onClick={handleGoogleSignInButton} className='flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                            <FcGoogle /> Continue With Google
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-400">
                        Register
                    </Link>
                </p>
            </div>

        </div>
    );
};

export default Login;


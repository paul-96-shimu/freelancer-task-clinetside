import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Providers/AuthContext';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.config';





const Register = () => {
    const { createUser, setUser, upDateUser } = useContext(AuthContext);

    const navigate = useNavigate(" ");
    const [showPassword, setShowPassword] = useState(false);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
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

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters long and include both uppercase and lowercase letters.");
            return;
        }

        console.log({ name, password, email, photo });

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("User created:", user);

                upDateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                    }).catch((error) => {
                        console.log(error)

                        setUser(user);
                    })



                    .catch((error) => {
                        const errorcode = error.code;
                        const errorMessage = error.message;
                        alert(errorcode, errorMessage)
                    })

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your account is created",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/addtask');
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen  mt-12 ">
            <div className=" card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body ">
                    <h1 className="text-5xl font-bold">SingUp now!</h1>

                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Photo URL</span></label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                            <span
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <label className="label text-xs text-gray-500 mt-4">
                            Password must have at least 6 characters, including <br /> uppercase and lowercase letters.
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>

                <div className="flex justify-center mb-4">
                    <button onClick={handleGoogleSignIn} className='flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                        <FcGoogle /> Continue With Google
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;



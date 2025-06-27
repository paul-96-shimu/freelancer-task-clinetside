import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';
import icon from '../assets/user.png'

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Logged out successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinkClass = 'text-white hover:text-yellow-300 font-semibold';

    return (
        // <nav className="bg-white shadow-md ">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex justify-between items-center h-16">
        //             {/* Logo */}
        //             <div className="text-xl font-bold text-blue-600">TaskZone</div>

        //             {/* Desktop Menu */}
        //             <ul className="hidden md:flex items-center space-x-6">
        //                 <NavLink to="/" className="text-gray-700 font-bold hover:text-blue-600 ">Home</NavLink>
        //                 <NavLink to="/addtask" className="text-gray-700 font-bold hover:text-blue-600">Add Task</NavLink>
        //                 <NavLink to="/browsertask" className="text-gray-700 font-bold hover:text-blue-600">Browse Tasks</NavLink>
        //                 <NavLink to={`/mypostedtasks/${user?.email}`} className="text-gray-700 font-bold hover:text-blue-600">My Posted Tasks</NavLink>




        //                 {user ? (
        //                     <div className="flex items-center gap-3 relative group">
        //                         <img
        //                             src={user.photoURL || icon}
        //                             alt="User Icon"
        //                             className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
        //                         />
        //                         {/* Tooltip style display name on hover */}
        //                         <div className="absolute left-0 top-10 bg-white shadow-md px-3 py-1 rounded text-sm text-gray-800 hidden group-hover:block z-10">
        //                             {user.displayName || 'No name'}
        //                         </div>
        //                         <button
        //                             onClick={handleLogOut}
        //                             className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        //                         >
        //                             SignOut
        //                         </button>
        //                     </div>
        //                 ) : (
        //                     <>
        //                         <NavLink
        //                             to="/login"
        //                             className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        //                         >
        //                             Login
        //                         </NavLink>
        //                         <NavLink
        //                             to="/register"
        //                             className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        //                         >
        //                             SignUp
        //                         </NavLink>
        //                     </>
        //                 )}


        //             </ul>

        //             {/* Mobile Menu Button */}
        //             <div className="md:hidden">
        //                 <button
        //                     onClick={() => setMenuOpen(!menuOpen)}
        //                     className="text-gray-700 focus:outline-none"
        //                 >
        //                     <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                         {menuOpen ? (
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        //                                 d="M6 18L18 6M6 6l12 12" />
        //                         ) : (
        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        //                                 d="M4 6h16M4 12h16M4 18h16" />
        //                         )}
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Mobile Menu */}
        //     {menuOpen && (
        //         <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
        //             <NavLink to="/" className="block text-gray-700 hover:text-blue-600">Home</NavLink>
        //             <NavLink to="/addtask" className="block text-gray-700 hover:text-blue-600">Add Task</NavLink>
        //             <NavLink to="/browsertask" className="block text-gray-700 hover:text-blue-600">Browse Tasks</NavLink>
        //             <NavLink to={`/mypostedtasks/${user?.email}`} className="block text-gray-700 hover:text-blue-600">My Posted Tasks</NavLink>

        //             {user ? (
        //                 <div className="flex flex-col items-start space-y-2">
        //                     <div className="flex items-center gap-3">
        //                         <img
        //                             src={icon}
        //                             alt="User Icon"
        //                             className="w-8 h-8 rounded-full border border-gray-300"
        //                         />
        //                         <span className="text-gray-700">{user.email}</span>
        //                     </div>
        //                     <button
        //                         onClick={handleLogOut}
        //                         className="w-full text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        //                     >
        //                         Logout
        //                     </button>
        //                 </div>
        //             ) : (
        //                 <>
        //                     <NavLink to="/login" className="block text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Login</NavLink>
        //                     <NavLink to="/register" className="block text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">SignUp</NavLink>
        //                 </>
        //             )}
        //         </div>
        //     )}
        // </nav>


        <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">
                    Task<span className="text-yellow-300">Zone</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink>
                    <NavLink to="/contactus" className={navLinkClass}>Contact Us</NavLink>
                    <NavLink to="/addtask" className={navLinkClass}>Add Task</NavLink>
                    <NavLink to="/browsertask" className={navLinkClass}>Browse Tasks</NavLink>
                    <NavLink to={`/mypostedtasks/${user?.email}`} className={navLinkClass}>My Posted Tasks</NavLink>

                    {user ? (
                        <div className="flex items-center gap-3 relative group">
                            <img
                                src={user.photoURL || icon}
                                alt="User Icon"
                                className="w-8 h-8 rounded-full border border-white cursor-pointer"
                            />
                            <div className="absolute left-0 top-10 bg-white text-black shadow-md px-3 py-1 rounded text-sm hidden group-hover:block z-10">
                                {user.displayName || 'No name'}
                            </div>
                            <button
                                onClick={handleLogOut}
                                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 font-medium"
                            >
                                SignOut
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 font-medium">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 font-medium">
                                SignUp
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-blue-600 px-4 pb-4 space-y-2 text-white">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/browsertask" className={navLinkClass}>All Items</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    <NavLink to="/support" className={navLinkClass}>Support</NavLink>

                    {user ? (
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center gap-3">
                                <img
                                    src={user.photoURL || icon}
                                    alt="User Icon"
                                    className="w-8 h-8 rounded-full border border-white"
                                />
                                <span>{user.email}</span>
                            </div>
                            <button
                                onClick={handleLogOut}
                                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 font-medium">Login</NavLink>
                            <NavLink to="/register" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 font-medium">SignUp</NavLink>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Header;


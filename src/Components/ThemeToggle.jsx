import React, { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggle = () => {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    const darkModeHandler = () => {
        setDark(!dark);
    };

    return (
        <button onClick={darkModeHandler} className="text-2xl">
            {dark ? <IoSunny /> : <IoMoon />}
        </button>
    );
};

export default ThemeToggle;

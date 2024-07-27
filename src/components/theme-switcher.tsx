// components/ThemeSwitcher.jsx
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.theme) {
            setTheme(localStorage.theme);
            document.documentElement.classList.add(localStorage.theme);
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button onClick={toggleTheme} className="px-2 rounded bg-primary text-white">Toogle</button>
    );
};

export default ThemeSwitcher;

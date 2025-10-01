import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Logo />
                <nav className="hidden items-center gap-8 md:flex">
                    <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>Inici</NavLink>
                    <NavLink to="/selectividad" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>Classes</NavLink>
                    <NavLink to="/resources" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>Material</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}>Contacte</NavLink>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">Accedir</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

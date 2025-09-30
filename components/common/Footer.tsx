import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                        </svg>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Acadèmia Impuls</h2>
                    </div>
                     <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center md:justify-start">
                        <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" to="/privacy-policy">Política de Privacitat</Link>
                        <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" to="#">Termes i Condicions</Link>
                        <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" to="/contact">Contacte</Link>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white">Segueix-nos</p>
                        <div className="mt-4 flex space-x-4 text-gray-600 dark:text-gray-400">
                        {/* Social media icons can be added here */}
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">© 2024 Acadèmia Impuls. Tots els drets reservats.</p>
            </div>
        </footer>
    );
};

export default Footer;

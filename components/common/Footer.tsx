import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div>
                        <p className="font-bold text-gray-900 dark:text-white">Segueix-nos</p>
                        <div className="mt-4 flex space-x-4 text-gray-600 dark:text-gray-400">
                            <a href="https://www.instagram.com/nom_del_compte" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="/academia-impuls/instagram-logo.png" 
                                    alt="Instagram logo" 
                                    className="h-8 w-8 object-contain" 
                                />
                            </a>
                            <a href="https://www.youtube.com/channel/ID_del_canal" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src="/academia-impuls/youtube-logo.png" 
                                    alt="Youtube logo" 
                                    className="h-8 w-8 object-contain" 
                                />
                            </a>
                        </div>
                    </div>
                     <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center md:justify-start">
                        <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" to="/privacy-policy">Política de Privacitat</Link>
                        <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" to="#">Termes i Condicions</Link>
                        <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" to="/contact">Contacte</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <img 
                            src="/academia-impuls/logo.png" 
                            alt="Acadèmia Impuls Logo" 
                            className="h-16 w-16 object-contain" 
                        />
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Impuls Acadèmia</h2>
                    </div>
                </div>
                <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">© 2024 Acadèmia Impuls. Tots els drets reservats.</p>
            </div>
        </footer>
    );
};

export default Footer;

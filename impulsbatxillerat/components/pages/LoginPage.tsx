import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Inicia sessió al teu compte</h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            O ets nou?
                            <Link to="#" className="font-medium text-primary hover:text-primary/90 ml-2">
                                Crea un compte gratuït
                            </Link>
                        </p>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm space-y-6 border border-gray-200 dark:border-gray-700">
                        <form action="#" className="space-y-6" method="POST">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Correu electrònic</label>
                                <div className="mt-1">
                                    <input autoComplete="email" className="block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white" id="email" name="email" placeholder="elteucorreu@exemple.com" required type="email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Contrasenya</label>
                                <div className="mt-1">
                                    <input autoComplete="current-password" className="block w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white" id="password" name="password" placeholder="********" required type="password" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-gray-100 dark:bg-gray-700" id="remember-me" name="remember-me" type="checkbox" />
                                    <label className="ml-2 block text-sm text-gray-900 dark:text-gray-300" htmlFor="remember-me">Recorda'm</label>
                                </div>
                                <div className="text-sm">
                                    <a className="font-medium text-primary hover:text-primary/90" href="#">Has oblidat la contrasenya?</a>
                                </div>
                            </div>
                            <div>
                                <Link to="/dashboard" className="flex w-full justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                                    Inicia sessió
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;
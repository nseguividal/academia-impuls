import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sol·licita les teves classes</h2>
                            <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">Omple el formulari i ens posarem en contacte amb tu el més aviat possible.</p>
                        </div>
                        <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg border border-subtle-light dark:border-subtle-dark">
                            <form action="#" className="space-y-6" method="POST">
                                <div>
                                    <label className="sr-only" htmlFor="name">Nom</label>
                                    <input className="w-full bg-background-light dark:bg-background-dark border-subtle-light dark:border-subtle-dark rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" id="name" name="name" placeholder="Nom" type="text" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="email">Correu electrònic</label>
                                    <input className="w-full bg-background-light dark:bg-background-dark border-subtle-light dark:border-subtle-dark rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" id="email" name="email" placeholder="Correu electrònic" type="email" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="phone">Telèfon</label>
                                    <input className="w-full bg-background-light dark:bg-background-dark border-subtle-light dark:border-subtle-dark rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" id="phone" name="phone" placeholder="Telèfon" type="tel" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="message">Missatge</label>
                                    <textarea className="w-full bg-background-light dark:bg-background-dark border-subtle-light dark:border-subtle-dark rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" id="message" name="message" placeholder="Missatge" rows={4}></textarea>
                                </div>
                                <div>
                                    <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all duration-150 ease-in-out" type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-center text-sm text-muted-light dark:text-muted-dark">
                                O truca'ns directament al <a className="font-medium text-primary hover:underline" href="tel:654321987">654 321 987</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;

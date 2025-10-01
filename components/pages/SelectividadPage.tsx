import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const testimonials = [
    { name: "Sofia Garcia", date: "15 de juny de 2023", avatar: "https://picsum.photos/seed/sofia/48/48", rating: 5, text: "Gràcies a Acadèmia Impuls, vaig poder superar la Selectivitat amb una nota excel·lent. El material era molt complet i els professors sempre van estar disposats a ajudar." },
    { name: "Carles López", date: "20 de juny de 2023", avatar: "https://picsum.photos/seed/carles/48/48", rating: 4, text: "El curs em va ajudar a organitzar el meu estudi i a enfocar-me en els temes més importants. Encara que va ser intens, va valer la pena." },
    { name: "Anna Martínez", date: "25 de juny de 2023", avatar: "https://picsum.photos/seed/anna/48/48", rating: 5, text: "Recomano Acadèmia Impuls a tots els estudiants que es preparin per a la Selectivitat. La qualitat de les classes i el suport rebut són immillorables." }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="mt-4 flex text-primary">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={`material-symbols-outlined text-lg ${i < rating ? 'text-primary' : 'text-gray-300 dark:text-gray-600'}`} style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            ))}
        </div>
    );
};

const SelectividadPage: React.FC = () => {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex-1">
                <section className="relative">
                    <div className="absolute inset-0 bg-gray-900">
                        <img alt="Estudiants estudiant" className="h-full w-full object-cover opacity-50" src="https://picsum.photos/seed/students/1920/1080" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10"></div>
                    </div>
                    <div className="relative mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 sm:py-48 lg:px-8">
                        <h1 className="text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl">Prepara't per a la Selectivitat amb els Millors</h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
                            El nostre curs intensiu et proporciona les eines i el coneixement necessari per superar la prova amb èxit. Material personalitzat, classes dinàmiques i seguiment individualitzat.
                        </p>
                        <div className="mt-10">
                            <Link to="/contact" className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105">Inscriu-te Ara</Link>
                        </div>
                    </div>
                </section>
                <section className="py-16 sm:py-24">
                    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Temari Complet i Actualitzat</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Cobrim totes les matèries clau de la Selectivitat, incloent-hi Llengua i Literatura, Matemàtiques, Història, Anglès i Ciències. El nostre temari s'actualitza constantment per reflectir els canvis en l'examen.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Metodologia Innovadora</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Utilitzem una combinació de classes en directe, exercicis pràctics, simulacres d'examen i tutories personalitzades. La nostra plataforma interactiva facilita l'aprenentatge i la resolució de dubtes.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dates i Horaris</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    El curs intensiu de Selectivitat s'imparteix de dilluns a divendres, de 16:00 a 20:00, des de l'1 de març fins al 30 de maig. Consulta el nostre calendari detallat.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background-light py-16 dark:bg-background-dark sm:py-24">
                    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Testimonis d'Èxit</h2>
                        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800/50">
                                    <div className="flex items-center gap-4">
                                        <img alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.date}</p>
                                        </div>
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                    <p className="mt-4 text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <Link to="/contact" className="rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105">Inscriu-te Ara</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SelectividadPage;

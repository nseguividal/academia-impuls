import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const materialsData = [
    {
        subject: 'Matemàtiques',
        topics: [
            { name: 'Àlgebra', description: "Vídeos, PDFs, exercicis i simulacres d'examen", image: 'https://picsum.photos/seed/algebra/160/96' },
            { name: 'Geometria', description: "Vídeos, PDFs, exercicis i simulacres d'examen", image: 'https://picsum.photos/seed/geometry/160/96' },
        ],
    },
    {
        subject: 'Física',
        topics: [
            { name: 'Mecànica', description: "Vídeos, PDFs, exercicis i simulacres d'examen", image: 'https://picsum.photos/seed/mechanics/160/96' },
            { name: 'Termodinàmica', description: "Vídeos, PDFs, exercicis i simulacres d'examen", image: 'https://picsum.photos/seed/thermo/160/96' },
        ],
    },
    {
        subject: 'Química',
        topics: [
            { name: 'Química Orgànica', description: "Vídeos, PDFs, exercicis i simulacres d'examen", image: 'https://picsum.photos/seed/organic/160/96' },
            { name: 'Química Inorgànica', description: "Vídeos, PDFs, exercicis i simulacres d'examen", image: 'https://picsum.photos/seed/inorganic/160/96' },
        ],
    },
];


const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Assignatures');

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header />
            <div className="flex flex-grow">
                <aside className="w-72 bg-background-light dark:bg-background-dark p-6 flex-col justify-between border-r border-accent-light dark:border-accent-dark hidden sm:flex">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <img alt="Avatar de Sofia Rodriguez" className="size-12 rounded-full" src="https://picsum.photos/seed/sofia/48/48" />
                            <div>
                                <h1 className="font-bold text-foreground-light dark:text-foreground-dark">Sofia Rodriguez</h1>
                                <p className="text-sm text-muted-light dark:text-muted-dark">Estudiant</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-2">
                            <Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-accent-light dark:hover:bg-accent-dark" to="/dashboard">
                                <span className="material-symbols-outlined">home</span>
                                <span className="font-medium">Inici</span>
                            </Link>
                            <Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-accent-light dark:hover:bg-accent-dark" to="#">
                                <span className="material-symbols-outlined">smart_display</span>
                                <span className="font-medium">Classes</span>
                            </Link>
                            <Link className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-white" to="/dashboard">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>book</span>
                                <span className="font-medium">Materials</span>
                            </Link>
                            <Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-accent-light dark:hover:bg-accent-dark" to="#">
                                <span className="material-symbols-outlined">calendar_today</span>
                                <span className="font-medium">Calendari</span>
                            </Link>
                            <Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-accent-light dark:hover:bg-accent-dark" to="#">
                                <span className="material-symbols-outlined">chat_bubble</span>
                                <span className="font-medium">Missatges</span>
                            </Link>
                        </nav>
                    </div>
                    <Link className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground-light dark:text-foreground-dark hover:bg-accent-light dark:hover:bg-accent-dark" to="/">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-medium">Tancar Sessió</span>
                    </Link>
                </aside>
                <main className="flex-1 p-8">
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground-light dark:text-foreground-dark">Els Meus Materials</h1>
                    </header>
                    <div className="border-b border-accent-light dark:border-accent-dark mb-6">
                        <nav className="flex gap-8 -mb-px">
                            {['Tots', 'Assignatures', 'Temes'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-3 px-1 font-semibold ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-light dark:text-muted-dark hover:text-foreground-light dark:hover:text-foreground-dark'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="space-y-10">
                        {materialsData.map(material => (
                            <section key={material.subject}>
                                <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">{material.subject}</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {material.topics.map(topic => (
                                        <div key={topic.name} className="bg-card-light dark:bg-accent-dark rounded-lg p-4 flex gap-6 items-center">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg text-foreground-light dark:text-foreground-dark">{topic.name}</h3>
                                                <p className="text-sm text-muted-light dark:text-muted-dark">{topic.description}</p>
                                            </div>
                                            <img alt={`${topic.name} thumbnail`} className="w-40 h-24 object-cover rounded-lg" src={topic.image} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const resourcesData = [
    { id: 1, title: "Apunts de Matemàtiques - Àlgebra", description: "Resum complet sobre àlgebra per a estudiants de 4t d'ESO.", imageUrl: 'https://picsum.photos/seed/notes1/300/200', theme: 'Matemàtiques', type: 'Apunts', level: 'ESO' },
    { id: 2, title: "Exercicis de Física - Mecànica", description: "Col·lecció d'exercicis resolts sobre mecànica per a 1r de Batxillerat.", imageUrl: 'https://picsum.photos/seed/notes2/300/200', theme: 'Física', type: 'Exercicis', level: 'Batxillerat' },
    { id: 3, title: "Exàmens de Química - Enllaç Químic", description: "Models d'exàmens sobre enllaç químic per a 2n de Batxillerat.", imageUrl: 'https://picsum.photos/seed/notes3/300/200', theme: 'Química', type: 'Exàmens', level: 'Batxillerat' },
    { id: 4, title: "Video de Biologia - Cèl·lula", description: "Video explicatiu sobre les parts de la cèl·lula.", imageUrl: 'https://picsum.photos/seed/notes4/300/200', theme: 'Biologia', type: 'Vídeos', level: 'ESO' },
    { id: 5, title: "Resum d'Història - Edat Mitjana", description: "Apunts clau sobre l'Edat Mitjana.", imageUrl: 'https://picsum.photos/seed/notes5/300/200', theme: 'Història', type: 'Apunts', level: 'ESO' },
];

const FilterButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
    <button onClick={onClick} className={`rounded-full px-3 py-1 text-sm font-medium ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
        {label}
    </button>
);

const ResourcesPage: React.FC = () => {
    const [activeLevel, setActiveLevel] = useState('Tots');
    const [activeTheme, setActiveTheme] = useState<string | null>('Matemàtiques');
    const [activeType, setActiveType] = useState<string | null>('Exercicis');

    const filteredResources = resourcesData.filter(r => {
        const levelMatch = activeLevel === 'Tots' || r.level === activeLevel;
        const themeMatch = !activeTheme || r.theme === activeTheme;
        const typeMatch = !activeType || r.type === activeType;
        return levelMatch && themeMatch && typeMatch;
    });

    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-grow justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Recursos Educatius</h1>
                            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">Troba material d'estudi per a ESO i Batxillerat. Filtra per curs, tema o tipus de recurs.</p>
                            <div className="relative mt-4 w-full max-w-md">
                                <input className="form-input w-full rounded-lg border-slate-300 bg-white py-3 pl-4 pr-10 text-base shadow-sm transition focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500" placeholder="Cercar recursos..." />
                                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">search</span>
                            </div>
                        </div>
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800">
                                <nav aria-label="Tabs" className="-mb-px flex space-x-8 px-4">
                                    {['Tots', 'ESO', 'Batxillerat', 'Altres'].map(level => (
                                        <button key={level} onClick={() => setActiveLevel(level)} className={`flex shrink-0 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium ${activeLevel === level ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-300'}`}>
                                            {level}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                            <aside className="space-y-6 md:col-span-1">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Temes</h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {['Matemàtiques', 'Física', 'Química', 'Biologia', 'Història'].map(theme => (
                                            <FilterButton key={theme} label={theme} isActive={activeTheme === theme} onClick={() => setActiveTheme(t => t === theme ? null : theme)} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tipus de Recursos</h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {['Apunts', 'Exercicis', 'Exàmens', 'Vídeos'].map(type => (
                                            <FilterButton key={type} label={type} isActive={activeType === type} onClick={() => setActiveType(t => t === type ? null : type)} />
                                        ))}
                                    </div>
                                </div>
                            </aside>
                            <div className="space-y-6 md:col-span-3">
                                <div className="grid grid-cols-1 gap-6">
                                    {filteredResources.map(resource => (
                                        <div key={resource.id} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:bg-slate-900 sm:flex-row">
                                            <img className="w-full h-48 sm:h-auto object-cover sm:w-1/3" src={resource.imageUrl} alt={resource.title} />
                                            <div className="flex flex-1 flex-col justify-between p-6">
                                                <div>
                                                    <p className="text-lg font-bold text-slate-900 dark:text-white">{resource.title}</p>
                                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{resource.description}</p>
                                                </div>
                                                <a className="mt-4 inline-block text-sm font-semibold text-primary hover:underline" href="#">Veure recurs →</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 flex items-center justify-center">
                                     {/* Pagination component would go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ResourcesPage;

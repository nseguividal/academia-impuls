import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">Impulsa el teu aprenentatge amb classes personalitzades</h1>
                <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
                  Àmplia experiència impartint classes a Batxillerat. Material adaptat a les teves necessitats i seguiment individualitzat per assolir els teus objectius acadèmics.
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105">Sol·licitar classe</Link>
                </div>
              </div>
              <div className="order-1 h-80 w-full rounded-xl bg-cover bg-center shadow-2xl lg:order-2 lg:h-full" style={{backgroundImage: `url("https://picsum.photos/seed/teacher/800/600")`}}></div>
            </div>
          </div>
        </section>
        <section className="bg-background-light py-16 dark:bg-background-dark sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Sobre mi</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Sóc la Núria, una professora apassionada per l'ensenyament amb molts anys d'experiència impartint classes a alumnes d'ESO i Batxillerat. El meu objectiu és ajudar-te a comprendre les matèries, superar les teves dificultats i assolir el teu màxim potencial. Crec en un enfocament personalitzat, adaptant el material i les classes al teu ritme i estil d'aprenentatge.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">La meva proposta de valor</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Classes individuals o en grups reduïts, adaptades al teu nivell i objectius. Material didàctic exclusiu i seguiment continu per garantir el teu progrés.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl"> school </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Material personalitzat</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Material adaptat a les teves necessitats i nivell, amb exercicis i explicacions clares.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl"> edit </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Enfocament individualitzat</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Classes enfocades a les teves dificultats i ritme d'aprenentatge, amb atenció individualitzada.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl"> groups </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Seguiment continu</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Seguiment del teu progrés, amb feedback constant i adaptació del pla d'estudi.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl"> play_circle </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Vídeos explicatius</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Accés a vídeos de cada tema per a una millor comprensió visual dels conceptes.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary/5 py-16 dark:bg-primary/10 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Material gratuït</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Accedeix a una selecció de material didàctic gratuït per complementar els teus estudis. Exercicis, resums i recursos addicionals per ajudar-te a comprendre les matèries.</p>
              <div className="mt-8">
                <Link to="/resources" className="rounded-lg border border-primary bg-transparent px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-white">Veure material gratuït</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Sol·licita una classe</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Si vols millorar els teus resultats acadèmics i assolir els teus objectius, no dubtis a contactar-me. Completa el formulari i et respondré al més aviat possible.</p>
              </div>
              <form className="mt-10 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">Nom</label>
                  <div className="mt-1">
                    <input className="block w-full rounded-lg border-slate-300 bg-slate-100 p-3 shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400" id="name" name="name" placeholder="El teu nom" type="text"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email</label>
                  <div className="mt-1">
                    <input className="block w-full rounded-lg border-slate-300 bg-slate-100 p-3 shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400" id="email" name="email" placeholder="El teu email" type="email"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">Missatge</label>
                  <div className="mt-1">
                    <textarea className="block w-full rounded-lg border-slate-300 bg-slate-100 p-3 shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400" id="message" name="message" placeholder="El teu missatge" rows={4}></textarea>
                  </div>
                </div>
                <div>
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105" type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

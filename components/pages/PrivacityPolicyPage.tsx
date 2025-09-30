import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Política de Privacitat</h1>
            <div className="mt-8 prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
              <p>
                Aquesta política de privacitat estableix com Acadèmia Impuls utilitza i protegeix qualsevol informació que ens proporcioneu quan utilitzeu aquest lloc web.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Quina informació recopilem</h2>
              <p>
                Podem recopilar la següent informació:
              </p>
              <ul>
                <li>Nom i cognoms</li>
                <li>Informació de contacte, inclosa l'adreça de correu electrònic</li>
                <li>Informació demogràfica com el codi postal, preferències i interessos</li>
                <li>Altra informació rellevant per a enquestes de clients i/o ofertes</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Què fem amb la informació que recopilem</h2>
              <p>
                Necessitem aquesta informació per entendre les vostres necessitats i oferir-vos un millor servei, i en particular per les següents raons:
              </p>
              <ul>
                <li>Manteniment de registres interns.</li>
                <li>Podem utilitzar la informació per millorar els nostres productes i serveis.</li>
                <li>Podem enviar periòdicament correus electrònics promocionals sobre nous productes, ofertes especials o altra informació que creiem que pot ser del vostre interès utilitzant l'adreça de correu electrònic que heu proporcionat.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Seguretat</h2>
              <p>
                Estem compromesos a garantir que la vostra informació estigui segura. Per tal de prevenir l'accés o la divulgació no autoritzats, hem implementat procediments físics, electrònics i de gestió adequats per salvaguardar i protegir la informació que recopilem en línia.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Enllaços a altres llocs web</h2>
              <p>
                El nostre lloc web pot contenir enllaços a altres llocs web d'interès. No obstant això, un cop hàgiu utilitzat aquests enllaços per sortir del nostre lloc, heu de tenir en compte que no tenim cap control sobre aquest altre lloc web. Per tant, no podem ser responsables de la protecció i privacitat de qualsevol informació que proporcioneu mentre visiteu aquests llocs i aquests llocs no es regeixen per aquesta declaració de privacitat. Heu de tenir precaució i consultar la declaració de privacitat aplicable al lloc web en qüestió.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
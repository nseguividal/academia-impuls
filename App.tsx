
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import ResourcesPage from './components/pages/ResourcesPage';
import SelectividadPage from './components/pages/SelectividadPage';
import ContactPage from './components/pages/ContactPage';
import PrivacityPolicyPage from './components/pages/PrivacityPolicyPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/selectividad" element={<SelectividadPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacityPolicyPage />} /> 
      </Routes>
    </HashRouter>
  );
};

export default App;

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DataWall from './components/DataWall';
import MethodologyFramework from './components/MethodologyFramework';
import ServiceMatrix from './components/ServiceMatrix';
import ContactPortal from './components/ContactPortal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DataWall />
        <MethodologyFramework />
        <ServiceMatrix />
        <ContactPortal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
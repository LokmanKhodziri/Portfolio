import React from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

/**
 * Main App Component
 * 
 * This is the root component of the application that:
 * 1. Renders the main layout structure
 * 2. Integrates all major sections of the portfolio
 * 3. Wraps everything in the theme provider
 * 
 * @returns {JSX.Element} The main application layout
 */
const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App; 
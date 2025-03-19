import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-white dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Amit Godara. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
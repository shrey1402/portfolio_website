import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Apply dark mode class on initial load
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              Portfolio
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.button
                key={darkMode ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun className="text-white" /> : <Moon />}
              </motion.button>
            </AnimatePresence>
          </div>
        </nav>

        <Hero />
        <Technologies />
        <Services />
        <Reviews />
        <Contact />

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
            <p>© 2024 Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
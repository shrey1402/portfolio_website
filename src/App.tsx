import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Mail, MessageCircle, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Remove dark mode class on initial load
    document.documentElement.classList.remove('dark');
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
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                  alt="Profile"
                  className="w-12 h-12 rounded-full cursor-pointer border-2 border-blue-500 hover:border-blue-600 transition-colors"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
                    >
                      <a href="#contact" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact
                      </a>
                      <a href="mailto:shreyk1402@gmail.com" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                      <a href="skype:your.skype.id?chat" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Skype
                      </a>
                      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">Shrey's Portfolio</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              </div>
            </motion.div>
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
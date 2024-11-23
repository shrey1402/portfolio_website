import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, ShoppingBag, Globe, BarChart3, Smartphone, Star, ChevronDown } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance.',
    gradient: 'from-cyan-500 to-blue-500',
    examples: [
      'Food delivery app',
      'Fitness tracking platform',
      'Social media app'
    ]
  },
  {
    icon: <Code2 className="w-12 h-12" />,
    title: 'Web Applications',
    description: 'Full-stack web applications with modern technologies and scalable architecture.',
    gradient: 'from-blue-500 to-indigo-500',
    examples: [
      'Project management system',
      'Booking & reservation platform',
      'Customer portal'
    ]
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: 'E-commerce Development',
    description: 'Custom Shopify stores with unique features and optimized checkout flow.',
    gradient: 'from-green-500 to-teal-500',
    examples: [
      'Fashion boutique with AR try-on feature',
      'Multi-vendor marketplace platform',
      'Custom product configurator'
    ]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'WordPress Solutions',
    description: 'Custom WordPress websites with powerful features and optimized performance.',
    gradient: 'from-orange-500 to-red-500',
    examples: [
      'Real estate listing platform',
      'News portal with membership',
      'Restaurant chain website'
    ]
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that drive engagement and conversions.',
    gradient: 'from-purple-500 to-pink-500',
    examples: [
      'SaaS dashboard redesign',
      'Mobile banking app interface',
      'E-learning platform UX'
    ]
  },
];

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mr-4 text-yellow-400"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Services</h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <button
                onClick={() => handleDropdownClick(index)}
                className="w-full p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg transform transition-all duration-300 flex items-center justify-between hover:shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${service.gradient} rounded-lg text-white`}>
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{service.description}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openDropdown === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 mt-2 bg-white dark:bg-gray-700 rounded-xl shadow-inner">
                      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-4">Recent Projects:</h4>
                      <div className="space-y-3">
                        {service.examples.map((example, exampleIndex) => (
                          <motion.div
                            key={exampleIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: exampleIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                            <span className="text-gray-600 dark:text-gray-300">{example}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
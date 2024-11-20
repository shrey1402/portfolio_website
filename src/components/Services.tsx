import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, ShoppingBag, Globe, BarChart3, Smartphone } from 'lucide-react';

const services = [
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
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance.',
    gradient: 'from-cyan-500 to-blue-500',
    examples: [
      'Food delivery app',
      'Fitness tracking platform',
      'Social media app'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-300">Delivering exceptional digital experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
              <div className="relative p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className={`inline-block p-4 bg-gradient-to-r ${service.gradient} rounded-lg text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">Recent Projects:</p>
                  {service.examples.map((example, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
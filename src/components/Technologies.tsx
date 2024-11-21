import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Smartphone, Star, ChevronDown } from 'lucide-react';

const technologies = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'PHP']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'CMS',
    skills: ['WordPress', 'Shopify', 'Webflow', 'Drupal']
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Illustrator']
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile',
    skills: ['React Native', 'Flutter', 'iOS', 'Android']
  }
];

const Technologies = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Technologies</h2>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="ml-4 text-yellow-400"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
        </motion.div>

        <div className="space-y-4">
          {technologies.map((tech, index) => (
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
                  <div className="text-blue-600 dark:text-blue-400">{tech.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tech.title}</h3>
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
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            className="px-4 py-2 text-sm bg-blue-50 dark:bg-gray-600 text-blue-600 dark:text-blue-300 rounded-full shadow-sm hover:shadow-md transition-shadow"
                          >
                            {skill}
                          </motion.span>
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

export default Technologies;
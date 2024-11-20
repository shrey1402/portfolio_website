import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Technologies = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technologies & Skills</h2>
          <p className="text-gray-600 dark:text-gray-300">Expertise across the full development stack</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg transform transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{tech.title}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
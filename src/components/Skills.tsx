import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Code2, Server, Database, Layers, X } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skillCategories = {
    frontend: {
      icon: <Code2 size={24} />,
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 95 }
      ]
    },
    backend: {
      icon: <Server size={24} />,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    },
    database: {
      icon: <Database size={24} />,
      title: "Database",
      skills: [
        {name: "MongoDB", level: 80 },
        { name: "Firebase", level: 75 }
      ]
    },
    frameworks: {
      icon: <Layers size={24} />,
      title: "Frameworks",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "Express.js", level: 85 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <Tilt
              key={key}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className={`mr-3 ${selectedCategory === key ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                      {category.icon}
                    </span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
                <p className={`text-sm ${
                  selectedCategory === key ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  Click to view detailed skills
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {skillCategories[selectedCategory].title} Skills
                </h3>
                <div className="space-y-4">
                  {skillCategories[selectedCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
      color: "blue"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
      color: "green"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      skills: ["MongoDB", "Git", "GitHub", "Postman", "VS Code"],
      color: "purple"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      skills: ["Responsive Design", "Framer Motion", "User Experience", "Wireframing"],
      color: "pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} transition-all duration-300`}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

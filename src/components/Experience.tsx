import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Your Company",
      location: "Remote",
      period: "2023 - Present",
      description: "Building scalable web applications using React, Node.js, and MongoDB. Led the development of multiple client projects resulting in 40% performance improvements.",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      achievements: [
        "Developed RESTful APIs serving 10K+ daily requests",
        "Implemented real-time features using WebSockets",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Tech Startup",
      location: "Bharatpur, Rajasthan",
      period: "2022 - 2023",
      description: "Worked on frontend development and contributed to the company's main product. Gained experience in agile methodologies and collaborative development.",
      technologies: ["JavaScript", "React", "CSS3", "Git"],
      achievements: [
        "Built responsive UI components used across 5+ projects",
        "Reduced page load times by 30% through optimization",
        "Participated in daily standups and sprint planning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions to various projects and teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-gray-50 dark:border-gray-900"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

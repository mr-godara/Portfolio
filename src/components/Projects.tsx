import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const projects = [
    {
      title: "Trendy Fashion",
      description: "Discover the full-stack fashion ecommerce platform that blends design, functionality, and payment processing for a shopping experience.",
      image: "https://res.cloudinary.com/du0tarfxr/image/upload/v1742476174/Trendy_Fashion_gzmydd.png",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Typescript", "HTML5", "Tailwind CSS"],
      github: "https://github.com/mr-godara/Trendy-Fashion",
      live: "https://trendy-fashion-dun.vercel.app/"
    },
    {
      title: "Contest Tracker",
      description: "Contest Tracker aggregates coding contests, provides YouTube solutions, and allows bookmarking for easy access!",
      image: "https://res.cloudinary.com/du0tarfxr/image/upload/v1742476159/Contest_Tracker_aspxdb.png",
      tech: ["Typescript", "HTML5", "Tailwind CSS", "API Integration"],
      github: "https://github.com/mr-godara/Contest_Tracker",
      live: "https://contest-tracker-dusky.vercel.app/"
    },
    {
      title: "Echoprep",
      description: "EchoPrep is a full-stack mock-interview platform that delivers real-time video sessions, role-based access, and integrated feedback tools to help candidates practice and excel!",
      image: "https://res.cloudinary.com/du0tarfxr/image/upload/v1750833371/Screenshot_2025-06-25_111215_g0vcuk.png",
      tech: ["React.js", "Typescript", "HTML5", "Tailwind CSS","Express.js","MongoDB","GeminiAI"],
      github: "https://github.com/mr-godara/EchoPrep",
      live: "https://echo-prep-nine.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Built a modern portfolio website to showcase my projects, skills, and experience with a responsive and interactive design!",
      image: "https://res.cloudinary.com/du0tarfxr/image/upload/v1742477299/Portfolio_dzmwbb.png",
      tech: ["React.js", "Typescript", "HTML5", "Tailwind CSS"],
      github: "https://github.com/mr-godara/Portfolio",
      live: "https://portfolio-mu-lyart-45.vercel.app/"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Here are some of my recent projects that showcase my skills and expertise
            in different technologies and domains.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={2000}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        <motion.div 
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={20} className="mr-2" />
              Code
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={20} className="mr-2" />
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, Download, Mail, Github, Linkedin } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../Profile.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Full Stack Developer & UI/UX Enthusiast";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized for best user experience"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Using cutting-edge technologies"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={containerVariants}>
            <motion.div
              variants={textVariants}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                ✨ Available for hire
              </span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amit Godara
              </span>
            </motion.h1>

            <motion.h2
              variants={textVariants}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300 min-h-[2.5rem]"
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-0.5 h-8 bg-blue-600 dark:bg-blue-400 ml-1"
              />
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              I craft beautiful, user-friendly applications that solve real-world problems. 
              With expertise in modern web technologies, I bring ideas to life.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center group"
              >
                View Projects
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all flex items-center group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </motion.button>

              <motion.a
                href="/Amit_Godara_Resume.pdf"
                download="Amit_Godara_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
            >
              <div className="relative">
                {/* Gradient ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50"></div>
                
                {/* Profile container */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                >
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={profileImage}
                    alt="Amit Godara"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    whileHover={{ opacity: 0.5 }}
                  ></motion.div>
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl"
                >
                  <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl"
                >
                  <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

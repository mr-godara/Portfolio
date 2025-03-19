import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Rocket, Brain, X } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  type ModalType = 'projects' | 'contact' | null;
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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

  const modalContent = {
    projects: {
      title: "Featured Projects",
      content: (
        <div className="grid gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Trendy Fashion</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Discover the full-stack fashion ecommerce platform that blends design, functionality, and payment processing for a shopping experience.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Contest Tracker</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Contest Tracker aggregates coding contests, provides YouTube solutions, and allows bookmarking for easy access!</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Portfolio website</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400"> Built a modern portfolio website to showcase my projects, skills, and experience with a responsive and interactive design!</p>
          </div>
        </div>
      )
    },
    contact: {
      title: "Contact Details",
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:Amitkumargodara8385@gmail.com" className="text-blue-600 dark:text-blue-400">Amitkumargodara8385@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+917665855931" className="text-blue-600 dark:text-blue-400">+917665855931</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600 dark:text-gray-400">Bharatpur, Rajasthan (India)</p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
          <motion.div variants={containerVariants}>
            <motion.div
              variants={textVariants}
              className="mb-6 inline-block"
            >
              <span className="text-sm font-semibold px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                Available for hire
              </span>
            </motion.div>
            <motion.h1 
              variants={textVariants}
              className="text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Hi, I'm{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Amit Godara
              </motion.span>
            </motion.h1>
            <motion.h2 
              variants={textVariants}
              className="text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              I craft beautiful, user-friendly applications that solve real-world problems.
              With expertise in modern web technologies, I bring ideas to life through code.
            </motion.p>
            <motion.div 
              variants={textVariants}
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveModal('projects')}
                className="relative group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-3 rounded-lg overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveModal('contact')}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                Contact Me
              </motion.button>
              <motion.a
                href="/src/Amit_Godara-Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2000}
              className="relative z-10"
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 opacity-20 absolute inset-0 animate-pulse" />
              <div className="overflow-hidden rounded-full w-full aspect-square">
                <img
                  src="/src/Profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover relative z-10 shadow-2xl"
                />
              </div>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </Tilt>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: <Code2 size={32} />,
              title: "Clean Code",
              description: "Writing maintainable, scalable code is my passion"
            },
            {
              icon: <Rocket size={32} />,
              title: "Performance",
              description: "Optimized solutions for the best user experience"
            },
            {
              icon: <Brain size={32} />,
              title: "Problem Solving",
              description: "Turning complex problems into simple solutions"
            }
          ].map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white relative">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 relative">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {modalContent[activeModal].title}
              </h3>
              {modalContent[activeModal].content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
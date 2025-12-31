import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Coffee, Zap, Sparkles, Target, Users, Rocket } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { 
      icon: <Code className="w-8 h-8" />, 
      value: "15+", 
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      value: "100%", 
      label: "Client Satisfaction",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Coffee className="w-8 h-8" />, 
      value: "500+", 
      label: "Cups of Coffee",
      color: "from-amber-500 to-orange-500"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: "5+", 
      label: "Technologies",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission Driven",
      description: "Focused on delivering exceptional results"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Solutions",
      description: "Innovative approaches to complex problems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative and communication-focused"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
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
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Get to know me
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={2000}
              >
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      My Story
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    I'm a passionate <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Full Stack Developer</span> who loves creating beautiful and functional web applications. With a strong foundation in both frontend and backend technologies, I specialize in building scalable, user-centric solutions that make a difference.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a profession where I get to solve complex problems and create amazing user experiences every day.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                  </p>
                </div>
              </Tilt>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    perspective={1000}
                    transitionSpeed={2000}
                  >
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-purple-500/50 transition-all">
                      <div className="flex items-start">
                        <div className="p-3 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                          <div className="text-blue-600 dark:text-purple-400">
                            {highlight.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  transitionSpeed={2000}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 text-center border-2 border-transparent hover:border-blue-500/50 dark:hover:border-purple-500/50 transition-all relative overflow-hidden group">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className={`text-transparent bg-gradient-to-br ${stat.color} bg-clip-text mb-3 flex justify-center relative`}>
                      {stat.icon}
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 relative`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium relative">
                      {stat.label}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

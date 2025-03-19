import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.9], [100, 0]);

  const springConfig = { mass: 1, tension: 280, friction: 60 };
  const springProps = useSpring({
    from: { scale: 0.9 },
    to: { scale: 1 },
    config: springConfig,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            scale: [1, 1.1, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative">
        <motion.div style={{ opacity, y }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <animated.div style={springProps}>
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={2000}
              className="h-full"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl h-full shadow-lg transform-gpu transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { Icon: Mail, title: "Email", value: "Amitkumargodara8385@gmail.com", href: "mailto:john@example.com" },
                    { Icon: Phone, title: "Phone", value: "+917665855931", href: "tel:+1234567890" },
                    { Icon: MapPin, title: "Location", value: "Bharatpur, Rajasthan (India)" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center group"
                    >
                      <item.Icon className="text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Tilt>
          </animated.div>

          <animated.div style={springProps}>
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={2000}
              className="h-full"
            >
              <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform-gpu transition-all duration-300 hover:shadow-2xl">
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                  { label: "Message", type: "textarea", placeholder: "Your message" },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-3 rounded-lg group"
                >
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </form>
            </Tilt>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
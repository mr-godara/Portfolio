import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "Amitkumargodara8385@gmail.com",
      link: "mailto:Amitkumargodara8385@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7665855931",
      link: "tel:+917665855931"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bharatpur, Rajasthan (India)",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, link: "https://github.com/mr-godara", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, link: "https://linkedin.com/in/amit-godara-5a492a37b/", label: "LinkedIn" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:Amitkumargodara8385@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

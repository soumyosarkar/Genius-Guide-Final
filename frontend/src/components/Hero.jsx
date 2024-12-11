import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-gray-900 mb-8"
          >
            Transform Your Business with <br />
            <span className="text-primary">Expert Consulting</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            We help businesses achieve their full potential through strategic consulting
            and innovative solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
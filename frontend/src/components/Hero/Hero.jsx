import { motion } from 'framer-motion';
import HeroButton from './HeroButton';

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Genius Guides
          </motion.h1>
          <div className="space-x-8">
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              href="#services" 
              className="text-white hover:text-blue-200"
            >
              Services
            </motion.a>
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#contact" 
              className="text-white hover:text-blue-200"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 leading-tight"
          >
            Expert Financial &<br />
            Business Consulting
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-12 max-w-2xl"
          >
            Empowering businesses with strategic financial guidance and
            comprehensive CA services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-6"
          >
            <HeroButton href="#services" variant="primary">
              Our Services
            </HeroButton>
            <HeroButton href="#contact" variant="secondary">
              Get Started
            </HeroButton>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-700 opacity-10 rounded-full transform rotate-45"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-600 opacity-10 rounded-full transform -rotate-45"></div>
      </div>
    </section>
  );
}

export default Hero;
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center space-x-2"
    >
      <img src={logo} alt="Genius Guides Logo" className="h-16 w-auto"/>
    </motion.div>
  );
}

export default Logo;
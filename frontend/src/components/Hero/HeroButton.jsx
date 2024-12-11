import { motion } from 'framer-motion';

function HeroButton({ children, variant = 'primary', href = '#' }) {
  const baseStyles = "px-8 py-3 rounded-md text-lg font-semibold transition duration-300 inline-flex items-center";
  const variants = {
    primary: "bg-white text-primary hover:bg-gray-100",
    secondary: "bg-blue-500 text-white hover:bg-blue-600",
  };

  return (
    <motion.a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {variant === 'primary' && <span className="ml-2">→</span>}
    </motion.a>
  );
}

export default HeroButton;
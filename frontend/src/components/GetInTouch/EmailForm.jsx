import { useState } from 'react';
import { motion } from 'framer-motion';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition duration-300"
      >
        Subscribe
      </button>
      {status && (
        <p className="text-green-600 text-center">{status}</p>
      )}
    </motion.form>
  );
}

export default EmailForm;
import { useState } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

function GetInTouch() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest services and offers</p>
        </motion.div>
        <div className="max-w-xl mx-auto">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
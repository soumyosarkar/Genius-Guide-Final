import { motion } from 'framer-motion';
;

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch With Genius Guides
          </h2>
          <p className="text-xl text-gray-600">
            Email: <a href="mailto:geniusguides11@gmail.com" className="text-blue-600 hover:text-blue-800">
              geniusguides11@gmail.com
            </a>
          </p>
        </motion.div>
        <div className="max-w-xl mx-auto"></div>
      </div>
    </section>
  );
}

export default GetInTouch;
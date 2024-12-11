import { motion } from 'framer-motion';
import FeatureItem from './FeatureItem';
import { features } from './features';

function TrustedPartner() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Financial Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Genius Guides, we combine expertise with innovation to deliver exceptional financial and
              business consulting services. Our team of certified professionals is committed to helping
              your business thrive in today's competitive landscape.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <FeatureItem key={feature.id} text={feature.text} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business consulting team meeting"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TrustedPartner;
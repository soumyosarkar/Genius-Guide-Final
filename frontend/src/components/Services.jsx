import { FaChartLine, FaLightbulb, FaHandshake, FaCogs } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "Strategic Planning",
      description: "Develop comprehensive strategies to achieve your business goals"
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Innovation Consulting",
      description: "Transform your business with cutting-edge solutions"
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Business Development",
      description: "Expand your market presence and grow your business"
    },
    {
      icon: <FaCogs className="text-4xl text-primary" />,
      title: "Process Optimization",
      description: "Streamline operations for maximum efficiency"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Address() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {/* <FaMapMarkerAlt className="text-primary text-2xl mr-3" /> */}
        <h3 className="text-xl font-semibold">Contact Details</h3>
      </div>
      <div className="space-y-4">
        
        
        
        
        <div className="flex items-center">
          <FaEnvelope className="text-primary mr-2" />
          <a href="mailto:contact@geniusguides.com" className="text-gray-600 hover:text-primary">
            contact@geniusguides.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Address;
import { FaCheckCircle } from 'react-icons/fa';

function FeatureItem({ text }) {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
      <span className="text-lg text-gray-700">{text}</span>
    </div>
  );
}

export default FeatureItem;
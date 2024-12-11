import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function SocialLinks() {
  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com/geniusguides', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com/geniusguides', label: 'Twitter' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/geniusguides', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/geniusguides', label: 'Instagram' }
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={social.label}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
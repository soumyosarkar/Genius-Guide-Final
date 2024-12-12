// import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

function Footer() {
  const services = [
    { text: 'Tax Planning', href: '#services' },
    { text: 'Financial Advisory', href: '#services' },
    { text: 'Audit & Assurance', href: '#services' },
    { text: 'Corporate Services', href: '#services' }
  ];

  const quickLinks = [
    { text: 'Services', href: '#services' },
    { text: 'About Us', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className='mr-12'>
            <h2 className="text-2xl font-bold mb-4">Genius Guides</h2>
            <p className="text-gray-400 mb-6">
              Your trusted partner for comprehensive financial
              and business consulting services.
            </p>
          </div>

          {/* Services */}
          <FooterLinks title="Services" links={services} />

          {/* Quick Links */}
          <FooterLinks title="Quick Links" links={quickLinks} />

          
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Genius Guides. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
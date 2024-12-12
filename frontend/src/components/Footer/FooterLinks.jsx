import PropTypes from 'prop-types';

function FooterLinks({ title, links }) {
  return (
    <div className="px-32">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FooterLinks;
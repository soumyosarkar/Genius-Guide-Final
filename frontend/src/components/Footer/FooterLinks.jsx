function FooterLinks({ title, links }) {
  return (
    <div>
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

export default FooterLinks;
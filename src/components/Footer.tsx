import { Network, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      heading: 'Product',
      links: ['Features', 'How It Works', 'Pricing', 'Changelog'],
    },
    {
      heading: 'Resources',
      links: ['Documentation', 'Blog', 'Case Studies', 'Support'],
    },
    {
      heading: 'Company',
      links: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
    },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Network className="text-brand-cyan" size={28} />
              <span className="text-xl font-bold">NetMonitor</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your complete resource for network monitoring solutions, guides, and best practices.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { icon: <Github size={18} />, label: 'GitHub' },
                { icon: <Mail size={18} />, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-brand-cyan transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NetMonitor. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️ for network professionals worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

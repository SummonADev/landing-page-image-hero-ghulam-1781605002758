import { useState } from 'react';
import { Menu, X, Network } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['Features', 'How It Works', 'Testimonials', 'Pricing'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="text-brand-teal" size={28} />
          <span className="text-xl font-bold text-brand-dark">NetMonitor</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-gray-600 hover:text-brand-teal font-medium transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-brand-teal font-semibold hover:underline">
            Log In
          </a>
          <a
            href="#"
            className="bg-brand-teal text-white px-5 py-2 rounded-full font-semibold hover:bg-brand-light transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <ul className="flex flex-col px-6 pb-4 gap-4">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-gray-700 font-medium hover:text-brand-teal">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="block text-center bg-brand-teal text-white px-5 py-2 rounded-full font-semibold"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Nexstar Media Group is one of the largest local TV station operators in the country, 
              with a growing digital media division serving millions of users across platforms.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">News</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Our Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Broadcast Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Advertising</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Content Production</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Media Consulting</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Network Operations</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing Solutions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  545 E John Carpenter Freeway<br />
                  Suite 700<br />
                  Irving, TX 75062
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary mr-2 flex-shrink-0" />
                <a href="tel:+12145555555" className="text-gray-300 hover:text-white transition-colors">
                  (214) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary mr-2 flex-shrink-0" />
                <a href="mailto:info@nexstar.com" className="text-gray-300 hover:text-white transition-colors">
                  info@nexstar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Nexstar Media Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
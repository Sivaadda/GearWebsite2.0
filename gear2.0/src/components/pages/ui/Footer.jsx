import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-10 px-6 overflow-hidden">
      {/* Wave Shape Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.39C228.53,83.95,114.78,109.78,0,101.41V0H1200V101.41c-114.78,8.37-228.53-17.46-321.39-45.02C758.53,28.87,631.13-11.25,500,10.05,368.87,31.35,514.25,27.99,321.39,56.39Z"
            fill="#0f0f0f"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-10 relative">
        {/* Logo Section */}
        <div>
          <img src='/images/logo.png' alt="Gear Logo" className="w-32" />
          <p className="text-sm text-gray-400">
            Committed to delivering exceptional services and cutting-edge solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-green-400 mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-500 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-green-500 transition">Services</Link></li>
            <li><Link to="/products" className="hover:text-green-500 transition">Products</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-green-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-green-500 transition">Contact Us</Link></li>
            <li><Link to="/career" className="hover:text-green-500 transition">Careers</Link></li>
            {/* <li><Link to="/faq" className="hover:text-green-500 transition">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-green-500 transition">Blog</Link></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-green-400 mb-3">Contact</h3>
          {/* <p className="text-sm text-gray-400">London Eye, London, UK</p> */}
          <p className="text-sm text-gray-400">+91 9502172867</p>
          <p className="text-sm text-gray-400">support@servicesingear.com</p>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center mt-10 text-xs text-green-300 border-t border-green-700 pt-4">
        © 2025 Gear · All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;

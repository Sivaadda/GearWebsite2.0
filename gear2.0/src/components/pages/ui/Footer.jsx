import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-br from-green-900 via-black to-gray-900 text-white py-16 px-6"
    >
      {/* Footer Content */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-10 relative"
         initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Logo Section */}
        <motion.div variants={itemVariants}>
          <motion.img
            src="/images/logo.png"
            alt="Gear Logo"
            className="w-32 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          />
          <p className="text-sm text-gray-400 mt-2">
            Committed to delivering exceptional services and cutting-edge solutions.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-green-400 mb-3">Navigation</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Products"].map((text, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={`/${text.toLowerCase().replace(" ", "")}`}
                  className="hover:text-green-500 transition"
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-green-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "Contact Us", to: "/contact" },
              { label: "Careers", to: "/career" },
              // { label: "FAQ", to: "/faq" },
              // { label: "Blog", to: "/blog" },
            ].map(({ label, to }, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={to} className="hover:text-green-500 transition">
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-green-400 mb-3">Contact</h3>
          {/* <p className="text-sm text-gray-400">London Eye, London, UK</p> */}
          <p className="text-sm text-gray-400">+91 9502172867</p>
          <p className="text-sm text-gray-400">support@servicesingear.com</p>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.p
        className="text-center mt-10 text-xs text-green-300 border-t border-green-700 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        © 2025 Gear · All Rights Reserved
      </motion.p>
    </footer>
  );
}

export default Footer;

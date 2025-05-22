
import { motion } from 'framer-motion';
import React, { useEffect } from "react";
import productsList from "./ProductsList";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Home = () => {
  useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);
  return (
    <div className="bg-black text-green-400 min-h-screen font-sans">

      {/* Header
      <header className="flex justify-between items-center px-6 py-4 border-b border-green-600">
        <h1 className="text-2xl font-bold">GreenEnergy AI</h1>
        <nav className="space-x-6 text-green-300">
          <a href="#how" className="hover:text-green-400">How It Works</a>
          <a href="#solutions" className="hover:text-green-400">Solutions</a>
          <a href="#why" className="hover:text-green-400">Why Us</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="py-24 text-center bg-gradient-to-br from-black to-gray-900 px-4">
        <motion.h2
          className="text-5xl font-bold text-green-400 mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Build the Future with Your Green Idea
        </motion.h2>
        <motion.p
          className="text-lg text-green-200 max-w-2xl mx-auto mb-10"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          We turn your eco-conscious ideas into powerful AI & robotics solutions.
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition text-lg"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Start Your Project
        </motion.a>
      </section>
      


      {/* How It Works */}
      <section id="how" className="py-20 px-6 text-center bg-black">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['1. Share Your Idea', 'No technical skills needed – just your vision.'],
            ['2. We Design & Build', 'AI + Robotics experts create your product.'],
            ['3. You Launch It', 'We deliver the product – you take the lead.'],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-green-700"
              custom={i + 1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-green-200">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 px-6 text-center bg-gray-950">
        <h2 className="text-3xl font-bold mb-10">Featured Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['SolarBot', 'Cleans and monitors solar panels automatically.'],
            ['SmartGrid AI', 'AI system for real-time power grid optimization.'],
            ['EcoSense', 'IoT monitoring for energy and nature efficiency.'],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="bg-black border border-green-600 p-6 rounded-xl shadow-lg"
              custom={i + 1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-green-200">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-20 px-6 text-center bg-black">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            ['🌱 Sustainable by Design', 'Every solution is eco-conscious.'],
            ['🧠 AI + Robotics Experts', 'Engineers who specialize in automation.'],
            ['🤝 Fully Collaborative', 'We work closely with you step-by-step.'],
            ['⚡ Fast Prototyping', 'From concept to product — quickly.'],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="border-l-4 pl-4 border-green-500"
              custom={i + 1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-green-200">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

<section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Left Side */}
        <div className="md:w-1/3 text-center md:text-left md:sticky top-20 self-start">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Products</h2>
          <p className="text-gray-300">
            Discover the latest in AI-driven robotics designed for automation, precision, and sustainability.
          </p>
        </div>

        {/* Right Side: Infinite Horizontal Scroll */}
        <div className="md:w-2/3 overflow-hidden relative">
          <div className="flex animate-infinite-scroll w-max">
            {[...productsList, ...productsList].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="min-w-[250px] max-w-[250px] mx-3 bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.info}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center bg-green-900">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Get in Touch
        </motion.h2>
        <p className="text-green-100 mb-6">Let’s start building your solution today.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black text-white border border-green-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-black text-white border border-green-600"
          />
          <textarea
            placeholder="Your Idea or Message"
            className="w-full p-3 rounded-lg bg-black text-white border border-green-600 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;

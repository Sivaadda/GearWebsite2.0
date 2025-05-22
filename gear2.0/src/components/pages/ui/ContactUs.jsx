import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function ContactUs() {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('https://servicesingear-github-io.onrender.com/submit', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          query: "",
          description: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-green-100 font-sans">
        
    {/* Hero Section */}
<section className="text-center h-[300px] md:h-[400px] py-24 md:py-32 bg-green-700 text-white relative overflow-hidden mb-12">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url(/images/contact.png)',  // Your background image
      backgroundSize: 'cover',  // Ensures the image covers the section
      backgroundPosition: 'center', // Centers the image
      height: '100%',  // Make sure it covers the full height of the section
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10">
   <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
  <Typewriter
    words={['Contact Us', 'Get in Touch', 'We’re Here to Help!']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</h1>
    <p className="text-base sm:text-sm md:text-lg max-w-xl mx-auto text-gray-300 ">
     Have any questions or inquiries? Reach out to us for more information about our services and offerings.
    </p>
  </div>
</section>


      {/* Form & Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12 pt-12 pb-12">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-4 mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
          />
           <input
            type="text"
            name="query"
            placeholder="Subject / Query"
            value={formData.query}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
          />
         
          <textarea
            name="description"
            placeholder="Message"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
          ></textarea>
          <div className="flex justify-center">
            <button
        type="submit"
        disabled={loading}
        className="bg-green-600 hover:bg-green-800 transition duration-300 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
      >
        {loading && (
          <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {loading ? "Sending..." : "Submit"}
          </button>
          </div>
        </form>

        {/* Image */}
        <div className="flex justify-center md:col-span-1">
          <img
            src="/images/Contactus_sideimage.png"
            className="rounded-2xl w-full object-cover max-h-[500px]"
            alt="Contact"
          />
        </div>
      </div>  
      
      
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-4 pt-8">
        {/* Phone */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-green-200 hover:shadow-lg transition text-center ">
          <motion.div className="flex items-center justify-center gap-4 mb-4"
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 2, repeat: Infinity }} >
            <img src="/images/phone.svg" alt="Phone Icon" className="w-16 h-16" />
            
          </motion.div>
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-green-300 mb-1">+91 9502172867</p>
          <p className="text-sm text-green-400">
            Reach us anytime between 9am–6pm IST for quick assistance.
          </p>
        </div>

        {/* Email */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-green-200 hover:shadow-lg transition text-center">
          <motion.div className="flex items-center justify-center gap-4 mb-4"
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 2, repeat: Infinity }} >
            <img src="/images/email.svg" alt="Email Icon" className="w-16 h-16" />
            
          </motion.div>
           <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-green-300 mb-1">support@servicesingear.com</p>
          <p className="text-sm text-green-400">
            Send us an email and we’ll reply within 24 hours.
          </p>
        </div>

        {/* Address */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-green-200 hover:shadow-lg transition text-center">
   <motion.div className="flex items-center justify-center gap-4 mb-4"
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 2, repeat: Infinity }} >
            <img src="/images/location.svg" alt="Remote Icon" className="w-16 h-16" />
            
          </motion.div>
<h3 className="text-lg font-semibold">Remote Office</h3>
  <p className="text-green-300 mb-1">We work remotely</p>
  <p className="text-sm text-green-400">No physical address — we operate entirely online.</p>
</div>
      </div>  

      {/* Map */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.39845519056!2d78.4747707!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9382ebd8b5b7%3A0x7227351e609aff75!2sHyderabad!5e0!3m2!1sen!2sin!4v1621238497934!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
          className="rounded-xl"
        ></iframe>
      </div>
      {/* Social Media Links */}
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-green-200">Follow us</h3>
        <div className="flex justify-center gap-6 mt-4 animate-pulse">
          <a href="https://facebook.com" className="text-green-300 hover:text-white">
            <img src="/images/facebook.svg" alt="facebook Icon" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" className="text-green-300 hover:text-white">
            <img src="/images/twitter.svg" alt="twitter Icon" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-green-300 hover:text-white">
            <img src="/images/youtube.svg" alt="youtube Icon" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/gear_services/#" className="text-green-300 hover:text-white">
            <img src="/images/instagram.svg" alt="instagram Icon" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

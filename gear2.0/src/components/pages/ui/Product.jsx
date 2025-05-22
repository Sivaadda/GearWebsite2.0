
import HeroSection from "./HeroSection";
import products from "./ProductsList";
import React, { useState, useEffect } from "react";

const Product = () => {
      const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      query: "",
      description: "",
    });
     useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  
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
  return(
  <div className="bg-black text-green-100">
    <HeroSection
      backgroundImage="/images/products.png"
      headlines={[
        "Discover Our Best Products",
        "Innovative Solutions for Your Needs",
        "Quality and Performance Guaranteed",
      ]}
      subtext="Explore our range of cutting-edge products designed to simplify your life and boost productivity."
    />
   
      {/* Product Grid */}
      <section className="px-4 sm:px-10 lg:px-20 py-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Our Products</h2>
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-24">
        {products.map((product) => (
          <div key={product.id} className="bg-zinc-900 p-6 rounded-xl shadow-md border border-green-700">
            <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-56 object-cover" />
            <h2 className="text-2xl font-semibold mb-2 text-green-300">{product.name}</h2>
            <p className="text-green-400 mb-4">{product.info}</p>

            {/* {product.video && product.video.includes("youtube") && (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={product.video.replace("youtu.be", "www.youtube.com/embed")}
                  title={product.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 rounded-md"
                ></iframe>
              </div>
            )} */}
          </div>
        ))}
      </div>
      </section>

     

<section className="bg-green-950 text-green-100 py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6">Interested in Using Our Product?</h2>
    <p className="text-center text-lg mb-8">
       Tell us how you'd like to use our product in your business. We’ll get back to you with more info or a demo.
    </p>

   <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    className="p-3 rounded-lg bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500"
    required
  />
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    className="p-3 rounded-lg bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500"
    required
  />
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    className="p-3 rounded-lg bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500"
    required
  />
  <input
    type="text"
    name="query"
    value={formData.query}
    onChange={handleChange}
    placeholder="Product you're interested in"
    className="p-3 rounded-lg bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500"
    required
  />
  <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
    placeholder="How do you plan to use it in your business?"
    rows="3"
    className="p-3 rounded-lg bg-black text-white border border-green-700 focus:ring-2 focus:ring-green-500 md:col-span-2"
    required
  />
  <div className="md:col-span-2 text-center">
    <button
      type="submit"
      className="bg-green-600 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full transition disabled:opacity-60"
      disabled={loading}
    >
      {loading ? "Submitting..." : "Submit Inquiry"}
    </button>
  </div>
</form>

  </div>
</section>


</div>
  );}


export default Product;

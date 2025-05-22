import HeroSection from "./HeroSection";
import {useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return(
  <div className="bg-black text-green-100">
    {/* HERO */}
    <HeroSection
      backgroundImage="/images/aboutus.png"
      headlines={[
        "Get to Know Our Journey",
        "Driven by Purpose, Built on Values",
        "We Grow Together",
      ]}
      subtext="We’re a team of passionate individuals committed to building meaningful solutions and lasting relationships."
    />
<section className="bg-black text-green-100 pt-0 pb-12 px-6">
  <div className="max-w-6xl mx-auto grid gap-12 items-center text-center">
    {/* Text Content */}
    <div>
      <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
      <p className="text-lg mb-4 text-justify">
        We're a young and ambitious team passionate about building thoughtful technology that empowers individuals and communities. Our foundation is rooted in curiosity, integrity, and a commitment to meaningful impact. While our journey has just begun, our vision is bold. We aim to shape the future with purposeful solutions and a strong sense of responsibility to our users, our partners, and the planet.
      </p>
    </div>

   
  </div>
</section>

    {/* MISSION + VISION with background overlay image */}
   <section className="relative bg-gradient-to-br from-green-900 to-black text-white py-24 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center">
    <div className="space-y-10">
      <div>
        <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
          <span className="text-green-400">🎯</span> Our Mission
        </h2>
        <p className="text-lg">
          To empower innovators and problem-solvers with digital tools that drive positive impact and sustainable growth.
        </p>
      </div>
    </div>

    <div className="space-y-10">
      <div>
        <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
          <span className="text-green-400">🌍</span> Our Vision
        </h2>
        <p className="text-lg">
          A world where technology serves people, enhances collaboration, and inspires change.
        </p>
      </div>
    </div>
  </div>
</section>



    {/* WHAT MAKES US DIFFERENT with icons and parallax */}
    <section className="bg-black text-green-100 py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-14">What Makes Us Different</h2>
      <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
        {[
          {
            icon: "🎨",
            title: "User-First Design",
            desc: "Every decision we make is rooted in empathy and simplicity.",
          },
          {
            icon: "⚡",
            title: "Agile & Adaptive",
            desc: "We move fast, learn quickly, and evolve with your needs.",
          },
          {
            icon: "🌱",
            title: "Sustainable Tech",
            desc: "We care about ethical development and long-term impact.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-green-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

   <section className="bg-gradient-to-br from-black to-green-900 text-white py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">The Road Ahead</h2>
    <p className="text-lg mb-8">
      We're just getting started. Our aim is to build a future where digital products empower, connect, and elevate communities around the world.
    </p>
    <p className="text-green-300 font-semibold">We’re building with intention — and you’re invited to be part of it.</p>
  </div>
</section>


    {/* CTA with gradient + glass effect */}
    <section className="relative text-center text-white py-20 px-6 from-green-800 to-green-600">
  <div className="max-w-xl mx-auto backdrop-blur-sm bg-white/10 p-10 rounded-2xl shadow-md">
    <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
    <p className="mb-6 text-lg">We’re just getting started — and we’re looking for curious minds to build with us.</p>
    <a
      href="/career"
      className="inline-block bg-black px-6 py-3 rounded-full text-green-200 hover:bg-green-100 hover:text-black transition"
    >
      Explore Careers
    </a>
  </div>
</section>

  </div>
);}

export default AboutUs;

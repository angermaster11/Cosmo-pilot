import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const heroImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
];

const Home = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [active, setActive] = useState("home");
  const [showAbout, setShowAbout] = useState(false);

  /* ---------------- Smooth Scroll with Offset ---------------- */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* ---------------- Scroll + Active Nav ---------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "academics", "admissions", "campus"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Hero Background Slider ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- About Reveal Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowAbout(true);
      },
      { threshold: 0.3 }
    );

    const aboutEl = document.getElementById("about");
    if (aboutEl) observer.observe(aboutEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/80 backdrop-blur-lg py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1
            className="text-3xl font-extrabold tracking-widest cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-[#8B4049]">COSMO</span>{" "}
            <span className="text-gray-800">University</span>
          </h1>

          <div className="hidden md:flex space-x-8 font-medium">
            {[
              ["about", "About"],
              ["academics", "Academics"],
              ["admissions", "Admissions"],
              ["campus", "Campus"],
            ].map(([id, label]) => (
              <span
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer transition ${
                  active === id
                    ? "text-[#8B4049] font-semibold"
                    : "text-gray-700 hover:text-[#8B4049]"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-[#8B4049] text-white rounded-lg font-semibold hover:bg-[#6d3139] transition"
          >
            Portal Login
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Shape the Future with{" "}
            <span className="text-[#c9a961]">COSMO</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10">
            India’s Premier Technology-Driven University
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={() => navigate("/apply")}
              className="px-10 py-4 bg-[#8B4049] text-white rounded-xl font-semibold hover:scale-105 transition"
            >
              Apply Now
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-10 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-black transition"
            >
              Explore COSMO
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#8B4049] py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {[
            ["95%", "Placement Rate"],
            ["50+", "Programs"],
            ["120+", "Faculty"],
            ["10K+", "Alumni"],
          ].map(([num, label], i) => (
            <div key={i}>
              <p className="text-5xl font-bold">{num}</p>
              <p className="opacity-90">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT (Animated) */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div
          className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            showAbout
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
            alt="Campus"
            className="rounded-2xl shadow-xl hover:scale-105 transition"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About COSMO University
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Established in 2018, COSMO University is a future-ready institution
              focused on innovation, research, and industry-aligned education.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>✔ NAAC A-Grade & UGC Approved</li>
              <li>✔ AI, Robotics & Quantum Labs</li>
              <li>✔ 25-Acre Smart Campus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Academic Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["UG Programs", "B.Tech, BCA, B.Sc"],
              ["PG Programs", "M.Tech, MCA, MBA"],
              ["Doctoral", "PhD Research Programs"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section
        id="admissions"
        className="py-24 bg-gradient-to-r from-[#1e3a5f] to-[#8B4049] text-white text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Admissions Open 2026
        </h2>
        <p className="text-xl mb-10">
          Begin your journey at India’s leading tech university
        </p>
        <button
          onClick={() => navigate("/apply")}
          className="px-12 py-5 bg-white text-[#1e3a5f] font-semibold rounded-xl hover:scale-105 transition"
        >
          Start Application
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e2a47] text-white py-12 text-center">
        <p className="opacity-80">
          © 2025 COSMO University. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

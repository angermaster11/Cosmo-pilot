import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= HERO IMAGES ================= */
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

  /* ================= SMOOTH SCROLL ================= */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* ================= SCROLL HANDLER ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      ["about", "academics", "admissions"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= HERO SLIDER ================= */
  useEffect(() => {
    const i = setInterval(
      () => setBgIndex((p) => (p + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(i);
  }, []);

  /* ================= ABOUT REVEAL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShowAbout(true),
      { threshold: 0.3 }
    );
    const el = document.getElementById("about");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1C2321] text-[#EEF1EF] overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1C2321]/90 backdrop-blur-xl shadow-xl"
            : "bg-[#1C2321]/70 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className="text-2xl font-extrabold tracking-widest cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            COSMO<span className="text-[#A9B4C2]">.UNI</span>
          </h1>

          <div className="hidden md:flex space-x-8 text-sm">
            {["about", "academics", "admissions"].map((id) => (
              <span
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer transition ${
                  active === id
                    ? "text-[#EEF1EF] font-semibold"
                    : "text-[#7D98A1] hover:text-[#EEF1EF]"
                }`}
              >
                {id.toUpperCase()}
              </span>
            ))}
          </div>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#A9B4C2] to-[#7D98A1] text-black font-semibold hover:scale-105 transition"
          >
            Portal Login
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              i === bgIndex ? "opacity-100 scale-105" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1C2321]/85 to-[#1C2321]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF]">
                Tech University
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#7D98A1] max-w-xl">
              AI-Driven Curriculum · Industry Mentors · Global Placements · Smart Campus
            </p>

            <div className="mt-10 flex gap-6">
              <button
                onClick={() => navigate("/apply")}
                className="px-10 py-4 rounded-full bg-[#EEF1EF] text-black font-semibold hover:scale-105 transition"
              >
                Apply Now
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-10 py-4 rounded-full border border-[#7D98A1] hover:bg-white/10 transition"
              >
                Explore
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["95%", "Placements"],
              ["50+", "Programs"],
              ["120+", "Faculty"],
              ["10K+", "Alumni"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:scale-105 transition"
              >
                <p className="text-4xl font-bold">{n}</p>
                <p className="text-[#A9B4C2] mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 bg-[#EEF1EF] text-[#1C2321]">
        <div
          className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80"
            className="rounded-2xl shadow-2xl"
            alt="campus"
          />
          <div>
            <h2 className="text-4xl font-extrabold mb-6">Why COSMO?</h2>
            <p className="text-[#5E6572] text-lg mb-6">
              COSMO University is designed for the next decade — innovation-first,
              startup-friendly and globally connected.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "NAAC A-Grade",
                "AI & Robotics Labs",
                "25-Acre Smart Campus",
                "Global Industry Ties",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-white rounded-xl p-4 shadow font-semibold text-sm"
                >
                  ✔ {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMICS ================= */}
      <section id="academics" className="py-28 bg-[#1C2321]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-14">Academics</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Undergraduate", "B.Tech · BCA · AI / DS"],
              ["Postgraduate", "M.Tech · MCA · MBA"],
              ["Research", "PhD · Innovation Labs"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="bg-[#EEF1EF]/10 border border-white/10 rounded-2xl p-10 hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold mb-3">{t}</h3>
                <p className="text-[#7D98A1]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS ================= */}
      <section
        id="admissions"
        className="py-28 bg-gradient-to-r from-[#5E6572] to-[#7D98A1] text-center"
      >
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Admissions Open 2026
        </h2>
        <button
          onClick={() => navigate("/apply")}
          className="px-16 py-5 rounded-full bg-[#1C2321] text-[#EEF1EF] font-semibold hover:scale-105 transition"
        >
          Start Application
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 text-center text-[#7D98A1] bg-[#1C2321]">
        © 2026 COSMO University
      </footer>

      {/* ================= CHATBOT ================= */}
      <button
        onClick={() => navigate("/chatbot")}
        className="fixed bottom-6 right-6 px-6 py-4 bg-[#A9B4C2] text-black rounded-full shadow-xl hover:scale-105 transition"
      >
        💬 Chat
      </button>
    </div>
  );
};

export default Home;

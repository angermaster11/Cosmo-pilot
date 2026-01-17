import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import {
  Target, Wallet, TrendingUp, Building2, GraduationCap, BookOpen, FlaskConical,
  Trophy, Lightbulb, ScrollText, Globe, Award, Bot, TreeDeciduous, Briefcase,
  Rocket, Building, Home as HomeIcon, Library, TestTube, Dumbbell, UtensilsCrossed,
  HeartPulse, Bus, Calendar, Music, Code, Medal, Star, Users, Clock, MapPin,
  Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MessageCircle, ChevronUp,
  Play, ArrowRight, ArrowDown, Sparkles, Zap, CheckCircle2, Diamond, BarChart3
} from "lucide-react";

/* ================= HERO IMAGES ================= */
const heroImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
];

/* ================= SECTION BACKGROUNDS ================= */
const sectionBgs = {
  hero: [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1920&q=80",
  ],
  about: [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
  ],
  placements: [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80",
  ],
  academics: [
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80",
  ],
  campus: [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&q=80",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1920&q=80",
  ],
  testimonials: [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  ],
  admissions: [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80",
    "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=1920&q=80",
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1920&q=80",
  ],
  events: [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80",
  ],
};

/* ================= PLACEMENT DATA ================= */
const placementData = [
  { year: "2021", placements: 85, avgPackage: 8.5, highestPackage: 42 },
  { year: "2022", placements: 89, avgPackage: 9.2, highestPackage: 48 },
  { year: "2023", placements: 92, avgPackage: 10.5, highestPackage: 55 },
  { year: "2024", placements: 94, avgPackage: 12.2, highestPackage: 62 },
  { year: "2025", placements: 95, avgPackage: 14.5, highestPackage: 75 },
];

const departmentPlacements = [
  { name: "CSE", students: 450, placed: 435 },
  { name: "AI/ML", students: 200, placed: 198 },
  { name: "ECE", students: 300, placed: 280 },
  { name: "Mech", students: 250, placed: 225 },
  { name: "Civil", students: 180, placed: 160 },
];

const recruiterData = [
  { name: "Tech Giants", value: 35, color: "#5E6572" },
  { name: "Startups", value: 25, color: "#6B7280" },
  { name: "MNCs", value: 20, color: "#8B939F" },
  { name: "Core Companies", value: 12, color: "#A9B4C2" },
  { name: "Govt/PSU", value: 8, color: "#C4CCD6" },
];

const topRecruiters = [
  { name: "Google", logo: "G", package: "45 LPA", hired: 12, bgColor: "bg-[#5E6572]" },
  { name: "Microsoft", logo: "M", package: "42 LPA", hired: 18, bgColor: "bg-[#5E6572]" },
  { name: "Amazon", logo: "A", package: "38 LPA", hired: 25, bgColor: "bg-[#5E6572]" },
  { name: "Apple", logo: "⌘", package: "52 LPA", hired: 8, bgColor: "bg-[#5E6572]" },
  { name: "Meta", logo: "∞", package: "48 LPA", hired: 10, bgColor: "bg-[#5E6572]" },
  { name: "Netflix", logo: "N", package: "55 LPA", hired: 5, bgColor: "bg-[#5E6572]" },
  { name: "Adobe", logo: "Ai", package: "35 LPA", hired: 15, bgColor: "bg-[#5E6572]" },
  { name: "Flipkart", logo: "F", package: "32 LPA", hired: 22, bgColor: "bg-[#5E6572]" },
];

const campusStats = [
  { icon: "building", label: "Academic Blocks", value: "12" },
  { icon: "home", label: "Hostels", value: "8" },
  { icon: "library", label: "Library Books", value: "2L+" },
  { icon: "flask", label: "Research Labs", value: "45" },
  { icon: "dumbbell", label: "Sports Facilities", value: "15" },
  { icon: "utensils", label: "Cafeterias", value: "6" },
  { icon: "heart", label: "Medical Center", value: "24/7" },
  { icon: "bus", label: "Bus Routes", value: "25" },
];

const events = [
  { title: "TechFest 2026", date: "Feb 15-18", type: "Technical", attendees: "5000+", icon: "zap" },
  { title: "Cultural Night", date: "Mar 5-7", type: "Cultural", attendees: "3000+", icon: "music" },
  { title: "Hackathon", date: "Apr 10-12", type: "Coding", attendees: "1500+", icon: "code" },
  { title: "Sports Meet", date: "May 1-5", type: "Sports", attendees: "2000+", icon: "medal" },
];

const achievements = [
  { year: "2025", title: "NIRF Ranking #12", icon: "trophy" },
  { year: "2024", title: "Best Innovation Hub Award", icon: "lightbulb" },
  { year: "2024", title: "100+ Patents Filed", icon: "scroll" },
  { year: "2023", title: "QS World Ranking Top 500", icon: "globe" },
];

/* ================= FLOATING PARTICLES ================= */
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#A9B4C2]/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ================= BACKGROUND SLIDESHOW ================= */
const BackgroundSlideshow = ({ images, overlay = "light", interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const overlayStyles = {
    hero: "bg-gradient-to-br from-[#EEF1EF]/20 via-white/15 to-[#EEF1EF]/20",
    light: "bg-gradient-to-br from-[#EEF1EF]/80 via-white/75 to-[#EEF1EF]/80",
    lighter: "bg-gradient-to-br from-[#EEF1EF]/70 via-white/65 to-[#EEF1EF]/70",
    dark: "bg-gradient-to-r from-[#5E6572]/80 via-[#4a505b]/75 to-[#5E6572]/80",
    subtle: "bg-[#EEF1EF]/85",
  };

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
    </div>
  );
};

/* ================= TYPEWRITER EFFECT ================= */
const TypewriterText = ({ texts, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-1 h-12 md:h-16 bg-[#5E6572] ml-2 align-middle"
      />
    </span>
  );
};

/* ================= ANIMATED COUNTER ================= */
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = numericValue / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ================= MAGNETIC BUTTON ================= */
const MagneticButton = ({ children, onClick, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

/* ================= GLOW CARD ================= */
const GlowCard = ({ children, className, delay = 0 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className={`relative overflow-hidden group ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(94, 101, 114, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

/* ================= SCROLL REVEAL ================= */
const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const directions = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [active, setActive] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  /* ================= MOUSE TRACKING ================= */
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      ["about", "placements", "academics", "campus", "admissions"].forEach((id) => {
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

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF1EF] text-[#5E6572] overflow-x-hidden">
      
      {/* ================= CUSTOM CURSOR GLOW ================= */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(94, 101, 114, 0.12) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* ================= NAVBAR ================= */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#EEF1EF]/95 backdrop-blur-xl shadow-lg shadow-[#A9B4C2]/30"
            : "bg-[#EEF1EF]/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-extrabold tracking-widest cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#5E6572]"
            >
              COSMO
            </motion.span>
            <motion.span 
              className="text-[#A9B4C2]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              .UNI
            </motion.span>
          </motion.h1>

          <motion.div 
            className="hidden md:flex space-x-8 text-sm"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {["about", "placements", "academics", "campus", "admissions"].map((id, i) => (
              <motion.span
                key={id}
                variants={fadeInUp}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer transition relative ${
                  active === id
                    ? "text-[#5E6572] font-semibold"
                    : "text-[#A9B4C2] hover:text-[#5E6572]"
                }`}
                whileHover={{ y: -2 }}
              >
                {id.toUpperCase()}
                {active === id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5E6572]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.span>
            ))}
          </motion.div>

          <MagneticButton
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-full bg-[#5E6572] text-white font-semibold hover:shadow-lg hover:bg-[#4a505b] transition-all"
          >
            Portal Login
          </MagneticButton>
        </div>
      </motion.nav>

      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <FloatingParticles />
        
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.hero} overlay="hero" interval={4000} />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#A9B4C2]/30 to-[#5E6572]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#EEF1EF]/50 to-[#A9B4C2]/30 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(94, 101, 114, 1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(94, 101, 114, 1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-[#5E6572]/80 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Admissions Open for 2026
            </motion.div>

            <motion.div variants={fadeInUp} className="overflow-hidden">
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold leading-tight text-[#2D3139] drop-shadow-sm"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Shape Your <br />
                <span className="bg-gradient-to-r from-[#5E6572] via-[#6B7280] to-[#5E6572] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  <TypewriterText 
                    texts={["Future Here", "Dreams Today", "Success Story"]}
                    className=""
                  />
                </span>
              </motion.h1>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-lg text-[#3D434D] max-w-xl font-medium"
            >
              India's Leading Tech University with 95% Placements, World-Class Faculty, and Innovation-First Curriculum
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton
                onClick={() => navigate("/apply")}
                className="px-10 py-4 rounded-full bg-[#5E6572] text-white font-semibold hover:shadow-2xl hover:bg-[#4a505b] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToSection("about")}
                className="px-10 py-4 rounded-full border-2 border-[#A9B4C2] text-[#5E6572] hover:border-[#5E6572] hover:bg-[#A9B4C2]/20 transition group"
              >
                <span className="flex items-center gap-2">
                  Explore Campus
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </span>
              </MagneticButton>
              <MagneticButton
                onClick={() => {}}
                className="px-10 py-4 rounded-full bg-white shadow-lg hover:shadow-xl text-[#5E6572] font-medium transition flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </MagneticButton>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              {[
                { label: "NAAC A++", icon: Trophy },
                { label: "NIRF #12", icon: BarChart3 },
                { label: "NBA Accredited", icon: CheckCircle2 },
              ].map((badge) => (
                <motion.div 
                  key={badge.label}
                  className="flex items-center gap-2 bg-[#5E6572] backdrop-blur px-4 py-2 rounded-full shadow-lg border border-[#4a505b]"
                  whileHover={{ scale: 1.05 }}
                >
                  <badge.icon className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { n: "95", suffix: "%", l: "Placements", icon: Target, gradient: "from-[#5E6572] to-[#4a505b]" },
              { n: "75", suffix: "LPA", l: "Highest Package", icon: Diamond, gradient: "from-[#5E6572] to-[#6B7280]" },
              { n: "14.5", suffix: "LPA", l: "Avg Package", icon: TrendingUp, gradient: "from-[#6B7280] to-[#A9B4C2]" },
              { n: "500", suffix: "+", l: "Recruiters", icon: Building2, gradient: "from-[#A9B4C2] to-[#8B939F]" },
            ].map(({ n, suffix, l, icon: Icon, gradient }, i) => (
              <GlowCard
                key={l}
                delay={i * 0.1}
                className="bg-white backdrop-blur-xl border border-[#A9B4C2]/50 rounded-2xl p-6 cursor-pointer shadow-xl shadow-[#5E6572]/30 hover:shadow-2xl transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <motion.p 
                  className="text-3xl font-bold text-[#2D3139]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                >
                  <AnimatedCounter value={n} suffix={suffix} />
                </motion.p>
                <p className="text-[#5E6572] mt-1 text-sm font-medium">{l}</p>
              </GlowCard>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#5E6572] rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-[#5E6572] rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 relative overflow-hidden">
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.about} overlay="light" interval={6000} />
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#A9B4C2]/30 rounded-full blur-3xl opacity-50"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <ScrollReveal direction="left">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80"
                className="rounded-3xl shadow-2xl shadow-[#A9B4C2]/30 relative z-10"
                alt="campus"
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#A9B4C2] rounded-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              
              {/* Floating Achievement Card */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20 border border-[#A9B4C2]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5E6572] to-[#6B7280] rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#A9B4C2]">Ranked</p>
                    <p className="font-bold text-[#5E6572]">#12 in India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.span 
              className="text-[#5E6572] font-semibold text-sm tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              ABOUT COSMO UNIVERSITY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold mb-6 mt-2 text-[#5E6572]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#5E6572] to-[#A9B4C2] bg-clip-text text-transparent">
                COSMO?
              </span>
            </motion.h2>
            <motion.p 
              className="text-[#6B7280] text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              COSMO University is designed for the next decade — innovation-first,
              startup-friendly, and globally connected. We don't just teach; we transform 
              students into industry-ready professionals.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Award, text: "NAAC A++ Grade" },
                { icon: Bot, text: "AI & Robotics Labs" },
                { icon: TreeDeciduous, text: "25-Acre Smart Campus" },
                { icon: Globe, text: "Global Industry Ties" },
                { icon: Briefcase, text: "100% Internship" },
                { icon: Rocket, text: "Startup Incubator" },
              ].map((t, i) => (
                <motion.div
                  key={t.text}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(94, 101, 114, 0.15)" }}
                  className="bg-gradient-to-br from-white to-[#EEF1EF] rounded-xl p-4 shadow-sm border border-[#A9B4C2]/30 font-medium text-sm flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#5E6572] to-[#6B7280] flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#5E6572]">{t.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= PLACEMENT STATS ================= */}
      <section id="placements" className="py-28 relative overflow-hidden">
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.placements} overlay="light" interval={5000} />
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #5E6572 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#5E6572] font-semibold text-sm tracking-wider">PLACEMENT RECORDS</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-[#5E6572]">
                Outstanding{" "}
                <span className="bg-gradient-to-r from-[#5E6572] to-[#A9B4C2] bg-clip-text text-transparent">
                  Placement Track Record
                </span>
              </h2>
              <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                Our students consistently receive offers from top global companies with exceptional packages
              </p>
            </div>
          </ScrollReveal>

          {/* Placement Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "75", suffix: " LPA", label: "Highest Package", color: "from-[#5E6572] to-[#4a505b]", icon: Diamond },
              { value: "14.5", suffix: " LPA", label: "Average Package", color: "from-[#5E6572] to-[#6B7280]", icon: BarChart3 },
              { value: "95", suffix: "%", label: "Placement Rate", color: "from-[#6B7280] to-[#8B939F]", icon: Target },
              { value: "500", suffix: "+", label: "Recruiting Companies", color: "from-[#8B939F] to-[#A9B4C2]", icon: Building2 },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-[#A9B4C2]/20 border border-[#A9B4C2]/30 text-center"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(94, 101, 114, 0.15)" }}
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-[#5E6572]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[#A9B4C2] text-sm mt-1">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Placement Trend Chart */}
            <ScrollReveal direction="left">
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#A9B4C2]/20 border border-[#A9B4C2]/30"
                whileHover={{ boxShadow: "0 20px 40px rgba(94, 101, 114, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-[#5E6572] mb-6">Placement Trend (5 Years)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={placementData}>
                    <defs>
                      <linearGradient id="colorPlacements" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5E6572" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#5E6572" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#A9B4C2" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '12px',
                        border: '1px solid #A9B4C2',
                        boxShadow: '0 10px 40px rgba(94,101,114,0.1)'
                      }} 
                    />
                    <Area type="monotone" dataKey="placements" stroke="#5E6572" strokeWidth={3} fillOpacity={1} fill="url(#colorPlacements)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </ScrollReveal>

            {/* Average Package Growth */}
            <ScrollReveal direction="right">
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#A9B4C2]/20 border border-[#A9B4C2]/30"
                whileHover={{ boxShadow: "0 20px 40px rgba(94, 101, 114, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-[#5E6572] mb-6">Package Growth (LPA)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={placementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#A9B4C2" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        borderRadius: '12px',
                        border: '1px solid #A9B4C2',
                        boxShadow: '0 10px 40px rgba(94,101,114,0.1)'
                      }} 
                    />
                    <Bar dataKey="avgPackage" fill="#5E6572" radius={[8, 8, 0, 0]} name="Avg Package" />
                    <Bar dataKey="highestPackage" fill="#A9B4C2" radius={[8, 8, 0, 0]} name="Highest Package" />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Recruiter Distribution */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal direction="left">
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#A9B4C2]/20 border border-[#A9B4C2]/30"
                whileHover={{ boxShadow: "0 20px 40px rgba(94, 101, 114, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-[#5E6572] mb-6">Recruiter Distribution</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={recruiterData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {recruiterData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {recruiterData.map((item) => (
                    <span key={item.name} className="flex items-center gap-1 text-xs">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Department-wise Placements */}
            <ScrollReveal direction="up" className="md:col-span-2">
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#A9B4C2]/20 border border-[#A9B4C2]/30"
                whileHover={{ boxShadow: "0 20px 40px rgba(94, 101, 114, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-[#5E6572] mb-6">Department-wise Placements</h3>
                <div className="space-y-4">
                  {departmentPlacements.map((dept, i) => (
                    <motion.div 
                      key={dept.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-[#5E6572]">{dept.name}</span>
                        <span className="text-[#A9B4C2]">{dept.placed}/{dept.students} ({Math.round(dept.placed/dept.students*100)}%)</span>
                      </div>
                      <div className="h-3 bg-[#EEF1EF] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#5E6572] to-[#A9B4C2] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(dept.placed/dept.students)*100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Top Recruiters */}
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-[#5E6572] mb-8 text-center">Our Top Recruiters</h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topRecruiters.map((company, i) => (
              <ScrollReveal key={company.name} delay={i * 0.05}>
                <motion.div
                  className="bg-white rounded-2xl p-5 shadow-md border border-[#A9B4C2]/30 text-center"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(94, 101, 114, 0.15)" }}
                >
                  <div className={`w-14 h-14 mx-auto rounded-xl ${company.bgColor} flex items-center justify-center text-white text-xl font-bold mb-3`}>
                    {company.logo}
                  </div>
                  <p className="font-bold text-[#5E6572]">{company.name}</p>
                  <p className="text-[#5E6572] font-semibold text-sm">{company.package}</p>
                  <p className="text-[#A9B4C2] text-xs">{company.hired} offers</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACADEMICS ================= */}
      <section id="academics" className="py-28 relative overflow-hidden">
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.academics} overlay="light" interval={7000} />
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4" fill="none" stroke="#5E6572" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#5E6572] font-semibold text-sm tracking-wider">PROGRAMS</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-[#5E6572]">
                World-Class{" "}
                <span className="bg-gradient-to-r from-[#5E6572] to-[#A9B4C2] bg-clip-text text-transparent">
                  Academic Programs
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: GraduationCap, 
                title: "Undergraduate", 
                programs: ["B.Tech CSE", "B.Tech AI/ML", "B.Tech Data Science", "BCA", "B.Sc Computer Science"],
                duration: "4 Years",
                seats: "1200+",
                color: "from-[#5E6572] to-[#4a505b]"
              },
              { 
                icon: BookOpen, 
                title: "Postgraduate", 
                programs: ["M.Tech CSE", "MCA", "MBA Tech", "M.Sc Data Science", "M.Tech AI"],
                duration: "2 Years",
                seats: "500+",
                color: "from-[#5E6572] to-[#6B7280]"
              },
              { 
                icon: FlaskConical, 
                title: "Research", 
                programs: ["PhD Computer Science", "PhD AI/ML", "Innovation Labs", "Industry Research"],
                duration: "3-5 Years",
                seats: "100+",
                color: "from-[#6B7280] to-[#A9B4C2]"
              },
            ].map((program, i) => (
              <ScrollReveal key={program.title} delay={i * 0.15}>
                <motion.div
                  className="bg-gradient-to-br from-white to-[#EEF1EF] border border-[#A9B4C2]/30 rounded-3xl p-8 shadow-lg h-full"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(94, 101, 114, 0.15)" }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5E6572] mb-4">{program.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {program.programs.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[#6B7280]">
                        <span className="w-1.5 h-1.5 bg-[#5E6572] rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 pt-4 border-t border-[#A9B4C2]/30">
                    <div>
                      <p className="text-xs text-[#A9B4C2]">Duration</p>
                      <p className="font-semibold text-[#5E6572]">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#A9B4C2]">Seats</p>
                      <p className="font-semibold text-[#5E6572]">{program.seats}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAMPUS FACILITIES ================= */}
      <section id="campus" className="py-28 relative overflow-hidden">
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.campus} overlay="lighter" interval={5000} />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-[#5E6572]/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#A9B4C2]/15 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#5E6572] font-semibold text-sm tracking-wider">CAMPUS LIFE</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-[#5E6572]">
                State-of-the-Art{" "}
                <span className="bg-gradient-to-r from-[#5E6572] to-[#A9B4C2] bg-clip-text text-transparent">
                  Campus Facilities
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {campusStats.map((stat, i) => {
              const iconMap = {
                building: Building,
                home: HomeIcon,
                library: Library,
                flask: FlaskConical,
                dumbbell: Dumbbell,
                utensils: UtensilsCrossed,
                heart: HeartPulse,
                bus: Bus
              };
              const IconComponent = iconMap[stat.icon];
              return (
                <ScrollReveal key={stat.label} delay={i * 0.05}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#A9B4C2]/30"
                    whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(94, 101, 114, 0.1)" }}
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-[#5E6572] to-[#6B7280] flex items-center justify-center mb-3">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-[#5E6572]">{stat.value}</p>
                    <p className="text-[#A9B4C2] text-sm">{stat.label}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Campus Gallery */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", title: "Main Campus" },
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", title: "Modern Library" },
              { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", title: "Innovation Labs" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-xl">{item.title}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENTS & ACHIEVEMENTS ================= */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.events} overlay="light" interval={6000} />
        
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235E6572' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Decorative Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-[#A9B4C2]/30 rounded-lg"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-16 h-16 bg-[#5E6572]/5 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Events */}
            <ScrollReveal direction="left">
              <span className="text-[#5E6572] font-semibold text-sm tracking-wider">CAMPUS EVENTS</span>
              <h3 className="text-3xl font-bold text-[#5E6572] mt-2 mb-8">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, i) => {
                  const eventIconMap = {
                    zap: Zap,
                    music: Music,
                    code: Code,
                    medal: Medal
                  };
                  const EventIcon = eventIconMap[event.icon];
                  return (
                    <motion.div
                      key={event.title}
                      className="bg-gradient-to-r from-white to-[#EEF1EF] rounded-2xl p-5 border border-[#A9B4C2]/30 flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-[#5E6572] to-[#6B7280] text-white rounded-xl px-4 py-3 text-center min-w-[80px]">
                        <p className="font-bold">{event.date.split(" ")[0]}</p>
                        <p className="text-xs opacity-80">{event.date.split(" ")[1]}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-[#5E6572]">{event.title}</p>
                        <p className="text-sm text-[#A9B4C2]">{event.type} • {event.attendees} attendees</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#5E6572]" />
                    </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Achievements */}
            <ScrollReveal direction="right">
              <span className="text-[#5E6572] font-semibold text-sm tracking-wider">RECOGNITION</span>
              <h3 className="text-3xl font-bold text-[#5E6572] mt-2 mb-8">Our Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, i) => {
                  const achieveIconMap = {
                    trophy: Trophy,
                    lightbulb: Lightbulb,
                    scroll: ScrollText,
                    globe: Globe
                  };
                  const AchieveIcon = achieveIconMap[achievement.icon];
                  return (
                    <motion.div
                      key={achievement.title}
                      className="bg-gradient-to-r from-[#EEF1EF] to-white rounded-2xl p-5 border border-[#A9B4C2]/30 flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: -5 }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#5E6572] to-[#6B7280] flex items-center justify-center">
                        <AchieveIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#5E6572]">{achievement.title}</p>
                        <p className="text-sm text-[#A9B4C2]">{achievement.year}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.testimonials} overlay="lighter" interval={5000} />
        
        {/* Decorative Circles */}
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[#A9B4C2]/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-[#5E6572]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#A9B4C2]/10 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#5E6572] font-semibold text-sm tracking-wider">TESTIMONIALS</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-[#5E6572]">
                What Our{" "}
                <span className="bg-gradient-to-r from-[#5E6572] to-[#A9B4C2] bg-clip-text text-transparent">
                  Students Say
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "B.Tech CSE '24 → Google", text: "COSMO transformed my career with hands-on AI projects and amazing mentorship. Got placed at Google with 45 LPA!", icon: Users },
              { name: "Rahul Verma", role: "M.Tech DS '25 → Microsoft", text: "The industry connections here are unmatched. The placement cell worked tirelessly to help me land my dream job!", icon: Briefcase },
              { name: "Ananya Patel", role: "MBA '24 → Startup Founder", text: "Innovation is in the air here. Started my own startup during my final year with support from the incubation center.", icon: Rocket },
            ].map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg border border-[#A9B4C2]/30 relative"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(94, 101, 114, 0.15)" }}
                >
                  <div className="absolute -top-4 -left-4 text-6xl opacity-10 text-[#5E6572]">"</div>
                  <p className="text-[#6B7280] mb-6 relative z-10 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#5E6572] to-[#6B7280] flex items-center justify-center">
                      <testimonial.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#5E6572]">{testimonial.name}</p>
                      <p className="text-sm text-[#A9B4C2]">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS CTA ================= */}
      <section
        id="admissions"
        className="py-28 relative overflow-hidden"
      >
        {/* Background Slideshow */}
        <BackgroundSlideshow images={sectionBgs.admissions} overlay="dark" interval={4000} />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-[#A9B4C2] rounded-full animate-pulse" />
              Limited Seats Available
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Start Your Journey at COSMO
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Join 10,000+ successful alumni who transformed their careers. Applications closing soon!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton
                onClick={() => navigate("/apply")}
                className="px-12 py-5 rounded-full bg-white text-[#5E6572] font-bold text-lg hover:shadow-2xl transition-all"
              >
                Apply Now - Free
              </MagneticButton>
              <MagneticButton
                onClick={() => {}}
                className="px-12 py-5 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                Download Brochure
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Countdown */}
          <motion.div
            className="mt-12 flex justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              ["30", "Days"],
              ["12", "Hours"],
              ["45", "Minutes"],
              ["22", "Seconds"],
            ].map(([n, l]) => (
              <div key={l} className="bg-white/10 backdrop-blur-xl rounded-2xl px-4 md:px-8 py-4">
                <p className="text-3xl md:text-4xl font-bold text-white">{n}</p>
                <p className="text-xs md:text-sm text-white/70">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-16 bg-[#5E6572] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 mb-12">
            <div className="md:col-span-2">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                COSMO<span className="bg-gradient-to-r from-[#A9B4C2] to-white bg-clip-text text-transparent">.UNI</span>
              </motion.h3>
              <p className="text-[#A9B4C2] text-sm mb-6 max-w-xs">
                Shaping tomorrow's leaders through innovation, excellence, and industry-focused education.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((SocialIcon, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 bg-[#4a505b] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#A9B4C2] transition"
                    whileHover={{ y: -3 }}
                  >
                    <SocialIcon className="w-5 h-5 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {[
              { title: "Quick Links", links: ["About Us", "Programs", "Admissions", "Research", "Campus Life"] },
              { title: "Resources", links: ["Library", "Career Services", "Student Portal", "Alumni Network", "FAQ"] },
              { title: "Contact", links: ["📍 Tech City, India", "📞 +91 1800-XXX-XXXX", "✉️ admissions@cosmo.edu", "🕐 Mon-Sat 9AM-6PM"] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <motion.li 
                      key={link}
                      whileHover={{ x: 5 }}
                      className="text-[#A9B4C2] hover:text-white cursor-pointer text-sm transition"
                    >
                      {link}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="pt-8 border-t border-[#4a505b] flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#A9B4C2] text-sm">© 2026 COSMO University. All rights reserved.</p>
            <div className="flex gap-6 text-[#A9B4C2] text-sm">
              <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition">Sitemap</span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* ================= CHATBOT ================= */}
      <motion.button
        onClick={() => navigate("/chatbot")}
        className="fixed bottom-6 right-6 px-6 py-4 bg-gradient-to-r from-[#5E6572] to-[#4a505b] text-white rounded-full shadow-xl shadow-[#5E6572]/30 overflow-hidden group"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <MessageCircle className="w-5 h-5 inline" />
        </motion.span>
        <span className="ml-2 group-hover:ml-3 transition-all font-medium">Chat with us</span>
        
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ borderRadius: "100%" }}
        />
      </motion.button>

      {/* ================= BACK TO TOP ================= */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 w-12 h-12 bg-white shadow-lg border border-[#A9B4C2]/30 rounded-full flex items-center justify-center hover:shadow-xl transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronUp className="w-5 h-5 text-[#5E6572]" />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ================= GRADIENT ANIMATION STYLE ================= */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;

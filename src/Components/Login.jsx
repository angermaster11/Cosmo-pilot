import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Config/Config";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  ArrowRight, 
  GraduationCap,
  Sparkles,
  Shield,
  BookOpen,
  Award
} from "lucide-react";

// Floating particle component
const FloatingParticle = ({ delay, duration, size, x, y }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-[#5E6572]/20 to-[#A9B4C2]/10"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Background Slideshow
const BackgroundSlideshow = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF1EF]/85 via-white/80 to-[#EEF1EF]/85" />
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ user_id: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Background images
  const bgImages = [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
  ];

  // Generate particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    duration: 4 + Math.random() * 3,
    size: 10 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const { data: userData } = await supabase
        .from("users")
        .select("*")
        .eq("username", formData.user_id)
        .maybeSingle();

      if (!userData || userData.password !== formData.password) {
        throw new Error("Invalid credentials");
      }

      const user = {
        ...userData,
        user_id: userData.user_id || userData.id || userData.username
      };
      
      localStorage.setItem("user", JSON.stringify(user));
      
      const tokenPayload = {
        user_id: user.user_id,
        role: user.role || "student",
        exp: Date.now() + (24 * 60 * 60 * 1000)
      };
      
      const token = btoa(JSON.stringify(tokenPayload));
      localStorage.setItem("token", token);
      
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("Invalid University ID or Password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const { data: existing } = await supabase
        .from("users")
        .select("id")
        .eq("username", formData.user_id)
        .maybeSingle();

      if (existing) {
        throw new Error("User already exists");
      }

      const newUser = {
        username: formData.user_id,
        password: formData.password,
        role: "student",
        user_id: formData.user_id,
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from("users")
        .insert([newUser])
        .select()
        .single();

      if (error) throw error;

      localStorage.setItem("user", JSON.stringify(data));
      
      const tokenPayload = {
        user_id: data.user_id || data.username,
        role: "student",
        exp: Date.now() + (24 * 60 * 60 * 1000)
      };
      localStorage.setItem("token", btoa(JSON.stringify(tokenPayload)));
      
      navigate("/dashboard");
    } catch (err) {
      console.error("Register error:", err);
      setErrorMessage(err.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: Shield, label: "Secure Login" },
    { icon: BookOpen, label: "Digital Resources" },
    { icon: Award, label: "Track Progress" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden relative bg-[#EEF1EF]">
      {/* Background Slideshow */}
      <BackgroundSlideshow images={bgImages} interval={6000} />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#5E6572]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#A9B4C2]/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-5xl relative z-10 grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="mb-8">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#5E6572] to-[#3D434D] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#2D3139]">COSMO</h1>
                <p className="text-[#5E6572] text-sm">University Portal</p>
              </div>
            </motion.div>

            <h2 className="text-4xl font-bold text-[#2D3139] leading-tight mb-4">
              Welcome to Your
              <span className="block text-[#5E6572]">Academic Journey</span>
            </h2>
            
            <p className="text-[#6B7280] text-lg mb-8">
              Access your courses, track your progress, and connect with your academic community.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-[#A9B4C2]/30"
                >
                  <feature.icon className="w-4 h-4 text-[#5E6572]" />
                  <span className="text-sm font-medium text-[#5E6572]">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "10K+", label: "Students" },
              { value: "500+", label: "Courses" },
              { value: "95%", label: "Success Rate" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/60 backdrop-blur rounded-xl p-4 text-center border border-[#A9B4C2]/20 shadow-sm"
              >
                <p className="text-2xl font-bold text-[#2D3139]">{stat.value}</p>
                <p className="text-sm text-[#6B7280]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#5E6572]/20 p-8 md:p-10 border border-[#A9B4C2]/30">
            {/* Mobile Logo */}
            <div className="md:hidden text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#5E6572] to-[#3D434D] rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-9 h-9 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-[#2D3139]">COSMO University</h1>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-[#5E6572]/10 px-4 py-2 rounded-full mb-4"
              >
                <Sparkles className="w-4 h-4 text-[#5E6572]" />
                <span className="text-sm font-medium text-[#5E6572]">
                  {isRegister ? "Join Us Today" : "Welcome Back"}
                </span>
              </motion.div>
              
              <h2 className="text-2xl font-bold text-[#2D3139]">
                {isRegister ? "Create Account" : "Sign In"}
              </h2>
              <p className="text-[#6B7280] mt-2">
                {isRegister 
                  ? "Start your academic journey with COSMO" 
                  : "Enter your credentials to continue"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={isRegister ? handleRegister : handleLogin} className="space-y-5">
              {/* User ID Input */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-[#5E6572] text-sm font-medium mb-2">
                  {isRegister ? "Create User ID" : "University ID"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("user_id")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="CUS2023XYZ"
                    required
                    className={`w-full px-5 py-4 pl-12 bg-[#EEF1EF]/50 border-2 rounded-xl text-[#2D3139] placeholder-[#A9B4C2] 
                             focus:outline-none transition-all duration-300 ${
                               focusedField === "user_id" 
                                 ? "border-[#5E6572] bg-white shadow-lg shadow-[#5E6572]/10" 
                                 : "border-[#A9B4C2]/30 hover:border-[#A9B4C2]"
                             }`}
                  />
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === "user_id" ? "text-[#5E6572]" : "text-[#A9B4C2]"
                  }`} />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-[#5E6572] text-sm font-medium mb-2">
                  {isRegister ? "Create Password" : "Password"}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="••••••••"
                    required
                    className={`w-full px-5 py-4 pl-12 pr-12 bg-[#EEF1EF]/50 border-2 rounded-xl text-[#2D3139] placeholder-[#A9B4C2] 
                             focus:outline-none transition-all duration-300 ${
                               focusedField === "password" 
                                 ? "border-[#5E6572] bg-white shadow-lg shadow-[#5E6572]/10" 
                                 : "border-[#A9B4C2]/30 hover:border-[#A9B4C2]"
                             }`}
                  />
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === "password" ? "text-[#5E6572]" : "text-[#A9B4C2]"
                  }`} />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A9B4C2] hover:text-[#5E6572] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Error Message */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(94, 101, 114, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#5E6572] to-[#3D434D] text-white font-semibold rounded-xl 
                           transition-all duration-300 relative overflow-hidden group disabled:opacity-70 shadow-lg shadow-[#5E6572]/30"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                  
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div 
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      {isRegister ? "Creating Account..." : "Signing in..."}
                    </span>
                  ) : (
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isRegister ? "Create Account" : "Sign In"}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#A9B4C2]/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-[#A9B4C2] text-sm">or</span>
              </div>
            </div>

            {/* Toggle Register/Login */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-[#6B7280]">
                {isRegister ? (
                  <>
                    Already have an account?{" "}
                    <motion.span
                      onClick={() => { setIsRegister(false); setErrorMessage(""); }}
                      className="text-[#5E6572] font-semibold cursor-pointer hover:text-[#3D434D] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign In
                    </motion.span>
                  </>
                ) : (
                  <>
                    New to COSMO?{" "}
                    <motion.span
                      onClick={() => { setIsRegister(true); setErrorMessage(""); }}
                      className="text-[#5E6572] font-semibold cursor-pointer hover:text-[#3D434D] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Create Account
                    </motion.span>
                  </>
                )}
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.p 
            className="text-center text-[#6B7280] text-xs mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            © 2026 COSMO University. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Config/Config";
import { motion, AnimatePresence } from "framer-motion";

// Floating particle component
const FloatingParticle = ({ delay, duration, size, x, y }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-[#7D98A1]/20 to-[#A9B4C2]/10"
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

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ user_id: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
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
      
      console.log("Login successful, user_id:", user.user_id);
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

  return (
    <div className="min-h-screen mesh-background flex items-center justify-center px-4 py-8 overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#7D98A1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#5E6572]/10 rounded-full blur-3xl" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-md relative z-10"
      >
        {/* Glass Card */}
        <div className="glass-card p-8 md:p-10">
          {/* Logo & Header */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Animated Logo */}
            <motion.div 
              className="w-20 h-20 mx-auto mb-6 relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7D98A1] to-[#5E6572] rounded-2xl rotate-6 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7D98A1] to-[#5E6572] rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-[#EEF1EF]">C</span>
              </div>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-[#7D98A1]/50 to-[#A9B4C2]/50 rounded-2xl blur-lg opacity-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <h1 className="text-3xl font-bold gradient-text mb-2">
              COSMO University
            </h1>
            <p className="text-[#A9B4C2] text-sm">
              {isRegister ? "Create your student account" : "Welcome back! Sign in to continue"}
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={isRegister ? handleRegister : handleLogin} className="space-y-6">
            {/* User ID Input */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <label className="block text-[#A9B4C2] text-sm font-medium mb-2 ml-1">
                {isRegister ? "Create User ID" : "University ID"}
              </label>
              <div className="relative group">
                <input
                  type="text"
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("user_id")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="CUS2023XYZ"
                  required
                  className="w-full px-5 py-4 bg-[#1C2321]/60 border border-[#5E6572]/30 rounded-xl text-[#EEF1EF] placeholder-[#5E6572] 
                           focus:outline-none focus:border-[#7D98A1] focus:bg-[#1C2321]/80 transition-all duration-300
                           focus:shadow-[0_0_0_4px_rgba(125,152,161,0.15)]"
                />
                <motion.div 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5E6572]"
                  animate={{ opacity: focusedField === "user_id" ? 1 : 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <label className="block text-[#A9B4C2] text-sm font-medium mb-2 ml-1">
                {isRegister ? "Create Password" : "Password"}
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  required
                  className="w-full px-5 py-4 bg-[#1C2321]/60 border border-[#5E6572]/30 rounded-xl text-[#EEF1EF] placeholder-[#5E6572] 
                           focus:outline-none focus:border-[#7D98A1] focus:bg-[#1C2321]/80 transition-all duration-300
                           focus:shadow-[0_0_0_4px_rgba(125,152,161,0.15)] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5E6572] hover:text-[#7D98A1] transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
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
                  <div className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(125, 152, 161, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#7D98A1] to-[#5E6572] text-[#EEF1EF] font-semibold rounded-xl 
                         transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
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
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#5E6572]/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#1C2321] text-[#5E6572] text-sm">or</span>
            </div>
          </div>

          {/* Toggle Register/Login */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[#A9B4C2] text-sm">
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <motion.span
                    onClick={() => { setIsRegister(false); setErrorMessage(""); }}
                    className="text-[#7D98A1] font-semibold cursor-pointer hover:text-[#A9B4C2] transition-colors"
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
                    className="text-[#7D98A1] font-semibold cursor-pointer hover:text-[#A9B4C2] transition-colors"
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

        {/* Footer Text */}
        <motion.p 
          className="text-center text-[#5E6572] text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © 2026 COSMO University. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
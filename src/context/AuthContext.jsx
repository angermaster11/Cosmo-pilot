// src/context/AuthContext.jsx
// Proper Supabase Authentication Context for hackathon-winning project

import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../Config/Config";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check for existing session on mount
    checkUser();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth event:", event);
        setSession(session);
        if (session?.user) {
          await fetchUserProfile(session.user.id);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      }
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async (authUserId) => {
    try {
      // Get user profile from users table
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("auth_id", authUserId)
        .single();

      if (error && error.code !== "PGRST116") {
        // Try by email if auth_id not found
        const { data: { user: authUser } } = await supabase.auth.getUser();
        if (authUser?.email) {
          const { data: userData } = await supabase
            .from("users")
            .select("*")
            .eq("email", authUser.email)
            .single();
          
          if (userData) {
            setUser({ ...userData, auth_id: authUserId });
            return;
          }
        }
        console.error("Error fetching user profile:", error);
        return;
      }

      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Store token for API calls
      if (data.session?.access_token) {
        localStorage.setItem("token", data.session.access_token);
      }

      return { data, error: null };
    } catch (error) {
      console.error("Sign in error:", error);
      return { data: null, error };
    }
  };

  const signInWithUsername = async (username, password) => {
    try {
      // First find user by username
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .single();

      if (userError || !userData) {
        throw new Error("User not found");
      }

      // Verify password (simple check - in production use proper hashing)
      if (userData.password !== password) {
        throw new Error("Invalid password");
      }

      // Create a session token manually
      const token = btoa(JSON.stringify({
        user_id: userData.user_id,
        username: userData.username,
        role: userData.role,
        email: userData.email,
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }));

      localStorage.setItem("token", token);
      setUser(userData);
      setSession({ access_token: token, user: userData });

      return { data: userData, error: null };
    } catch (error) {
      console.error("Sign in error:", error);
      return { data: null, error };
    }
  };

  const signUp = async (email, password, userData) => {
    try {
      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      // Create user profile in users table
      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .insert([
          {
            auth_id: authData.user?.id,
            email,
            name: userData.name,
            username: userData.username,
            role: userData.role || "student",
          },
        ])
        .select()
        .single();

      if (profileError) throw profileError;

      return { data: profileData, error: null };
    } catch (error) {
      console.error("Sign up error:", error);
      return { data: null, error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      setSession(null);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const getToken = () => {
    return session?.access_token || localStorage.getItem("token") || "";
  };

  const value = {
    user,
    session,
    loading,
    signIn,
    signInWithUsername,
    signUp,
    signOut,
    getToken,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

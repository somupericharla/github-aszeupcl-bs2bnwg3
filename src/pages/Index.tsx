
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Use a timeout to add a small delay for the animation
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000); // Updated to 2 seconds for better animation visibility
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div 
          className="bg-gradient-to-br from-edubridge-blue to-edubridge-purple p-6 rounded-2xl shadow-lg inline-block mb-6"
          animate={{ y: [0, -15, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <h1 className="text-6xl font-bold text-white">AI Saathi</h1>
        </motion.div>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Empowering rural education in India
        </motion.p>
        
        <motion.p 
          className="mt-4 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Connecting students, mentors, and opportunities
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="w-16 h-16 border-t-4 border-b-4 border-edubridge-purple border-solid rounded-full animate-spin"></div>
      </motion.div>
    </div>
  );
};

export default Index;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div className="relative overflow-hidden py-16 px-8 md:px-16 text-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '100% 50%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Find Your Perfect Product!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Browse our curated recommendations tailored just for you. Make smarter
          shopping decisions today!
        </p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <Link
            to="/register"
            className="bg-white text-blue-500 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg hover:bg-gray-100 transition">
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cta;

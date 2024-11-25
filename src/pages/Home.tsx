import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Heart className="w-24 h-24 text-pink-500 mx-auto mb-8" />
      </motion.div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Our Love Story
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A digital sanctuary for our memories, poems, and thoughts. Every moment with you is a treasure worth keeping.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Memories</h2>
          <p className="text-gray-600">Capture and relive our special moments together.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Poems</h2>
          <p className="text-gray-600">Words that express the depth of our love.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">Journal</h2>
          <p className="text-gray-600">Write and save your thoughts and feelings.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
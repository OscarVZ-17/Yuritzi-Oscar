import React from 'react';
import { motion } from 'framer-motion';

const poems = [
  {
    id: 1,
    title: "Love's Embrace",
    content: "In your eyes I see the stars,\nIn your smile the sun above,\nEvery moment spent with you,\nIs a moment filled with love."
  },
  {
    id: 2,
    title: "Forever Together",
    content: "Through storms and sunshine,\nThrough laughter and tears,\nOur love grows stronger,\nWith each passing year."
  }
];

const Poems = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Love Poems</h1>
      
      <div className="space-y-6">
        {poems.map((poem) => (
          <motion.div
            key={poem.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{poem.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{poem.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Poems;
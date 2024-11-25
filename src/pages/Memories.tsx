import React from 'react';
import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
    title: "Our First Date",
    date: "2023-01-15"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    title: "Beach Sunset",
    date: "2023-04-22"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b",
    title: "Winter Wonderland",
    date: "2023-12-25"
  }
];

const Memories = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Our Precious Memories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{memory.title}</h3>
              <p className="text-gray-600">{memory.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Memories;
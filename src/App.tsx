import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Poems from './pages/Poems';
import Journal from './pages/Journal';
import { Heart } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 pt-20"
        >
          <div className="flex justify-center mb-8">
            <Heart className="text-pink-500 w-8 h-8 animate-pulse" />
          </div>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/poems" element={<Poems />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </AnimatePresence>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
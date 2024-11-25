import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Save } from 'lucide-react';

const Journal = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('journal-entries');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newEntry, setNewEntry] = useState('');

  const saveEntry = () => {
    if (!newEntry.trim()) return;
    
    const entry = {
      id: Date.now(),
      content: newEntry,
      date: new Date().toISOString()
    };
    
    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('journal-entries', JSON.stringify(updatedEntries));
    setNewEntry('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Love Journal</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-32 p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        
        <button
          onClick={saveEntry}
          className="flex items-center justify-center w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Entry
        </button>
      </div>

      <div className="space-y-6">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <PenTool className="w-5 h-5 text-pink-500" />
              <span className="text-gray-500">
                {new Date(entry.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-line">{entry.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Journal;
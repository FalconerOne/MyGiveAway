"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WinnerCelebrationProps {
  trigger: boolean;
}

export default function WinnerCelebration({ trigger }: WinnerCelebrationProps) {
  useEffect(() => {
    if (trigger) {
      const audio = new Audio("/sounds/celebration.mp3");
      audio.play().catch(() => {});
    }
  }, [trigger]);

  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          key="celebration"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold text-orange-600 mb-4">🎉 Congratulations! 🎉</h2>
            <p className="text-gray-700">A winner has been finalized!</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

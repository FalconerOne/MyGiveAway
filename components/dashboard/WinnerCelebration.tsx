"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  trigger: boolean;
}

export default function WinnerCelebration({ trigger }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">🎉 Winner! 🎉</h2>
        <p className="text-gray-700">Congratulations to our lucky participant!</p>
      </div>
    </motion.div>
  );
}

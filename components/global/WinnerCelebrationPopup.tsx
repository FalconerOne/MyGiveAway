"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";

interface WinnerCelebrationProps {
  isActive: boolean;
}

export default function WinnerCelebration({ isActive }: WinnerCelebrationProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 5000); // auto-hide after 5s
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!show) return null;

  return <Confetti numberOfPieces={200} recycle={false} />;
}

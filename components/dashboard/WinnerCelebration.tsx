"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

interface WinnerCelebrationProps {
  trigger: boolean;
}

export default function WinnerCelebration({ trigger }: WinnerCelebrationProps) {
  useEffect(() => {
    if (trigger) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [trigger]);

  return null;
}

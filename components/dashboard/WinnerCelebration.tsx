"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

interface WinnerCelebrationProps {
  winnerName?: string;
  prize?: string;
  isActive?: boolean; // Only trigger for actual winners
}

export default function WinnerCelebration({ winnerName, prize, isActive = false }: WinnerCelebrationProps) {
  useEffect(() => {
    if (!isActive) return;

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({ ...defaults, particleCount: 5, origin: { x: Math.random(), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount: 3, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 250);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 z-50 pointer-events-none">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h2 className="text-orange-600 text-2xl font-bold mb-2">🎉 Congratulations!</h2>
        <p className="text-gray-800 font-semibold">{winnerName} won {prize}!</p>
      </div>
    </div>
  );
}

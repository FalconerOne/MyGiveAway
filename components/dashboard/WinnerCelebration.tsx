"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

interface WinnerCelebrationProps {
  winnerName?: string;
  prizeName?: string;
  trigger?: boolean;
}

export default function WinnerCelebration({ winnerName, prizeName, trigger }: WinnerCelebrationProps) {
  useEffect(() => {
    if (trigger) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow p-8 text-center max-w-md">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">🎉 Congratulations!</h2>
        <p className="text-gray-700 mb-2">{winnerName} just won {prizeName}!</p>
      </div>
    </div>
  );
}

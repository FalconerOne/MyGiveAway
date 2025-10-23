"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function WinnerCelebration({ winnerName }: { winnerName: string }) {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-green-600 mb-2">🎉 Congratulations!</h2>
      <p className="text-lg text-gray-700">Winner: {winnerName}</p>
    </div>
  );
}

"use client";

export default function PointsDisplay() {
  const points = 1200; // Replace with dynamic Supabase fetch

  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-orange-600 font-bold mb-2">Your Points</h3>
      <p className="text-3xl font-extrabold">{points}</p>
    </div>
  );
}

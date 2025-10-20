"use client";

export default function LeaderboardEnhanced() {
  const leaderboard = [
    { name: "Chinedu A.", points: 1500 },
    { name: "Oluwatobi E.", points: 1200 },
    { name: "Amaka F.", points: 1100 },
  ]; // Replace with Supabase fetch

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h3 className="text-orange-600 font-bold mb-4 text-center">Leaderboard</h3>
      <ul>
        {leaderboard.map((user, idx) => (
          <li key={idx} className="flex justify-between py-1 border-b border-gray-100">
            <span>{user.name}</span>
            <span>{user.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

export default function RecentActivityList() {
  const activities = [
    "Chinedu joined Giveaway #12",
    "Oluwatobi claimed ₦10,000 airtime",
    "Amaka joined Giveaway #14",
  ]; // Replace with Supabase fetch

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h3 className="text-orange-600 font-bold mb-4 text-center">Recent Activity</h3>
      <ul className="text-gray-700">
        {activities.map((act, idx) => (
          <li key={idx} className="py-1 border-b border-gray-100">
            {act}
          </li>
        ))}
      </ul>
    </div>
  );
}

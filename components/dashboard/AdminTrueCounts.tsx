"use client";

export default function AdminTrueCounts() {
  const totalUsers = 320;
  const totalGiveaways = 45;

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h3 className="text-orange-600 font-bold mb-4 text-center">Admin True Counts</h3>
      <div className="flex justify-around">
        <div>
          <p className="text-gray-500">Users</p>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </div>
        <div>
          <p className="text-gray-500">Giveaways</p>
          <p className="text-2xl font-bold">{totalGiveaways}</p>
        </div>
      </div>
    </div>
  );
}

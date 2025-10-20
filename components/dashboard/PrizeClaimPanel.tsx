"use client";

interface Props {
  userId: string;
}

export default function PrizeClaimPanel({ userId }: Props) {
  // Fetch claimed prizes from Supabase using userId
  const claimed = 2;

  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-orange-600 font-bold mb-2">Prizes Claimed</h3>
      <p className="text-3xl font-extrabold">{claimed}</p>
    </div>
  );
}

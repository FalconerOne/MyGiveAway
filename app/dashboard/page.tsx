"use client";

import { useState } from "react";
import PointsDisplay from "@/components/dashboard/PointsDisplay";
import ReferralsPanel from "@/components/dashboard/ReferralsPanel";
import PrizeClaimPanel from "@/components/dashboard/PrizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/LeaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/AdminTrueCounts";
import RecentActivityList from "@/components/dashboard/RecentActivityList";
import WinnerCelebration from "@/components/dashboard/WinnerCelebration";
import AdZoneDisplay from "@/components/global/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";

export default function DashboardPage() {
  const [showWinner, setShowWinner] = useState(false);

  // Trigger winner celebration (example: could be set from Supabase realtime)
  // For demonstration, we trigger manually
  const triggerWinner = () => setShowWinner(true);

  const user = { id: "user-uuid", role: "admin" }; // Replace with Supabase auth logic

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 py-12">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <PointsDisplay />
        <ReferralsPanel />
        <PrizeClaimPanel userId={user.id} />
      </div>

      <LeaderboardEnhanced />

      {user.role === "admin" && <AdminTrueCounts />}

      <div className="my-8 w-full max-w-4xl">
        <AdZoneDisplay zone="dashboard-top" />
      </div>

      <SkillLinkBanner />

      <RecentActivityList />

      <button
        onClick={triggerWinner}
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow hover:bg-orange-600 transition"
      >
        Trigger Winner Celebration
      </button>

      <WinnerCelebration trigger={showWinner} />
    </main>
  );
}

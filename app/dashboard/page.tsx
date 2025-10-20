"use client";

import { useState } from "react";
import PointsDisplay from "@/components/dashboard/PointsDisplay";
import ReferralsPanel from "@/components/dashboard/ReferralsPanel";
import PrizeClaimPanel from "@/components/dashboard/PrizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/LeaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/AdminTrueCounts";
import WinnerCelebration from "@/components/dashboard/WinnerCelebration";
import RecentActivityList from "@/components/dashboard/RecentActivityList";
import AdZoneDisplay from "@/components/global/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";

export default function DashboardPage() {
  const [winnerTriggered, setWinnerTriggered] = useState(false);
  const isAdmin = true; // Replace with actual role check

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12 flex flex-col items-center space-y-8">

      <h1 className="text-4xl font-bold text-orange-600 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <PointsDisplay />
        <ReferralsPanel />
        <PrizeClaimPanel />
        <LeaderboardEnhanced />
        {isAdmin && <AdminTrueCounts />}
        <RecentActivityList />
      </div>

      <button
        onClick={() => setWinnerTriggered(true)}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-orange-600 transition"
      >
        Trigger Winner Celebration
      </button>

      <WinnerCelebration trigger={winnerTriggered} />

      <div className="w-full max-w-4xl mt-10">
        <AdZoneDisplay zone="dashboard-top" />
      </div>

      <SkillLinkBanner />
    </main>
  );
}

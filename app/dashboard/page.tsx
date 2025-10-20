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

  // Example: trigger winner celebration (replace with Supabase logic)
  const triggerWinner = () => setWinnerTriggered(true);

  return (
    <main className="min-h-screen px-6 py-8 bg-gradient-to-b from-orange-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-8">Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <PointsDisplay />
        <ReferralsPanel />
        <PrizeClaimPanel />
        <LeaderboardEnhanced />
        <AdminTrueCounts />
      </section>

      <section className="mb-8">
        <button
          onClick={triggerWinner}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow font-medium transition"
        >
          Trigger Winner Celebration
        </button>
      </section>

      <WinnerCelebration trigger={winnerTriggered} />

      <section className="mb-8">
        <RecentActivityList />
      </section>

      <section className="mb-8">
        <AdZoneDisplay zone="dashboard-top" />
        <SkillLinkBanner />
      </section>
    </main>
  );
}

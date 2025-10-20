"use client";

import PointsDisplay from "@/components/dashboard/PointsDisplay";
import ReferralsPanel from "@/components/dashboard/ReferralsPanel";
import PrizeClaimPanel from "@/components/dashboard/PrizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/LeaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/AdminTrueCounts";
import RecentActivityList from "@/components/dashboard/RecentActivityList";
import WinnerCelebration from "@/components/dashboard/WinnerCelebration";
import AdZoneDisplay from "@/components/global/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";
import { useState } from "react";

export default function DashboardPage() {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6 flex flex-col gap-6 items-center">
      <PointsDisplay />
      <ReferralsPanel />
      <PrizeClaimPanel />
      <LeaderboardEnhanced />
      <AdminTrueCounts />
      <AdZoneDisplay zone="dashboard-top" />
      <SkillLinkBanner />
      <RecentActivityList />

      {/* Example trigger */}
      <button
        className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full shadow"
        onClick={() => setCelebrate(true)}
      >
        Trigger Winner Celebration
      </button>

      <WinnerCelebration winnerName="Chinedu A." prizeName="Smartwatch" trigger={celebrate} />
      <AdZoneDisplay zone="dashboard-bottom" />
    </main>
  );
}

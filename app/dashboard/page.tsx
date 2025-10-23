"use client";

import PointsDisplay from "@/components/dashboard/pointsDisplay";
import ReferralsPanel from "@/components/dashboard/referralsPanel";
import PrizeClaimPanel from "@/components/dashboard/prizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/leaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/adminTrueCounts";
import WinnerCelebration from "@/components/global/WinnerCelebration";
import AdZoneDisplay from "@/components/ads/adZoneDisplay";
import SkillLinkBanner from "@/components/global/skillLinkBanner";

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-orange-50 to-white space-y-12">

      <WinnerCelebration />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <PointsDisplay />
        <ReferralsPanel />
        <PrizeClaimPanel />
        <AdminTrueCounts />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LeaderboardEnhanced />
        <div className="space-y-6">
          <AdZoneDisplay zone="dashboard-top" />
          <SkillLinkBanner />
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto">
        <AdZoneDisplay zone="dashboard-bottom" />
      </section>

    </main>
  );
}

"use client";

import PointsDisplay from "@/components/dashboard/PointsDisplay";
import ReferralsPanel from "@/components/dashboard/ReferralsPanel";
import PrizeClaimPanel from "@/components/dashboard/PrizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/LeaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/AdminTrueCounts";
import WinnerCelebration from "@/components/global/WinnerCelebration";
import AdZoneDisplay from "@/components/ads/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";

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

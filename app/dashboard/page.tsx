// app/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import PointsDisplay from "@/components/dashboard/PointsDisplay";
import ReferralsPanel from "@/components/dashboard/ReferralsPanel";
import PrizeClaimPanel from "@/components/dashboard/PrizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/LeaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/AdminTrueCounts";
import WinnerCelebration from "@/components/dashboard/WinnerCelebration";
import RecentActivityList from "@/components/dashboard/RecentActivityList";
import SkillLinkBanner from "@/components/SkillLinkBanner";
import AdZone from "@/components/AdZone";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [winner, setWinner] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    async function fetchWinner() {
      const { data: winnerData } = await supabase.from("winners").select("*").order("created_at", { ascending: false }).limit(1).single();
      setWinner(winnerData);
    }
    fetchUser();
    fetchWinner();
  }, []);

  return (
    <main className="flex flex-col gap-8 px-4 md:px-16 mt-8">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <PointsDisplay userId={user?.id} />
        <ReferralsPanel userId={user?.id} />
        <PrizeClaimPanel userId={user?.id} />
      </motion.section>

      <LeaderboardEnhanced />

      {user?.role === "admin" && <AdminTrueCounts />}

      {winner && <WinnerCelebration winner={winner} />}

      <AdZone position="dashboard-top" priority="high" />
      <SkillLinkBanner priority="medium" />

      <RecentActivityList userId={user?.id} />
    </main>
  );
}

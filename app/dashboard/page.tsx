"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

import PrizeClaimPanel from "@/components/dashboard/PrizeClaimPanel";
import LeaderboardEnhanced from "@/components/dashboard/LeaderboardEnhanced";
import AdminTrueCounts from "@/components/dashboard/AdminTrueCounts";
import RecentActivityList from "@/components/dashboard/RecentActivityList";
import WinnerCelebration from "@/components/dashboard/WinnerCelebration";

import AdZoneDisplay from "@/components/global/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";

export default function DashboardPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [winnerTriggered, setWinnerTriggered] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const user = supabase.auth.user();
      if (user) {
        setUserId(user.id);
        // Example: check if user is admin
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        setIsAdmin(profile?.role === "admin");
      }
    }
    fetchUser();
  }, []);

  // Trigger winner celebration example
  useEffect(() => {
    const timeout = setTimeout(() => setWinnerTriggered(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-orange-50 to-white flex flex-col gap-12 items-center">

      <motion.h1
        className="text-4xl md:text-6xl font

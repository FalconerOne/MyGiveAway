"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { motion } from "framer-motion";
import { useGlobalToast } from "@/components/ui/GlobalToastProvider";

interface WinnerBroadcast {
  giveaway_id: string;
  title: string;
  winner_message: string;
  timestamp: string;
}

interface GlobalWinnerListenerProps {
  userRole: "admin" | "supervisor" | "activated" | "guest";
}

export default function GlobalWinnerListener({ userRole }: GlobalWinnerListenerProps) {
  const supabase = createClientComponentClient();
  const { showToast } = useGlobalToast();
  const [announcement, setAnnouncement] = useState<WinnerBroadcast | null>(null);
  const [confettiVisible, setConfettiVisible] = useState(false);

  useEffect(() => {
    const channel = supabase
      .channel("winner-broadcast")
      .on("broadcast", { event: "winner_announcement" }, (payload) => {
        const data = payload.payload as WinnerBroadcast;
        let visibleMsg = data.winner_message;

        if (userRole === "guest") visibleMsg = "🎉 A winner has just been announced!";
        if (userRole === "supervisor") visibleMsg = `🏆 Winner finalized for "${data.title}"!`;

        setAnnouncement({ ...data, winner_message: visibleMsg });
        showToast(visibleMsg, "success");
        triggerConfetti();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, userRole, showToast]);

  const triggerConfetti = () => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 6000);
  };

  if (!announcement) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white px-6 py-3 rounded-2xl shadow-lg z-50 text-center"
      >
        {announcement.winner_message}
      </motion.div>

      {confettiVisible && (
        <motion.div
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <canvas id="confetti-canvas" className="w-full h-full"></canvas>
        </motion.div>
      )}
    </>
  );
}

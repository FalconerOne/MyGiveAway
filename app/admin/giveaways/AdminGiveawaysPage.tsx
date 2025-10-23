"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useGlobalToast } from "@/components/ui/globalToastProvider";
import { motion } from "framer-motion";

interface Giveaway {
  id: string;
  title: string;
  status: string;
  winner_id: string | null;
}

interface WinnerBroadcast {
  giveaway_id: string;
  title: string;
  winner_message: string;
  timestamp: string;
}

export default function AdminGiveawaysPage() {
  const supabase = createClientComponentClient();
  const { showToast } = useGlobalToast();
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [loading, setLoading] = useState(true);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [broadcastMessage, setBroadcastMessage] = useState<WinnerBroadcast | null>(null);

  useEffect(() => {
    const fetchGiveaways = async () => {
      const { data, error } = await supabase.from("giveaways").select("*");
      if (error) {
        console.error(error);
        showToast("Error loading giveaways", "error");
      } else {
        setGiveaways(data || []);
      }
      setLoading(false);
    };

    fetchGiveaways();
  }, [supabase, showToast]);

  useEffect(() => {
    const channel = supabase
      .channel("winner-broadcast")
      .on("broadcast", { event: "winner_announcement" }, (payload) => {
        const data = payload.payload as WinnerBroadcast;
        setBroadcastMessage(data);
        triggerConfetti();
        showToast(data.winner_message, "success");
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, showToast]);

  const finalizeWinner = async (giveawayId: string) => {
    const { data, error } = await supabase
      .from("giveaways")
      .update({ status: "completed", winner_id: "randomized" })
      .eq("id", giveawayId)
      .select()
      .single();

    if (error) {
      console.error(error);
      showToast("Error finalizing winner", "error");
      return;
    }

    setGiveaways((prev) =>
      prev.map((g) =>
        g.id === giveawayId ? { ...g, status: "completed", winner_id: data.winner_id } : g
      )
    );

    const message: WinnerBroadcast = {
      giveaway_id: giveawayId,
      title: data.title,
      winner_message: `🎉 "${data.title}" giveaway has a winner! Celebrate now!`,
      timestamp: new Date().toISOString(),
    };

    await supabase.channel("winner-broadcast").send({
      type: "broadcast",
      event: "winner_announcement",
      payload: message,
    });

    showToast("🎉 Winner finalized and broadcast sent!", "success");
    triggerConfetti();
  };

  const triggerConfetti = () => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 5000);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Admin Giveaways Management</h1>

      {loading ? (
        <p>Loading giveaways...</p>
      ) : giveaways.length === 0 ? (
        <p>No giveaways found.</p>
      ) : (
        <div className="grid gap-4">
          {giveaways.map((giveaway) => (
            <div
              key={giveaway.id}
              className="border rounded-xl p-4 bg-white shadow-sm flex items-center justify-between"
            >
              <div>
                <h2 className="font-semibold text-lg">{giveaway.title}</h2>
                <p className="text-sm text-gray-500">Status: {giveaway.status}</p>
              </div>

              {giveaway.status === "active" ? (
                <but

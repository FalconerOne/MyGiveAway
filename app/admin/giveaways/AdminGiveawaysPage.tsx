"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useGlobalToast } from "@/components/ui/GlobalToastProvider";
import { motion } from "framer-motion";

interface Giveaway {
  id: string;
  title: string;
  status: string;
  winner_id: string | null;
}

export default function AdminGiveawaysPage() {
  const supabase = createClientComponentClient();
  const { showToast } = useGlobalToast();
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [loading, setLoading] = useState(true);
  const [confettiVisible, setConfettiVisible] = useState(false);

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

    showToast("🎉 Winner finalized successfully!", "success");
    triggerConfetti();
  };

  const triggerConfetti = () => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 4500);
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
                <button
                  onClick={() => finalizeWinner(giveaway.id)}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Finalize Winner
                </button>
              ) : (
                <span className="text-green-600 font-medium">Completed</span>
              )}
            </div>
          ))}
        </div>
      )}

      {confettiVisible && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <canvas id="confetti-canvas" className="w-full h-full"></canvas>
        </motion.div>
      )}
    </div>
  );
}

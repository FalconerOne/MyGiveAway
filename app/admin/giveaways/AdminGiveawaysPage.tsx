"use client";

import React, { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/providers/GlobalToastProvider";
import Confetti from "react-confetti";

export default function AdminGiveawaysPage() {
  const supabase = createClientComponentClient();
  const { showToast } = useToast();

  const [giveaways, setGiveaways] = useState<any[]>([]);
  const [selectedWinner, setSelectedWinner] = useState<any | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const fetchGiveaways = async () => {
      const { data, error } = await supabase.from("giveaways").select("*");
      if (!error && data) setGiveaways(data);
    };
    fetchGiveaways();
  }, [supabase]);

  const finalizeWinner = async (giveawayId: string) => {
    const { data: entries, error } = await supabase
      .from("entries")
      .select("*")
      .eq("giveaway_id", giveawayId);

    if (error || !entries || entries.length === 0) {
      showToast("No valid entries", "There are no participants for this giveaway.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * entries.length);
    const winner = entries[randomIndex];

    const { error: updateError } = await supabase
      .from("giveaways")
      .update({ winner_id: winner.user_id, status: "completed" })
      .eq("id", giveawayId);

    if (updateError) {
      showToast("Error", "Failed to finalize winner.");
      return;
    }

    setSelectedWinner(winner);
    setShowConfetti(true);
    showToast("🎉 Winner Finalized!", `User ${winner.user_id} has won the giveaway!`);

    setTimeout(() => setShowConfetti(false), 7000);
  };

  return (
    <div className="p-6">
      {showConfetti && <Confetti />}
      <h1 className="text-2xl font-bold mb-4">Admin Giveaways</h1>
      {giveaways.length === 0 ? (
        <p>No giveaways found.</p>
      ) : (
        <div className="space-y-4">
          {giveaways.map((g) => (
            <div key={g.id} className="p-4 border rounded-md shadow-sm flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{g.title}</h2>
                <p className="text-sm text-gray-600">Status: {g.status}</p>
              </div>
              <Button
                onClick={() => finalizeWinner(g.id)}
                disabled={g.status === "completed"}
              >
                {g.status === "completed" ? "Winner Finalized" : "Finalize Winner"}
              </Button>
            </div>
          ))}
        </div>
      )}
      {selectedWinner && (
        <div className="mt-6 p-4 bg-green-100 rounded-md">
          <h2 className="text-lg font-semibold">Latest Winner</h2>
          <p>User ID: {selectedWinner.user_id}</p>
        </div>
      )}
    </div>
  );
}

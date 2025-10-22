"use client";

import React, { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import Confetti from "react-confetti";

interface Giveaway {
  id: string;
  title: string;
  prize_name: string;
  status: string;
}

export default function AdminGiveawaysPage() {
  const supabase = createClientComponentClient();
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", description: "" });
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    loadGiveaways();
  }, []);

  async function loadGiveaways() {
    const { data, error } = await supabase.from("giveaways").select("*").order("created_at", { ascending: false });
    if (!error && data) setGiveaways(data);
  }

  async function finalizeWinner(id: string) {
    setLoading(true);
    const { data, error } = await supabase
      .from("giveaways")
      .update({ status: "winner_finalized" })
      .eq("id", id)
      .select();

    if (error) {
      setToastMessage({ title: "Error", description: "Could not finalize winner." });
      setToastOpen(true);
    } else {
      setToastMessage({ title: "Winner Finalized!", description: "Confetti celebration triggered!" });
      setToastOpen(true);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 5000);
      await loadGiveaways();
    }

    setLoading(false);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Giveaways Management</h1>

      <div className="grid gap-4">
        {giveaways.map((g) => (
          <div key={g.id} className="p-4 bg-white rounded-xl shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{g.title}</p>
              <p className="text-sm text-gray-600">{g.prize_name}</p>
            </div>
            <Button
              disabled={loading || g.status === "winner_finalized"}
              onClick={() => finalizeWinner(g.id)}
            >
              {g.status === "winner_finalized" ? "Winner Finalized" : "Finalize Winner"}
            </Button>
          </div>
        ))}
      </div>

      <Toast
        title={toastMessage.title}
        description={toastMessage.description}
        open={toastOpen}
        onOpenChange={setToastOpen}
      />

      {confetti && <Confetti numberOfPieces={300} recycle={false} />}
    </div>
  );
}

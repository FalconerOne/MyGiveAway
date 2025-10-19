"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/config/supabase";
import { ToastWrapper, toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import GlobalCelebrationListener from "@/components/celebrations/GlobalCelebrationListener";
import { WinnerProvider } from "@/context/WinnerContext";
import { CSVLink } from "react-csv";

type Giveaway = {
  id: string;
  title: string;
  status: "active" | "ended";
  winner_id: string | null;
  winner_name: string | null;
  participants_count: number;
  prize_name: string;
};

type Participant = {
  id: string;
  name: string;
  email?: string;
  masked?: boolean;
};

export default function AdminGiveawaysPage() {
  const supabase = createClient();
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("guest");
  const [selectedGiveaway, setSelectedGiveaway] = useState<Giveaway | null>(null);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [exporting, setExporting] = useState(false);

  // Fetch user role
  useEffect(() => {
    async function fetchRole() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return setUserRole("guest");
      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();
      if (error || !data) setUserRole("guest");
      else setUserRole(data.role || "user");
    }
    fetchRole();
  }, []);

  // Fetch giveaways
  useEffect(() => {
    async function fetchGiveaways() {
      setLoading(true);
      const { data, error } = await supabase
        .from("giveaways")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) toast({ title: "Error fetching giveaways", description: error.message });
      else setGiveaways(data as Giveaway[]);
      setLoading(false);
    }
    fetchGiveaways();
  }, []);

  // Fetch participants for modal
  const fetchParticipants = async (giveawayId: string) => {
    const { data, error } = await supabase
      .from("participants")
      .select("*")
      .eq("giveaway_id", giveawayId)
      .order("created_at", { ascending: true });
    if (error) toast({ title: "Error fetching participants", description: error.message });
    else setParticipants(data as Participant[]);
  };

  // Finalize Winner
  const finalizeWinner = async (g: Giveaway) => {
    try {
      const winnerName = prompt(`Enter winner name for "${g.title}"`) || "";
      if (!winnerName) return;
      const winnerId = prompt(`Enter winner user ID for "${g.title}"`) || "";
      const { error } = await supabase
        .from("giveaways")
        .update({ winner_id: winnerId, winner_name: winnerName, status: "ended" })
        .eq("id", g.id);
      if (error) return toast({ title: "Error", description: error.message });

      toast({ title: "Winner finalized", description: `${winnerName} is now the winner!` });

      // Broadcast global celebration via Supabase Realtime
      await supabase.from("notifications").insert([
        {
          type: "winner_announcement",
          title: "🎉 Giveaway Winner!",
          message: `The giveaway "${g.title}" now has a winner: ${winnerName}`,
          target_user: null,
        },
      ]);

      setGiveaways((prev) =>
        prev.map((gv) =>
          gv.id === g.id ? { ...gv, winner_id: winnerId, winner_name: winnerName, status: "ended" } : gv
        )
      );
    } catch (err) {
      toast({ title: "Error finalizing winner", description: (err as Error).message });
    }
  };

  // Reset Winner
  const resetWinner = async (g: Giveaway) => {
    if (!confirm(`Reset winner for "${g.title}"? This cannot be undone.`)) return;
    try {
      const { error } = await supabase
        .from("giveaways")
        .update({ winner_id: null, winner_name: null, status: "active" })
        .eq("id", g.id);
      if (error) return toast({ title: "Error", description: error.message });

      toast({ title: "Winner reset", description: `"${g.title}" is now active.` });

      setGiveaways((prev) =>
        prev.map((gv) => (gv.id === g.id ? { ...gv, winner_id: null, winner_name: null, status: "active" } : gv))
      );
    } catch (err) {
      toast({ title: "Error resetting winner", description: (err as Error).message });
    }
  };

  // Open Participants Modal
  const openParticipantsModal = async (g: Giveaway) => {
    setSelectedGiveaway(g);
    await fetchParticipants(g.id);
  };

  return (
    <WinnerProvider>
      <ToastWrapper>
        <GlobalCelebrationListener userRole={userRole} />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Admin Giveaways Dashboard</h1>
          {loading && <p>Loading giveaways...</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {giveaways.map((g) => (
              <motion.div
                key={g.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`border rounded-lg p-4 shadow hover:shadow-lg transition ${
                  g.status === "ended" ? "border-green-400 bg-green-50" : "border-gray-200"
                }`}
              >
                <h2 className="font-semibold text-lg">{g.title}</h2>
                <p>Prize: {g.prize_name}</p>
                <p>Participants: {g.participants_count}</p>
                <p>
                  Status:{" "}
                  <span className={g.status === "ended" ? "text-green-600" : "text-gray-600"}>
                    {g.status.toUpperCase()}
                  </span>
                </p>
                <p>
                  Winner:{" "}
                  {g.winner_name
                    ? g.winner_name
                    : g.status === "ended"
                    ? "Unknown"
                    : "Not yet selected"}
                </p>
                <div className="flex gap-2 mt-3">
                  {g.status !== "ended" && (
                    <Button size="sm" onClick={() => finalizeWinner(g)}>
                      Finalize Winner
                    </Button>
                  )}
                  {g.status === "ended" && (
                    <Button size="sm" variant="destructive" onClick={() => resetWinner(g)}>
                      Reset Winner
                    </Button>
                  )}
                  <Button size="sm" onClick={() => openParticipantsModal(g)}>
                    View Participants
                  </Button>
                  {selectedGiveaway?.id === g.id && participants.length > 0 && (
                    <CSVLink
                      data={participants}
                      filename={`${g.title}_participants.csv`}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                    >
                      Export CSV
                    </CSVLink>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Participants Modal */}
          {selectedGiveaway && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h3 className="text-lg font-bold mb-3">
                  Participants - {selectedGiveaway.title}
                </h3>
                <ul className="list-disc pl-5 max-h-60 overflow-y-auto">
                  {participants.map((p) => (
                    <li key={p.id}>{p.masked && userRole === "guest" ? "********" : p.name}</li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-end gap-2">
                  <Button onClick={() => setSelectedGiveaway(null)}>Close</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </ToastWrapper>
    </WinnerProvider>
  );
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ReferralsPanel() {
  const [referrals, setReferrals] = useState<number>(0);

  useEffect(() => {
    async function fetchReferrals() {
      const user = supabase.auth.user();
      if (!user) return;

      const { count } = await supabase
        .from("referrals")
        .select("*", { count: "exact" })
        .eq("referrer_id", user.id);

      if (count) setReferrals(count);
    }

    fetchReferrals();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm text-center">
      <h3 className="text-orange-600 font-bold text-xl mb-2">Your Referrals</h3>
      <p className="text-3xl font-extrabold text-gray-800">{referrals}</p>
    </div>
  );
}

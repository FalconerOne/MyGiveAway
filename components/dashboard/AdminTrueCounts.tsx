"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminTrueCounts() {
  const [userCount, setUserCount] = useState(0);
  const [referralCount, setReferralCount] = useState(0);

  useEffect(() => {
    async function fetchCounts() {
      const { count: users } = await supabase.from("profiles").select("*", { count: "exact" });
      const { count: referrals } = await supabase.from("referrals").select("*", { count: "exact" });

      if (users) setUserCount(users);
      if (referrals) setReferralCount(referrals);
    }

    fetchCounts();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm mx-auto text-center">
      <h3 className="text-orange-600 font-bold mb-2">Admin True Counts</h3>
      <p>Total Users: <span className="font-semibold">{userCount}</span></p>
      <p>Total Referrals: <span className="font-semibold">{referralCount}</span></p>
    </div>
  );
}

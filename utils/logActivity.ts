import { createClient } from "@/config/supabase";

type ActivityLogProps = {
  admin_id: string;
  giveaway_id: string;
  action_type: "finalize" | "reset" | "view_participants";
  notes?: string;
};

export default async function logActivity({ admin_id, giveaway_id, action_type, notes }: ActivityLogProps) {
  const supabase = createClient();
  const { error } = await supabase.from("activity_log").insert([
    {
      admin_id,
      giveaway_id,
      action_type,
      notes,
      created_at: new Date().toISOString(),
    },
  ]);
  if (error) console.error("Activity log error:", error.message);
}

import { NextResponse } from "next/server";
import { createClient } from "@/config/supabase";

export async function GET(req: Request) {
  // Check authorization
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient();

  try {
    // Example: Delete notifications older than 30 days
    const { error } = await supabase
      .from("notifications")
      .delete()
      .lt("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

    if (error) throw error;

    return NextResponse.json({ ok: true, message: "Cleanup completed" });
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 });
  }
}

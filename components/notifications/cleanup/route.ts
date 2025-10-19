import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/config/supabase";

export async function GET(req: NextRequest) {
  try {
    const supabase = createClient();

    // Delete notifications older than 1 minute
    const { error } = await supabase
      .from("notifications")
      .delete()
      .lt("created_at", new Date(Date.now() - 60 * 1000).toISOString());

    if (error) return NextResponse.json({ success: false, error: error.message });

    return NextResponse.json({ success: true, message: "Old notifications cleaned." });
  } catch (err) {
    return NextResponse.json({ success: false, error: (err as Error).message });
  }
}

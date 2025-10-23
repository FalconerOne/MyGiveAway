"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/config/supabase";
import { toast } from "@/components/ui/use-toast";
import GlobalCelebrationListener from "@/components/celebrations/globalCelebrationListener";

type Notification = {
  id: string;
  type: string;
  title: string;
  message: string;
  target_user: string | null;
  created_at: string;
};

export default function NotificationListener({ userRole }: { userRole: string }) {
  const supabase = createClient();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    async function fetchNotifications() {
      const { data, error } = await supabase
        .from("notifications")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setNotifications(data);
    }
    fetchNotifications();

    const subscription = supabase
      .from("notifications")
      .on("INSERT", (payload) => {
        setNotifications((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => supabase.removeSubscription(subscription);
  }, []);

  // Auto-remove expired notifications (older than 1 minute)
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) =>
        prev.filter(
          (n) => new Date(n.created_at).getTime() > Date.now() - 60 * 1000
        )
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Display notifications as toasts
  useEffect(() => {
    notifications.forEach((n) => {
      // Only show for admin/activated users or if guest visibility allows
      if (n.target_user === null || userRole === "admin" || userRole === "activated") {
        toast({ title: n.title, description: n.message });
      }
    });
  }, [notifications, userRole]);

  return (
    <>
      {/* Global celebrations for winners */}
      <GlobalCelebrationListener userRole={userRole} />
    </>
  );
}

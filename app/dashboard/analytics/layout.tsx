"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { createClient } from "@supabase/supabase-js";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface Settings {
  show_banner: boolean;
  maintenance_mode: boolean;
  system_message: string;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [settings, setSettings] = useState<Settings>({
    show_banner: false,
    maintenance_mode: false,
    system_message: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    async function loadUserAndSettings() {
      try {
        // Fetch app settings
        const { data: settingsData } = await supabase
          .from("app_settings")
          .select("key, value, value_text");

        if (settingsData) {
          const mapped: Record<string, any> = {};
          settingsData.forEach((s) => {
            mapped[s.key] = s.value ?? s.value_text;
          });

          setSettings({
            show_banner: mapped.show_banner ?? false,
            maintenance_mode: mapped.maintenance_mode ?? false,
            system_message: mapped.system_message ?? "",
          });
        }

        // Fetch current user and role
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();

          if (profile && profile.role === "admin") {
            setIsAdmin(true);
          }
        }
      } catch (error) {
        console.error("Error loading dashboard settings:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUserAndSettings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Optionally render a banner or system message */}
      {settings.show_banner && (
        <div className="bg-orange-100 text-orange-700 p-4 mb-4 rounded">
          {settings.system_message}
        </div>
      )}

      {/* Render children content */}
      {children}
    </div>
  );
}

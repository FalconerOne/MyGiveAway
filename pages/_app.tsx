import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingShareBar from "@/components/floatingShareBar";
import ScrollToTop from "@/components/scrollToTop";
import ReminderBanner from "@/components/reminderBanner";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ToastWrapper } from "@/components/ui/toast";
import MaintenancePreviewBanner from "@/components/maintenancePreviewBanner"; // ✅ added

export default function App({ Component, pageProps }: AppProps) {
  // ✅ Optional: refresh session silently
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getSession();
    });
    return () => listener?.subscription.unsubscribe();
  }, []);

  return (
    <ToastWrapper>
      {/* ✅ Global Maintenance Preview Ribbon */}
      <MaintenancePreviewBanner />

      <main className="min-h-screen flex flex-col bg-gray-50 font-[Segoe_UI]">
        <ReminderBanner />
        <Header />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
        <FloatingShareBar />
        <ScrollToTop />
      </main>
    </ToastWrapper>
  );
}

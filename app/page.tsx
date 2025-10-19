// app/page.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import PrizeCard from "@/components/PrizeCard";
import SkillLinkBanner from "@/components/SkillLinkBanner";
import AdZone from "@/components/AdZone";
import WinnersCarousel from "@/components/WinnersCarousel";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [prizes, setPrizes] = useState<any[]>([]);
  const [winners, setWinners] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: prizesData } = await supabase.from("prizes").select("*").order("created_at", { ascending: false }).limit(6);
      setPrizes(prizesData || []);

      const { data: winnersData } = await supabase.from("winners").select("*").order("created_at", { ascending: false }).limit(5);
      setWinners(winnersData || []);
    }
    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-12 px-4 md:px-16">
      <section className="grid md:grid-cols-3 gap-6 mt-8">
        {prizes.map((prize) => (
          <PrizeCard key={prize.id} prize={prize} />
        ))}
      </section>

      <SkillLinkBanner priority="high" />

      <AdZone position="mid" priority="medium" />

      <motion.section 
        className="mt-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Recent Winners</h2>
        <WinnersCarousel winners={winners} />
      </motion.section>

      <PartnersSection />

      <AdZone position="bottom" priority="medium" />

      <Footer />
    </main>
  );
}

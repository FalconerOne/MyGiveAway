// app/marketing/about/page.tsx
import { motion } from "framer-motion";
import CommunityCard from "@/components/CommunityCard";
import MissionCard from "@/components/MissionCard";
import TeamCard from "@/components/TeamCard";
import TimelineCard from "@/components/TimelineCard";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-12 px-4 md:px-16 mt-8">
      <motion.section initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <CommunityCard />
      </motion.section>

      <motion.section initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <MissionCard />
        <CTAButton href="/marketing/edit-mission" text="Edit Mission" />
      </motion.section>

      <motion.section initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <TeamCard />
        <CTAButton href="/marketing/edit-team" text="Edit Team" />
      </motion.section>

      <motion.section initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <TimelineCard />
        <CTAButton href="/marketing/edit-timeline" text="Edit Timeline" />
      </motion.section>

      <Footer />
    </main>
  );
}

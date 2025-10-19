"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/global/CTAButton";

interface CardProps {
  title: string;
  description: string;
}

function InfoCard({ title, description }: CardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-xl font-bold text-orange-600">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-orange-50 to-white flex flex-col gap-12 items-center">

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About MyGiveAway
      </motion.h1>

      {/* 📌 Community / Mission / Team / Timeline Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        <InfoCard title="Community" description="A vibrant community connecting winners, participants, and supporters of MyGiveAway." />
        <InfoCard title="Mission" description="To create fun, fair, and exciting giveaways while promoting engagement and rewards." />
        <InfoCard title="Team" description="Our dedicated team drives innovation, engagement, and ensures transparency in all giveaways." />
        <InfoCard title="Timeline" description="From inception to today, our journey highlights growth, milestones, and major successes." />
      </section>

      {/* 🎯 CTA Buttons to Edit Sections */}
      <section className="flex flex-wrap justify-center gap-4">
        <CTAButton href="/dashboard/edit-mission" text="Edit Mission" variant="primary" />
        <CTAButton href="/dashboard/edit-team" text="Edit Team" variant="primary" />
        <CTAButton href="/dashboard/edit-timeline" text="Edit Timeline" variant="primary" />
      </section>

    </main>
  );
}

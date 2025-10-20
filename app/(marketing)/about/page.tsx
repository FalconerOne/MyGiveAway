"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/global/CTAButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-8"
      >
        About MyGiveAway
      </motion.h1>

      {/* Community / Mission / Team / Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-orange-600 font-bold mb-2">Community</h3>
          <p className="text-gray-700 mb-4">Connecting users across Africa to exciting rewards and opportunities.</p>
          <CTAButton href="/marketing/edit-community" text="Edit Community" variant="secondary" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-orange-600 font-bold mb-2">Mission</h3>
          <p className="text-gray-700 mb-4">Empower users through giveaways while supporting charity and skill growth.</p>
          <CTAButton href="/marketing/edit-mission" text="Edit Mission" variant="secondary" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-orange-600 font-bold mb-2">Team</h3>
          <p className="text-gray-700 mb-4">Meet the creators and administrators powering MyGiveAway.</p>
          <CTAButton href="/marketing/edit-team" text="Edit Team" variant="secondary" />
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-orange-600 font-bold mb-2">Timeline</h3>
          <p className="text-gray-700 mb-4">Our journey so far and the milestones ahead.</p>
          <CTAButton href="/marketing/edit-timeline" text="Edit Timeline" variant="secondary" />
        </div>
      </div>
    </main>
  );
}

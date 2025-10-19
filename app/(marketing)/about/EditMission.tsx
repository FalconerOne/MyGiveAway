"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EditMission() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-5"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At <strong>MyGiveAway</strong>, we believe every act of giving should also be an act of joy.  
          Our mission is to create a trusted digital space where people can win exciting prizes, discover brands that care, and contribute to causes that matter.
        </p>
        <p className="text-gray-700">
          Through fairness, transparency, and innovation, we make sure every giveaway is more than luck — it’s a shared experience of celebration.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <Image
          src="/images/mission-vision.svg"
          alt="Mission illustration"
          width={400}
          height={300}
          className="rounded-xl shadow-md"
        />
      </motion.div>
    </section>
  );
}


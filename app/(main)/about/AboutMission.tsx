// components/about/AboutMission.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our mission is to make giving exciting, transparent, and rewarding.
            MyGiveAway empowers communities to run giveaways that celebrate
            winners while raising awareness and support for great causes.  
          </p>
          <p className="text-lg leading-relaxed">
            Through secure participation, verified results, and community-driven
            engagement, we create joy while ensuring fairness — every single
            time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/mission-illustration.svg"
            alt="Mission Illustration"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

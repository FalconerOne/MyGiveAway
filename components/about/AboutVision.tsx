// components/about/AboutVision.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutVision() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 flex justify-center"
        >
          <img
            src="/images/vision-illustration.svg"
            alt="Vision Illustration"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-6">
            We envision a global platform where generosity and excitement go hand in hand.
            MyGiveAway is building an ecosystem that connects people through shared
            moments of joy, meaningful rewards, and community-driven causes.
          </p>
          <p className="text-lg leading-relaxed">
            Our long-term goal is to make every giveaway an opportunity to create impact —
            supporting both winners and the world around them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

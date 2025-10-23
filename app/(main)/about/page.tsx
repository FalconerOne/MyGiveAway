"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AdZoneDisplay from "@/components/ads/adZoneDisplay";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-800">
      {/* 🧭 Header Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-orange-600 mb-4"
        >
          About <span className="text-yellow-500">MyGiveAway</span>
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Empowering everyday people with opportunities to win, give back, and spread joy — all while supporting causes that matter.
        </p>
      </section>

      {/* 🌟 Vision & Mission Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/vision.jpg"
            alt="Our Vision"
            width={600}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To create Africa’s most trusted and exciting giveaway ecosystem that merges fun, transparency, and social impact — 
            giving back to communities while rewarding participation.
          </p>

          <h3 className="text-2xl font-semibold text-orange-500 mt-8 mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            We aim to bridge happiness and purpose — ensuring every giveaway directly suppor

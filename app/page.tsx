"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AdZoneDisplay from "@/components/global/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-50 to-white text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-orange-600 mb-3"
      >
        MyGiveAway
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6"
      >
        GiveAwayz
      </motion.h2>

      <p className="text-sm text-gray-500 mb-6">
        Powered by <span className="font-semibold text-orange-600">Solarize Solutions Nig Ltd</span>
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-lg max-w-xl mb-8"
      >
        Join the fun, win <span className="text-orange-600 font-semibold">tablets, phones, smartwatches, cash rewards</span>, hoodies, t-shirts and much more every month!
      </motion.p>

      <div className="flex gap-4 flex-wrap justify-center mb-8">
        <Link
          href="/register"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md font-medium transition"
        >
          Join the Giveaway
        </Link>
        <Link
          href="/dashboard"
          className="border border-orange-400 text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-full shadow-md font-medium transition"
        >
          Go to Dashboard

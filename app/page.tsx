"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AdZoneDisplay from "@/components/ads/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";
import Card from "@/components/global/Card";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-50 to-white text-center px-6">

      <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold text-orange-600 mb-3">
        MyGiveAway
      </motion.h1>

      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
        GiveAwayz
      </motion.h2>

      <p className="text-sm text-gray-500 mb-6">
        Powered by <span className="font-semibold text-orange-600">Solarize Solutions Nig Ltd</span>
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-8">
        <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md font-medium transition">
          Join the Giveaway
        </Link>
        <Link href="/dashboard" className="border border-orange-400 text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-full shadow-md font-medium transition">
          Go to Dashboard
        </Link>
      </div>

      <section className="w-full max-w-5xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-orange-600 mb-4">This Month’s Prizes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
          <Image src="/prizes/prize1.jpg" alt="Prize 1" width={160} height={160} className="rounded-lg shadow" loading="lazy"/>
          <Image src="/prizes/prize2.jpg" alt="Prize 2" width={160} height={160} className="rounded-lg shadow" loading="lazy"/>
          <Image src="/prizes/prize3.jpg" alt="Prize 3" width={160} height={160} className="rounded-lg shadow" loading="lazy"/>
          <Image src="/images/heart-heroes-logo.png" alt="Special Bonus" width={160} height={160} className="rounded-lg shadow" loading="lazy"/>
        </div>
      </section>

      <motion.div animate={{ x: [0, -200, 0] }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="text-orange-500 font-semibold text-lg mb-8">
        Join the fun • Win Big • Every Week/Month • Win Data/Airtime Weekly • Join the fun • Win Big • Every Week/Month • Win Data/Airtime Weekly
      </motion.div>

      <div className="w-full max-w-4xl mb-10">
        <AdZoneDisplay zone="landing-mid" />
      </div>

      <SkillLinkBanner />

      <section className="w-full bg-orange-50 py-8 border-y border-orange-200 mb-10">
        <h3 className="text-xl font-semibold text-orange-600 mb-4">Recent Winners</h3>
        <p className="text-gray-700">
          🎉 <strong>Chinedu A.</strong> just won a Smartwatch! <br />
          🎁 <strong>Oluwatobi E.</strong> claimed ₦10,000 airtime voucher!
        </p>
      </section>

      <section className="w-full bg-orange-50 py-12 border-t border-orange-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">Our Partners</h2>
          <p className="text-gray-700 mb-8">
            Proudly supported by organizations and brands that believe in empowerment, growth, and giving back.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
            <a href="https://solarizesolutions.com.ng" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
              <Image src="/partners/solarize.png" alt="Solarize Solutions" width={120} height={50} className="mx-auto" loading="lazy"/>
            </a>
            <a href="https://falconsubs.com.ng" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
              <Image src="/partners/falconsubs.jpg" alt="FalconSubs" width={120} height={50} className="mx-auto" loading="lazy"/>
            </a>
            <a href="https://cfortnmore.com.ng" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
              <Image src="/partners/cfort.png" alt="Cfort & More" width={120} height={50} className="mx-auto" loading="lazy"/>
            </a>
            <div className="text-gray-400 italic">Coming soon…</div>
            <div className="text-gray-400 italic">Coming soon…</div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl mb-10">
        <AdZoneDisplay zone="landing-bottom" />
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        App designed by <span className="text-orange-600 font-semibold">FalconerOne Technologies</span>
      </footer>
    </main>
  );
}

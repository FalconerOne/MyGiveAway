"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function MarketingFooter() {
  return (
    <footer className="w-full border-t border-orange-200 bg-orange-50 py-10 mt-10 text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* 🌐 Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-6"
        >
          <Link
            href="https://twitter.com/MyGiveAwayApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 text-2xl transition"
            aria-label="Follow MyGiveAway on Twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://facebook.com/MyGiveAwayApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 text-2xl transition"
            aria-label="Follow MyGiveAway on Facebook"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://linkedin.com/company/mygiveaway"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 text-2xl transition"
            aria-label="Follow MyGiveAway on LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </motion.div>

        {/* 🔁 Funnel Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <Link
            href="https://skilllinkafrica.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700 hover:underline font-semibold"
          >
            🔁 Explore SkillLink Africa — Turn your skills into income!
          </Link>
        </motion.div>

        {/* ⚙️ Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-orange-600 font-semibold">MyGiveAway</span>. 
          All rights reserved. Built by{" "}
          <Link
            href="https://falconerone.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:underline font-semibold"
          >
            FalconerOne Technologies
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

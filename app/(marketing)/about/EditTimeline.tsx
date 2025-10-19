"use client";

import { motion } from "framer-motion";
import { Clock, Rocket, Star, Heart } from "lucide-react";

export default function EditTimeline() {
  const milestones = [
    {
      year: "2023",
      title: "The Idea",
      desc: "MyGiveAway was born out of a passion for blending social fun with meaningful giving.",
      icon: <LightIcon icon={<Rocket />} />,
    },
    {
      year: "2024",
      title: "Beta Launch",
      desc: "We launched our beta version, connecting early users and charities across Nigeria.",
      icon: <LightIcon icon={<Star />} />,
    },
    {
      year: "2025",
      title: "Global Community",
      desc: "Now, we’re growing rapidly, expanding across Africa and integrating with SkillLinkAfrica.ng.",
      icon: <LightIcon icon={<Heart />} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          Our Journey
        </motion.h2>

        <div className="relative border-l-4 border-pink-500 pl-8">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-pink-100 text-pink-600 rounded-full p-2">
                  <Clock className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-semibold">{m.year} — {m.title}</h3>
              </div>
              <p className="text-gray-700 ml-10">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LightIcon({ icon }: { icon: React.ReactNode }) {
  return <span className="text-pink-500">{icon}</span>;
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Gift } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          About <span className="text-pink-600">MyGiveAway</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-10"
        >
          Join, Win, and track GiveAways that delight you & support charity.
          We believe in fun, fairness, and community-driven giving.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Users className="w-10 h-10 text-pink-500 mx-auto" />,
              title: "Community First",
              desc: "We connect thousands of participants across Africa through engaging, transparent giveaways.",
            },
            {
              icon: <Gift className="w-10 h-10 text-green-500 mx-auto" />,
              title: "Fair Rewards",
              desc: "Everyone stands a chance to win — every participation helps others through charity links.",
            },
            {
              icon: <Heart className="w-10 h-10 text-red-500 mx-auto" />,
              title: "Giving Back",
              desc: "A portion of our platform earnings supports real charities, empowering local communities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <Card className="shadow-md rounded-2xl hover:shadow-lg transition p-6">
                <CardContent>
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-x-4"
        >
          <Link href="/(marketing)/about/EditMission">
            <Button variant="default">Our Mission</Button>
          </Link>
          <Link href="/(marketing)/about/EditTeam">
            <Button variant="outline">Meet the Team</Button>
          </Link>
          <Link href="/(marketing)/about/EditTimeline">
            <Button variant="ghost">Our Journey</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

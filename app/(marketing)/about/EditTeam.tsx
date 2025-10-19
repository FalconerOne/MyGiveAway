"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Joseph Falon",
    role: "Founder & Project Director",
    image: "/team/founder.jpg",
  },
  {
    name: "Sarah Chidi",
    role: "Creative Director",
    image: "/team/creative.jpg",
  },
  {
    name: "David Enem",
    role: "Tech Lead",
    image: "/team/techlead.jpg",
  },
  {
    name: "Grace Ihenacho",
    role: "Community Relations",
    image: "/team/community.jpg",
  },
];

export default function EditTeam() {
  return (
    <section className="bg-orange-50 py-16 border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-orange-600 mb-10"
        >
          Meet the Team
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <h3 className="font-semibold text-orange-700">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


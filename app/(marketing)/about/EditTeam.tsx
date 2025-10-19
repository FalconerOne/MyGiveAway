"use client";

import { motion } from "framer-motion";

const teamMembers = [
  { name: "Chinedu A.", role: "CEO", image: "/team/chinedu.jpg" },
  { name: "Oluwatobi E.", role: "CTO", image: "/team/oluwatobi.jpg" },
  { name: "Fatima B.", role: "CMO", image: "/team/fatima.jpg" },
];

export default function EditTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-pink-600 mb-8"
      >
        Meet the Team
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

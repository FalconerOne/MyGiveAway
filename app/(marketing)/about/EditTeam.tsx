"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "John Joseph",
    role: "Founder & Project Lead",
    img: "/team/john.jpg",
  },
  {
    name: "Sarah Adeyemi",
    role: "Product Designer",
    img: "/team/sarah.jpg",
  },
  {
    name: "Michael Okoro",
    role: "Full Stack Developer",
    img: "/team/michael.jpg",
  },
];

export default function EditTeam() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-sm text-gray-600">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

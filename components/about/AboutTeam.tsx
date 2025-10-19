"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Joseph",
    role: "Founder & Lead Developer",
    image: "/images/team/john.jpg",
    description: "Oversees the MyGiveAway ecosystem and architecture.",
  },
  {
    name: "Sarah Daniels",
    role: "UI/UX Designer",
    image: "/images/team/sarah.jpg",
    description: "Crafts engaging user experiences for all platforms.",
  },
  {
    name: "Michael Smith",
    role: "Backend Engineer",
    image: "/images/team/michael.jpg",
    description: "Manages Supabase integrations and performance optimization.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Meet the MyGiveAway Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              {member.description && (
                <p className="text-gray-500 text-sm mt-2">
                  {member.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

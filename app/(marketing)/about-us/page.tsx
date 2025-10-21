// /app/(marketing)/about-us/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getMissionData, getTeamData } from "@/utils/aboutApi";
import Image from "next/image";

export default function AboutUsPage() {
  const [mission, setMission] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setMission(await getMissionData());
      setTeam(await getTeamData());
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎯 Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mission.map((m) => (
            <div key={m.id} className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">{m.title}</h3>
              <p className="text-gray-300">{m.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">👥 Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((t) => (
            <div
              key={t.id}
              className="bg-gray-900 p-6 rounded-2xl shadow-md flex flex-col items-center"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

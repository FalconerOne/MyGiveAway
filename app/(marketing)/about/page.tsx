"use client";

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card = ({ title, description, link }: CardProps) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
    <h3 className="text-orange-600 font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <Link href={link} className="bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600">
      Edit {title}
    </Link>
  </div>
);

export default function AboutPage() {
  const cards = [
    { title: "Community", description: "Our growing, vibrant user base.", link: "/dashboard/editCommunity" },
    { title: "Mission", description: "Our purpose and goals for impact.", link: "/dashboard/editMission" },
    { title: "Team", description: "Meet the people behind MyGiveAway.", link: "/dashboard/editTeam" },
    { title: "Timeline", description: "Milestones and achievements.", link: "/dashboard/editTimeline" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6 flex flex-col gap-8 items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {cards.map((card) => <Card key={card.title} {...card} />)}
      </div>
    </main>
  );
}

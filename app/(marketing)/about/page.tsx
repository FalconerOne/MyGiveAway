"use client";

import Card from "@/components/global/Card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-orange-50 to-white">

      <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-8 text-center">
        About MyGiveAway
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Community</h3>
          <p className="text-gray-700 text-sm">
            Connecting winners, supporters, and partners across Nigeria.
          </p>
          <Link href="/marketing/edit/community" className="mt-2 text-orange-500 font-semibold inline-block">Edit</Link>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Mission</h3>
          <p className="text-gray-700 text-sm">
            Empowering users with exciting prizes and opportunities.
          </p>
          <Link href="/marketing/edit/mission" className="mt-2 text-orange-500 font-semibold inline-block">Edit</Link>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Team</h3>
          <p className="text-gray-700 text-sm">
            Meet the talented team making this all possible.
          </p>
          <Link href="/marketing/edit/team" className="mt-2 text-orange-500 font-semibold inline-block">Edit</Link>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Timeline</h3>
          <p className="text-gray-700 text-sm">
            Track our milestones and growth journey.
          </p>
          <Link href="/marketing/edit/timeline" className="mt-2 text-orange-500 font-semibold inline-block">Edit</Link>
        </Card>
      </section>

    </main>
  );
}

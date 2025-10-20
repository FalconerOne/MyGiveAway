"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-orange-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-12">About Us</h1>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-orange-600 mb-2">Our Community</h2>
          <p className="text-gray-700">We empower participants with exciting giveaways and meaningful rewards.</p>
          <Link href="/marketing/about/edit-community" className="text-orange-500 font-semibold mt-2 inline-block">Edit</Link>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-orange-600 mb-2">Our Mission</h2>
          <p className="text-gray-700">Connecting people to rewards while supporting charitable initiatives.</p>
          <Link href="/marketing/about/edit-mission" className="text-orange-500 font-semibold mt-2 inline-block">Edit</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-orange-600 mb-2">Our Team</h2>
          <p className="text-gray-700">A passionate team of developers, marketers, and community managers.</p>
          <Link href="/marketing/about/edit-team" className="text-orange-500 font-semibold mt-2 inline-block">Edit</Link>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-orange-600 mb-2">Our Timeline</h2>
          <p className="text-gray-700">Track our growth and milestones since inception.</p>
          <Link href="/marketing/about/edit-timeline" className="text-orange-500 font-semibold mt-2 inline-block">Edit</Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 text-sm text-gray-500 text-center py-4 border-t border-orange-200">
      App designed by{" "}
      <span className="text-orange-600 font-semibold">FalconerOne Technologies</span>{" "}
      | <Link href="/about" className="text-orange-500 hover:underline">About Us</Link>
    </footer>
  );
}

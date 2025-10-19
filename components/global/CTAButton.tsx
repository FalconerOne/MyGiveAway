"use client";

import Link from "next/link";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
}

export default function CTAButton({ href, text, variant = "primary" }: CTAButtonProps) {
  const base =
    "px-6 py-3 rounded-full shadow-md font-medium transition text-center inline-block";
  const styles =
    variant === "primary"
      ? "bg-orange-500 hover:bg-orange-600 text-white"
      : "border border-orange-400 text-orange-600 hover:bg-orange-100";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {text}
    </Link>
  );
}

"use client";

import Link from "next/link";

interface Props {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
}

export default function CTAButton({ href, text, variant = "primary" }: Props) {
  const baseClasses = "px-6 py-3 rounded-full font-medium shadow transition";
  const classes =
    variant === "primary"
      ? `${baseClasses} bg-orange-500 text-white hover:bg-orange-600`
      : `${baseClasses} border border-orange-400 text-orange-600 hover:bg-orange-100`;

  return (
    <Link href={href} className={classes}>
      {text}
    </Link>
  );
}

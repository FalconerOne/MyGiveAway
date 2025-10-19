"use client";

import { ReactNode } from "react";
import AboutPromoBanner from "./about/AboutPromoBanner";
import MarketingFooter from "./MarketingFooter";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800">
      <AboutPromoBanner />

      <div className="flex-1">{children}</div>

      <MarketingFooter />
    </div>
  );
}

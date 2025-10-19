import React from "react";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import TeamSection from "@/components/about/TeamSection";
import ContactCTA from "@/components/about/ContactCTA";

export const metadata = {
  title: "About Us | JustProperties",
  description: "Learn more about JustProperties — connecting property buyers, renters, landlords, and agents across Nigeria.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <ContactCTA />
    </main>
  );
}

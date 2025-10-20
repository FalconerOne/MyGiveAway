"use client";

import { useEffect, useState } from "react";

interface AdZoneDisplayProps {
  zone: string;
}

export default function AdZoneDisplay({ zone }: AdZoneDisplayProps) {
  const ads = [
    <div key="ad1" className="bg-orange-100 p-4 rounded shadow text-center">
      Ad 1 Content for {zone}
    </div>,
    <div key="ad2" className="bg-pink-100 p-4 rounded shadow text-center">
      Ad 2 Content for {zone}
    </div>,
    <div key="ad3" className="bg-yellow-100 p-4 rounded shadow text-center">
      Ad 3 Content for {zone}
    </div>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 6000); // rotates every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return <div className="w-full">{ads[index]}</div>;
}

"use client";

import { FC } from "react";

interface AdZoneDisplayProps {
  zone: "landing-mid" | "landing-bottom" | "dashboard-top" | "dashboard-bottom";
}

const AdZoneDisplay: FC<AdZoneDisplayProps> = ({ zone }) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-4 shadow text-center">
      <p className="text-gray-500 font-medium">
        {`[AdZone: ${zone}] Placeholder for dynamic ad content`}
      </p>
    </div>
  );
};

export default AdZoneDisplay;

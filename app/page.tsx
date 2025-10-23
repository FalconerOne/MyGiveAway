"use client";

import React, { useEffect, useState } from 'react';
import { Card, Button } from '@/components/ui';

const banners = [
  "🎯 Got Skills? Turn them into Cash on SkillLink Africa!",
  "💼 Your hustle fit pay — Link up with real gigs on SkillLink Africa!",
  "🚀 Don’t just wait for giveaways — start earning on SkillLink!",
  "💡 Show your talent, connect across Africa — SkillLink!",
  "🔥 From Lagos to Nairobi — Get paid for your skill on SkillLinkAfrica.ng!"
];

const HomePage: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyGiveAway App</h1>
      <Card className="mb-4">
        <p>{banners[currentBanner]}</p>
      </Card>
      <Button variant="primary" onClick={() => window.location.href='/funnel'}>
        Explore SkillLink Africa
      </Button>
    </div>
  );
};

export default HomePage;

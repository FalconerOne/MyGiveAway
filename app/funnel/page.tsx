import React from 'react';
import { Card, Button } from '@/components/ui';

const FunnelPage: React.FC = () => {
  const openSkillLink = () => {
    window.open('https://skilllinkafrica.ng', '_blank');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore SkillLink Africa</h1>
      <Card>
        <p>
          🎯 Got Skills? Turn them into Cash on SkillLink Africa!  
          💼 Your hustle fit pay — Link up with real gigs on SkillLink Africa!  
          🚀 Don’t just wait for giveaways — start earning on SkillLink!
        </p>
        <Button variant="primary" className="mt-2" onClick={openSkillLink}>
          Visit SkillLink Africa
        </Button>
      </Card>
    </div>
  );
};

export default FunnelPage;

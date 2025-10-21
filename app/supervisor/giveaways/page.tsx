import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui';
import { supabase } from '@/config/supabase';

interface Giveaway {
  id: string;
  name: string;
  status: string;
}

const SupervisorGiveawaysPage: React.FC = () => {
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);

  useEffect(() => {
    supabase.from('giveaways').select('*').then(({ data }) => {
      if (data) setGiveaways(data as Giveaway[]);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Giveaways (Read-Only)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {giveaways.map((g) => (
          <Card key={g.id}>
            <h2 className="font-semibold">{g.name}</h2>
            <p>Status: {g.status}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SupervisorGiveawaysPage;

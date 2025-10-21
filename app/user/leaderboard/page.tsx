import React, { useEffect, useState } from 'react';
import { supabase } from '@/config/supabase';
import { Card } from '@/components/ui';

interface LeaderboardEntry {
  id: string;
  username: string;
  points: number;
}

const LeaderboardPage: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    supabase
      .from('leaderboard')
      .select('*')
      .order('points', { ascending: false })
      .limit(60) // permanent cap for unactivated users handled in backend
      .then(({ data }) => {
        if (data) setEntries(data as LeaderboardEntry[]);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {entries.map((e, index) => (
          <Card key={e.id}>
            <p className="font-semibold">{index + 1}. {e.username}</p>
            <p>Points: {e.points}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;

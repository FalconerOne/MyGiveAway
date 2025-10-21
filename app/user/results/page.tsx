import React, { useEffect, useState } from 'react';
import { supabase } from '@/config/supabase';
import { Card, Toast } from '@/components/ui';

interface GiveawayResult {
  id: string;
  name: string;
  winner?: string;
}

const ResultsPage: React.FC = () => {
  const [results, setResults] = useState<GiveawayResult[]>([]);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    supabase.from('giveaways').select('*').eq('status', 'completed').then(({ data }) => {
      if (data) setResults(data as GiveawayResult[]);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recent Winners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((r) => (
          <Card key={r.id}>
            <h2 className="font-semibold">{r.name}</h2>
            <p>Winner: {r.winner ? r.winner : "TBD"}</p>
          </Card>
        ))}
      </div>
      <Toast
        title="Winners Loaded"
        description={`${results.length} giveaways completed`}
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </div>
  );
};

export default ResultsPage;

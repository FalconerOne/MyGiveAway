import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/config/supabase';
import { Card, Button, Toast } from '@/components/ui';

interface Giveaway {
  id: string;
  name: string;
  status: string;
  winner?: string;
}

const AdminFinalizePage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [giveaway, setGiveaway] = useState<Giveaway | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (params.id) {
      supabase
        .from('giveaways')
        .select('*')
        .eq('id', params.id)
        .single()
        .then(({ data }) => setGiveaway(data as Giveaway));
    }
  }, [params.id]);

  const finalizeWinner = async () => {
    if (!giveaway) return;
    const { data, error } = await supabase
      .from('giveaways')
      .update({ status: 'completed', winner: 'USER_ID_PLACEHOLDER' })
      .eq('id', giveaway.id)
      .select()
      .single();
    if (error) {
      console.error(error);
      return;
    }
    setGiveaway(data as Giveaway);
    setToastOpen(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finalize Winner</h1>
      {giveaway && (
        <Card>
          <h2 className="font-semibold">{giveaway.name}</h2>
          <p>Status: {giveaway.status}</p>
          <Button variant="primary" className="mt-2" onClick={finalizeWinner}>
            Finalize Winner
          </Button>
        </Card>
      )}
      <Toast
        title="Winner Finalized"
        description="Confetti animation triggered (placeholder)"
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </div>
  );
};

export default AdminFinalizePage;

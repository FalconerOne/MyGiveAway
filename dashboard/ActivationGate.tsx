'use client';

import { useEffect, useState } from 'react';
import { createRouteHandlerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

interface ActivationGateProps {
  userId: string;
  children: React.ReactNode;
}

const ActivationGate = ({ userId, children }: ActivationGateProps) => {
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const checkActivation = async () => {
    try {
      const supabase = createRouteHandlerClient({ cookies });
      const { data, error } = await supabase
        .from('profiles')
        .select('activated')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('ActivationGate fetch error:', error.message);
        setIsActivated(false);
      } else {
        setIsActivated(data?.activated ?? false);
      }
    } catch (err) {
      console.error('ActivationGate exception:', err);
      setIsActivated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkActivation();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  if (!isActivated) return <div>Please activate your account to access this content.</div>;

  return <>{children}</>;
};

export default ActivationGate;

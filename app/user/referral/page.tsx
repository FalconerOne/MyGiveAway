import React, { useEffect, useState } from 'react';
import { supabase } from '@/config/supabase';
import { Card, Button } from '@/components/ui';

const ReferralPage: React.FC = () => {
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) setReferralCode(data.session.user.id.slice(0, 8));
    });
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invite Friends</h1>
      <Card>
        <p>Your referral code:</p>
        <p className="font-bold text-xl">{referralCode}</p>
        <Button variant="primary" className="mt-2" onClick={copyCode}>
          Copy Code
        </Button>
      </Card>
    </div>
  );
};

export default ReferralPage;

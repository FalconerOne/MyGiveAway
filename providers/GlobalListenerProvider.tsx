'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createRouteHandlerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

interface GlobalListenerContextProps {
  dashboardData: any[];
  refreshDashboard: () => Promise<void>;
}

const GlobalListenerContext = createContext<GlobalListenerContextProps | undefined>(undefined);

export const GlobalListenerProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardData, setDashboardData] = useState<any[]>([]);

  const fetchDashboard = async () => {
    try {
      const supabase = createRouteHandlerClient({ cookies });
      const { data, error } = await supabase.from('dashboard').select('*');

      if (error) {
        console.error('GlobalListener fetch error:', error.message);
        return;
      }

      setDashboardData(data || []);
    } catch (err) {
      console.error('GlobalListener fetch exception:', err);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <GlobalListenerContext.Provider value={{ dashboardData, refreshDashboard: fetchDashboard }}>
      {children}
    </GlobalListenerContext.Provider>
  );
};

export const useGlobalListener = () => {
  const context = useContext(GlobalListenerContext);
  if (!context) {
    throw new Error('useGlobalListener must be used within GlobalListenerProvider');
  }
  return context;
};

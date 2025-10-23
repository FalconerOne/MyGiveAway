// providers/GlobalListenerProvider.tsx

'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import WinnerCelebrationPopup from '@/components/global/winnerCelebrationPopup'
import { listenForWinnerCelebration } from '@/lib/realtime/winnerCelebration'

interface GlobalListenerContextType {
  // You can add global event hooks here later (e.g., notifications, global toasts)
}

const GlobalListenerContext = createContext<GlobalListenerContextType | undefined>(undefined)

export const useGlobalListener = () => {
  const context = useContext(GlobalListenerContext)
  if (!context) throw new Error('useGlobalListener must be used within GlobalListenerProvider')
  return context
}

export default function GlobalListenerProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClientComponentClient()
  const [winnerData, setWinnerData] = useState<any>(null)
  const [popupVisible, setPopupVisible] = useState(false)
  const [userRole, setUserRole] = useState<'admin' | 'supervisor' | 'activated' | 'guest' | null>(null)

  // ✅ Fetch current user role once on mount
  useEffect(() => {
    async function fetchUserRole() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.user) {
        setUserRole('guest')
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role, activated')
        .eq('id', session.user.id)
        .single()

      if (!profile) {
        setUserRole('guest')
      } else if (profile.role === 'admin') {
        setUserRole('admin')
      } else if (profile.role === 'supervisor') {
        setUserRole('supervisor')
      } else if (profile.activated) {
        setUserRole('activated')
      } else {
        setUserRole('guest')
      }
    }

    fetchUserRole()
  }, [supabase])

  // ✅ Subscribe to realtime winner celebration events
  useEffect(() => {
    const unsubscribe = listenForWinnerCelebration((payload) => {
      setWinnerData(payload)
      setPopupVisible(true)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <GlobalListenerContext.Provider value={{}}>
      {children}

      {/* 🎉 Global Winner Celebration Popup */}
      <WinnerCelebrationPopup
        visible={popupVisible}
        winnerData={winnerData}
        currentUserRole={userRole}
        onClose={() => setPopupVisible(false)}
      />
    </GlobalListenerContext.Provider>
  )
}

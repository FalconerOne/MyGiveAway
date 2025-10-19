// components/celebrations/GlobalCelebrationListener.tsx

'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import WinnerCelebrationPopup from '@/components/global/WinnerCelebrationPopup'

interface WinnerPayload {
  id?: string
  winner_name?: string
  prize_name?: string
  prize_image?: string
  visibility_role?: 'admin' | 'supervisor' | 'activated' | 'guest'
}

export default function GlobalCelebrationListener() {
  const supabase = createClientComponentClient()
  const [winnerData, setWinnerData] = useState<WinnerPayload | null>(null)

  useEffect(() => {
    const channel = supabase
      .channel('global_winner_channel')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'giveaway_winners',
        },
        (payload) => {
          const data = payload.new as WinnerPayload
          console.log('🎉 New winner broadcast received:', data)
          setWinnerData({
            id: data.id,
            winner_name: data.winner_name,
            prize_name: data.prize_name,
            prize_image: data.prize_image,
            visibility_role: data.visibility_role,
          })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase])

  return (
    <>
      {winnerData && (
        <WinnerCelebrationPopup
          winner={{
            name: winnerData.winner_name,
            prize: winnerData.prize_name,
            prizeImage: winnerData.prize_image,
            role: winnerData.visibility_role || 'guest',
          }}
        />
      )}
    </>
  )
}

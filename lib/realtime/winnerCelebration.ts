// lib/realtime/winnerCelebration.ts

import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client for realtime
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Subscribe to realtime winner events from the Supabase "giveaways" channel.
 * This works across admin, supervisor, and user dashboards (SSR-safe).
 */
export function subscribeToWinnerCelebration(
  onWinnerFinalized: (payload: any) => void
) {
  const channel = supabase
    .channel('global_winner_channel')
    .on(
      'broadcast',
      { event: 'winner_finalized' },
      (payload) => {
        console.log('🔥 Winner event received:', payload)
        onWinnerFinalized(payload)
      }
    )
    .subscribe((status) => {
      console.log('🎧 Supabase channel status:', status)
    })

  return () => {
    supabase.removeChannel(channel)
  }
}

/**
 * Broadcasts a global winner event when an admin finalizes a winner.
 * Called from admin actions only.
 */
export async function broadcastWinnerCelebration(data: {
  giveaway_id: string
  winner_name: string
  prize_name: string
  prize_image?: string
  visibility_level: 'admin' | 'activated' | 'guest'
}) {
  const { error } = await supabase.channel('global_winner_channel').send({
    type: 'broadcast',
    event: 'winner_finalized',
    payload: data,
  })

  if (error) console.error('Error broadcasting winner event:', error)
  else console.log('✅ Winner broadcast sent successfully:', data)
}

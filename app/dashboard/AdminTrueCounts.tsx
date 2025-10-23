'use client'

import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Card } from '@/components/ui/animatedCard'
import { ProgressBar } from '@/components/ui/progressBar'

interface TrueCounts {
  users: number
  giveaways: number
  prizes: number
  referrals: number
}

/**
 * AdminTrueCounts — Displays true (uncapped) metrics for Admin users only.
 * This bypasses the 60-participant visibility rule.
 */
export default function AdminTrueCounts() {
  const [counts, setCounts] = useState<TrueCounts | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const { data: userCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })

        const { data: giveawayCount } = await supabase
          .from('giveaways')
          .select('*', { count: 'exact', head: true })

        const { data: prizeCount } = await supabase
          .from('prizes')
          .select('*', { count: 'exact', head: true })

        const { data: referralCount } = await supabase
          .from('referrals')
          .select('*', { count: 'exact', head: true })

        setCounts({
          users: userCount?.length || 0,
          giveaways: giveawayCount?.length || 0,
          prizes: prizeCount?.length || 0,
          referrals: referralCount?.length || 0,
        })
      } catch (err) {
        console.error('Error fetching admin counts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCounts()
  }, [supabase])

  if (loading) {
    return (
      <Card className="p-4 text-center">
        <ProgressBar />
        <p className="text-sm text-gray-500 mt-2">Loading real counts...</p>
      </Card>
    )
  }

  if (!counts) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-4 text-center">
        <h3 className="text-lg font-semibold">Users</h3>
        <p className="text-2xl font-bold">{counts.users}</p>
      </Card>
      <Card className="p-4 text-center">
        <h3 className="text-lg font-semibold">Giveaways</h3>
        <p className="text-2xl font-bold">{counts.giveaways}</p>
      </Card>
      <Card className="p-4 text-center">
        <h3 className="text-lg font-semibold">Prizes</h3>
        <p className="text-2xl font-bold">{counts.prizes}</p>
      </Card>
      <Card className="p-4 text-center">
        <h3 className="text-lg font-semibold">Referrals</h3>
        <p className="text-2xl font-bold">{counts.referrals}</p>
      </Card>
    </div>
  )
}

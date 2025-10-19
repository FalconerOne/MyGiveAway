'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@supabase/auth-helpers-react'
import { toast } from '@/components/ui/use-toast'

/**
 * ActivationGate ensures that only activated users can access certain dashboard features.
 * Unactivated users are redirected to an activation reminder page.
 */
export default function ActivationGate({
  children,
}: {
  children: React.ReactNode
}) {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) return

    // Example: check for activation via user metadata
    const isActivated = user?.user_metadata?.activated === true

    if (!isActivated) {
      toast({
        title: 'Account not activated',
        description:
          'You need to activate your account to access this feature.',
        variant: 'destructive',
      })
      router.push('/profile/activate')
    }
  }, [user, router])

  // Hide children until verified to prevent flicker
  if (!user) return null

  const isActivated = user?.user_metadata?.activated === true
  if (!isActivated) return null

  return <>{children}</>
}

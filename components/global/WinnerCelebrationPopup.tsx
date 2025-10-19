// components/global/WinnerCelebrationPopup.tsx

'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ConfettiCanvas from './ConfettiCanvas'

interface WinnerCelebrationPopupProps {
  winnerData: {
    giveaway_title?: string
    prize_image?: string
    prize_name?: string
    winner_name?: string
    winner_id?: string
    winner_role?: string
  } | null
  currentUserRole: 'admin' | 'supervisor' | 'activated' | 'guest' | null
  visible: boolean
  onClose: () => void
}

export default function WinnerCelebrationPopup({
  winnerData,
  currentUserRole,
  visible,
  onClose,
}: WinnerCelebrationPopupProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (visible) {
      setShowConfetti(true)
      const timer = setTimeout(() => {
        setShowConfetti(false)
        onClose()
      }, 7000)
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  if (!winnerData) return null

  // Role-based visibility masking
  const maskedName =
    currentUserRole === 'guest'
      ? '🎉 A lucky winner has been chosen!'
      : currentUserRole === 'supervisor'
      ? `Winner: ${winnerData.winner_name?.slice(0, 1) || '?'}***`
      : `🏆 ${winnerData.winner_name || 'Winner'}`
  const prizeDisplay =
    currentUserRole === 'guest'
      ? 'Mystery Prize'
      : winnerData.prize_name || 'Exclusive Reward'

  return (
    <>
      <ConfettiCanvas active={showConfetti} />

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-xl p-6 w

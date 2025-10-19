// components/global/WinnerCelebrationPopup.tsx

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import Image from 'next/image'

interface WinnerCelebrationProps {
  winner: {
    name?: string
    prize?: string
    prizeImage?: string
    role?: 'admin' | 'supervisor' | 'activated' | 'guest'
  } | null
}

export default function WinnerCelebrationPopup({ winner }: WinnerCelebrationProps) {
  const [show, setShow] = useState(false)
  const [confetti, setConfetti] = useState(false)

  useEffect(() => {
    if (winner) {
      setShow(true)
      setConfetti(true)

      const timer = setTimeout(() => {
        setShow(false)
        setConfetti(false)
      }, 12000) // lasts for 12s total

      return () => clearTimeout(timer)
    }
  }, [winner])

  if (!winner) return null

  const maskedName =
    winner.role === 'guest' ? '🎉 A lucky winner!' : `🎉 ${winner.name}`

  return (
    <>
      {confetti && (
        <Confetti
          recycle={false}
          numberOfPieces={350}
          gravity={0.3}
          tweenDuration={4000}
        />
      )}

      <AnimatePresence>
        {show && (
          <motion.div
            key="winner-popup"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 100 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 z-[9999] backdrop-blur-sm"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md text-center">
              {winner.prizeImage && (
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={winner.prizeImage}
                    alt="Prize"
                    fill
                    className="object-cover rounded-xl shadow"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold text-purple-700">
                {maskedName}
              </h2>
              <p className="text-gray-600 mt-2">
                {winner.role === 'guest'
                  ? 'Someone just won an awesome prize!'
                  : `won ${winner.prize || 'a special reward!'}`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

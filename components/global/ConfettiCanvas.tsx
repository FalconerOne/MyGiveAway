// components/global/ConfettiCanvas.tsx

'use client'

import React, { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

interface ConfettiCanvasProps {
  active: boolean
  duration?: number // in ms
}

/**
 * A lightweight confetti component using <canvas>.
 * When `active` becomes true, a confetti blast triggers.
 */
export default function ConfettiCanvas({ active, duration = 4000 }: ConfettiCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active || !refCanvas.current) return

    const canvas = refCanvas.current
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true })

    const endTime = Date.now() + duration
    const frame = () => {
      myConfetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      })
      myConfetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      })

      if (Date.now() < endTime) requestAnimationFrame(frame)
    }

    frame()

    return () => {
      myConfetti.reset()
    }
  }, [active, duration])

  return (
    <canvas
      ref={refCanvas}
      className={`fixed inset-0 pointer-events-none z-[9999] ${
        active ? 'block' : 'hidden'
      }`}
    />
  )
}

'use client'

import { useEffect, useState, type ComponentType, type ReactNode } from 'react'

type ElectricBorderProps = {
  children?: ReactNode
  color?: string
  speed?: number
  chaos?: number
  thickness?: number
  borderRadius?: number
  displacement?: number
  className?: string
}

type ElectricBorderComponent = ComponentType<ElectricBorderProps>

export function HomeHeroLogo() {
  const [Border, setBorder] = useState<ElectricBorderComponent | null>(null)

  useEffect(() => {
    let cancelled = false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const load = () => {
      void import('@/components/ElectricBorder').then((mod) => {
        if (!cancelled) setBorder(() => mod.default)
      })
    }

    const onInteract = () => load()
    window.addEventListener('pointerdown', onInteract, { once: true, passive: true })
    const timer = window.setTimeout(load, 8000)

    return () => {
      cancelled = true
      window.removeEventListener('pointerdown', onInteract)
      window.clearTimeout(timer)
    }
  }, [])

  if (!Border) return null

  return (
    <div className="pointer-events-none absolute inset-0">
      <Border
        color="#0A3D62"
        speed={0.55}
        chaos={0.08}
        thickness={1.8}
        borderRadius={360}
        displacement={34}
        className="h-full w-full rounded-full"
      >
        <div className="h-full w-full p-2.25 sm:p-2 md:p-2.5">
          <Border
            color="#D4AF37"
            speed={0.8}
            chaos={0.06}
            thickness={1.2}
            borderRadius={360}
            displacement={25}
            className="h-full w-full rounded-full"
          >
            <div className="h-full w-full" />
          </Border>
        </div>
      </Border>
    </div>
  )
}

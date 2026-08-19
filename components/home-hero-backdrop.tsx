'use client'

import { useEffect, useState } from 'react'

export function HomeHeroBackdrop({ src }: { src: string }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(true), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative background, deferred until after LCP
    <img
      src={src}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
      decoding="async"
      fetchPriority="low"
      aria-hidden="true"
    />
  )
}

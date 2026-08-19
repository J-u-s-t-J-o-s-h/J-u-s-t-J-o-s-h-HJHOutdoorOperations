'use client'

import { useEffect, useState } from 'react'

export function HomeHeroBackdrop({ src }: { src: string }) {
  const [show, setShow] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(true), 2500)
    return () => window.clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative background, deferred until after LCP
    <img
      src={src}
      alt=""
      onLoad={() => setLoaded(true)}
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
      decoding="async"
      fetchPriority="low"
      aria-hidden="true"
    />
  )
}

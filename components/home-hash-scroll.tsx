'use client'

import { useEffect } from 'react'

export function HomeHashScroll() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.scrollTo({ top: 0 })
  }, [])

  return null
}

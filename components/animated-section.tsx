'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  /** Hero / above-the-fold: skip observer so content is never stuck at opacity-0. */
  immediate = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  immediate?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (immediate) return
    const el = ref.current
    if (!el) return

    const reveal = () => {
      window.setTimeout(() => {
        el.classList.add('hjh-animate-in')
      }, delay)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal()
      return
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal()
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 120px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, immediate])

  if (immediate) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={`hjh-section-reveal max-md:opacity-100 max-md:translate-y-0 opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

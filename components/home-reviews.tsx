'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/animated-section'
import { ElfsightWidget } from '@/components/elfsight-widget'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'

export function HomeReviews() {
  const testimonialsRef = useRef<HTMLElement>(null)
  const reviewsEnabled = process.env.NEXT_PUBLIC_ENABLE_REVIEWS_WIDGET !== 'false'
  const [shouldLoadReviewsScript, setShouldLoadReviewsScript] = useState(false)

  useEffect(() => {
    if (!reviewsEnabled) return
    const sectionEl = testimonialsRef.current
    if (!sectionEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadReviewsScript(true)
          observer.disconnect()
        }
      },
      { rootMargin: '350px 0px' }
    )

    observer.observe(sectionEl)
    return () => observer.disconnect()
  }, [reviewsEnabled])

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="relative isolate overflow-hidden scroll-mt-24 md:scroll-mt-32"
    >
      <PremiumSectionBackdrop fillClassName="bg-section-light" texture="brand-2" />
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-matte-black">
        <AnimatedSection className="text-center mb-14">
          <span className="brand-divider mx-auto mb-5 block" />
          <h2 className="text-3xl lg:text-4xl font-bold text-matte-black">What Customers Say</h2>
        </AnimatedSection>
        <div className="card-elevated-warm p-4 sm:p-6 lg:p-8">
          {reviewsEnabled ? (
            shouldLoadReviewsScript ? (
              <ElfsightWidget appId="5d358237-668a-4bb2-be66-6b8addb8696a" />
            ) : (
              <p className="text-center text-matte-black/75">Loading reviews...</p>
            )
          ) : (
            <p className="text-center text-matte-black/75">
              Reviews are temporarily disabled while we optimize page performance.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <section className="relative isolate overflow-hidden pb-20 pt-[calc(9.75rem+env(safe-area-inset-top,0px))] lg:pb-28 lg:pt-[calc(11.75rem+env(safe-area-inset-top,0px))]">
          <PremiumSectionBackdrop fillClassName="bg-soft-coal" texture="concrete" />
          <div className="relative z-[1] mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-equipment-gold">404</p>
            <h1 className="text-balance text-4xl font-bold text-bone-linen sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-warm-concrete">
              That page doesn&apos;t exist or may have moved. Head back home or jump to storm shelters, services, or contact.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-equipment-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-soft-coal transition-colors hover:bg-equipment-gold/90"
              >
                Home
              </Link>
              <Link
                href="/storm-shelter"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-bone-linen/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-bone-linen transition-colors hover:border-bone-linen hover:bg-bone-linen/10"
              >
                Storm Shelters
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-bone-linen/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-bone-linen transition-colors hover:border-bone-linen hover:bg-bone-linen/10"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-bone-linen/60 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-bone-linen transition-colors hover:border-bone-linen hover:bg-bone-linen/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Layers, ChevronDown } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'
import { ShelterPricingTables } from '@/components/shelter-pricing'
import {
  PRICING_DISCLAIMER,
  aboveGroundStartingPrice,
  belowGroundStartingPrice,
} from '@/lib/shelter-pricing'

export const metadata: Metadata = {
  title: 'Storm Shelter Pricing',
  description:
    'View upfront storm shelter pricing, available sizes, and saferoom options from HJH Outdoor Operations. Standard rates within 60 miles of Marlow, OK.',
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-16 pt-[calc(9.75rem+env(safe-area-inset-top,0px))] lg:pb-20 lg:pt-[calc(11.75rem+env(safe-area-inset-top,0px))]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/HJH_media/More_pictures/More pictures/20260331_143115.jpg"
              alt="HJH Outdoor Operations storm shelter project site in Oklahoma"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/84 via-soft-coal/62 to-matte-black/36" />
            <div className="absolute inset-0 bg-gradient-to-r from-storm-blue/24 via-transparent to-equipment-gold/12" />
          </div>
          <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 inline-block">
              <p className="text-equipment-gold text-sm sm:text-base font-extrabold tracking-[0.16em] uppercase">
                Pricing
              </p>
              <span
                className="brand-divider mt-2 block h-1 rounded-full shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                style={{ width: '100%' }}
              />
            </div>
            <h1 className="max-w-3xl text-balance text-3xl sm:text-5xl lg:text-6xl font-bold text-bone-linen leading-tight">
              Storm Shelter Sizes &amp; Upfront Pricing
            </h1>
            <p className="mt-5 max-w-3xl text-base sm:text-lg text-warm-concrete leading-relaxed">
              Compare available shelter sizes, capacities, and baseline installed pricing before requesting a free estimate. Final pricing may vary based on site conditions, delivery area, installation requirements, and selected options.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-bone-linen/20 bg-soft-coal/55 px-4 py-2 text-sm font-semibold text-bone-linen shadow-md shadow-matte-black/20 ring-1 ring-bone-linen/10">
                <Layers size={16} className="text-equipment-gold" aria-hidden="true" />
                Above-ground shelters starting at {aboveGroundStartingPrice}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-bone-linen/20 bg-soft-coal/55 px-4 py-2 text-sm font-semibold text-bone-linen shadow-md shadow-matte-black/20 ring-1 ring-bone-linen/10">
                <ShieldCheck size={16} className="text-equipment-gold" aria-hidden="true" />
                Below-ground shelters starting at {belowGroundStartingPrice}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-storm-blue hover:bg-steel-blue text-bone-linen font-bold text-sm tracking-wide uppercase rounded-xl transition-colors shadow-lg shadow-storm-blue/35 ring-1 ring-bone-linen/10"
              >
                Request Free Estimate <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+14057567304"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 border-2 border-bone-linen/45 hover:border-bone-linen text-bone-linen font-bold text-sm tracking-wide uppercase rounded-xl transition-colors"
              >
                <Phone size={14} />
                (405) 756-7304
              </a>
            </div>
            <a
              href="#pricing-tables"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-equipment-gold transition-colors hover:text-burnished-amber"
            >
              See the full size &amp; price breakdown
              <ChevronDown size={16} aria-hidden="true" className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </section>

        {/* Pricing tables */}
        <section id="pricing-tables" className="relative isolate overflow-hidden scroll-mt-24 lg:scroll-mt-32">
          <PremiumSectionBackdrop fillClassName="bg-section-mid" texture="linen" />
          <div className="absolute inset-x-0 top-0 z-[2] h-[6px] bg-gradient-to-r from-transparent via-equipment-gold to-transparent shadow-[0_0_20px_rgba(212,175,55,0.75)]" />
          <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 text-matte-black">
            <div className="card-shell-light border-storm-blue/30 ring-1 ring-equipment-gold/20 p-5 sm:p-8 lg:p-10">
              <div className="max-w-4xl">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gunmetal leading-tight">
                  Compare Shelter Sizes &amp; Pricing
                </h2>
                <span className="brand-divider mt-4 mb-5 block h-1 w-12 rounded-full shadow-[0_0_18px_rgba(212,175,55,0.35)]" />
                <p className="max-w-3xl text-clay-taupe leading-relaxed text-base sm:text-lg">
                  Transparent baseline pricing for our most-requested above-ground safe rooms and below-ground shelters. Not sure which size fits your family? We&apos;ll help you choose during your free estimate.
                </p>
              </div>

              <div className="mt-7 sm:mt-8">
                <ShelterPricingTables showStartingPrices disclaimer={PRICING_DISCLAIMER} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden">
          <PremiumSectionBackdrop fillClassName="bg-deep-slate" texture="concrete" />
          <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bone-linen mb-4 text-balance">
              Ready to Lock In Your Shelter?
            </h2>
            <p className="text-warm-concrete text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a free, no-pressure estimate for your exact site, or explore financing to break your project into manageable monthly payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-equipment-gold hover:bg-burnished-amber text-matte-black font-bold text-sm tracking-wide uppercase rounded-xl transition-colors shadow-lg shadow-matte-black/15 ring-1 ring-matte-black/10"
              >
                Request Free Estimate
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/financing"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-4 border-2 border-bone-linen/45 hover:border-bone-linen text-bone-linen font-bold text-sm tracking-wide uppercase rounded-xl transition-colors"
              >
                <CheckCircle2 size={14} />
                View Financing Options
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

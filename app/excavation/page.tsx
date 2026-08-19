import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'
import { BUSINESS } from '@/lib/business'
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/json-ld'
import { locationLandings } from '@/lib/location-landings'
import { siteMedia } from '@/lib/site-media'

const excavationLocations = locationLandings.filter((landing) => landing.parent.path === '/excavation')

export const metadata: Metadata = {
  title: 'Backhoe & Excavation Services in Oklahoma',
  description:
    'Backhoe service and excavation across Oklahoma from HJH Outdoor Operations. Trenching, pads, drainage, and site prep. Free estimates. Call (405) 756-7304.',
  alternates: { canonical: '/excavation' },
}

export default function ExcavationPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: 'Backhoe and excavation services',
            description:
              'Backhoe service, excavation, trenching, and site prep for residential and rural properties across Oklahoma.',
            path: '/excavation',
            areaServed: 'Oklahoma',
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Excavation', path: '/excavation' },
          ]),
        ]}
      />
      <SiteNav />
      <main id="main-content">
        <section className="relative isolate overflow-hidden pb-16 pt-[calc(9.75rem+env(safe-area-inset-top,0px))] lg:pb-20 lg:pt-[calc(11.75rem+env(safe-area-inset-top,0px))]">
          <PremiumSectionBackdrop fillClassName="bg-soft-coal" texture="concrete" />
          <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="brand-divider mb-4 block" />
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-equipment-gold">Site work</p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-bone-linen sm:text-5xl lg:text-6xl">
              Backhoe &amp; Excavation Services
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-warm-concrete">
              HJH Outdoor Operations runs backhoe and excavation work across Oklahoma: trenches, pads, drainage, ponds, and site prep. One crew, a clear estimate, and a site left ready for the next step.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-storm-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-bone-linen shadow-lg shadow-storm-blue/35 ring-1 ring-bone-linen/10 transition-colors hover:bg-steel-blue"
              >
                Request Excavation Quote
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-bone-linen/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-bone-linen transition-colors hover:border-bone-linen"
              >
                <Phone size={14} />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden">
          <PremiumSectionBackdrop fillClassName="bg-section-light" texture="linen" />
          <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="brand-divider mb-4 block" />
                <h2 className="mb-5 text-balance text-3xl font-bold leading-tight text-gunmetal lg:text-4xl">
                  Backhoe work sized to the job
                </h2>
                <p className="mb-4 leading-relaxed text-clay-taupe">
                  If you need a backhoe in Oklahoma, we bring the machine that fits the site. Tight residential lots, rural acreage, and new-build pads all get a different approach. We do not guess at access or spoil placement after we arrive.
                </p>
                <p className="mb-7 leading-relaxed text-clay-taupe">
                  Excavation covers the larger cuts: foundations, ponds, drainage channels, and utility trenches. Dirt work and grading stay with the same crew when the project needs more than a hole.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Backhoe service for residential and rural properties',
                    'Foundation, pond, and drainage excavation',
                    'Utility trenching and septic-related digging',
                    'Site prep with haul-off when needed',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-storm-blue" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-media aspect-[4/3]">
                <Image
                  src={siteMedia.services.excavation}
                  alt="HJH excavation equipment on an Oklahoma jobsite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden">
          <PremiumSectionBackdrop fillClassName="bg-section-mid" texture="brand-2" />
          <div className="relative z-[1] mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <span className="brand-divider mx-auto mb-4 block" />
            <h2 className="mb-4 text-center text-3xl font-bold text-gunmetal">Cities asking for backhoe work</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-clay-taupe">
              These pages match the local searches already hitting the site. Statewide work still starts here.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {excavationLocations.map((landing) => (
                <Link
                  key={landing.path}
                  href={landing.path}
                  className="card-elevated-warm p-6 transition-transform hover:-translate-y-0.5"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-storm-blue">{landing.regionLabel}</p>
                  <h3 className="mt-2 text-xl font-bold text-matte-black">{landing.h1}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-matte-black/75">{landing.intro.slice(0, 140)}...</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-storm-blue">
                    View local page
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

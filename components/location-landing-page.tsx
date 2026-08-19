import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'
import { BUSINESS } from '@/lib/business'
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/json-ld'
import type { LocationLanding } from '@/lib/location-landings'

export function LocationLandingPage({ landing }: { landing: LocationLanding }) {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: `${landing.serviceLabel} in ${landing.city}`,
            description: landing.description,
            path: landing.path,
            areaServed: landing.city,
          }),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: landing.parent.name, path: landing.parent.path },
            { name: landing.city, path: landing.path },
          ]),
        ]}
      />
      <SiteNav />
      <main id="main-content">
        <section className="relative isolate overflow-hidden pb-16 pt-[calc(9.75rem+env(safe-area-inset-top,0px))] lg:pb-20 lg:pt-[calc(11.75rem+env(safe-area-inset-top,0px))]">
          <PremiumSectionBackdrop fillClassName="bg-soft-coal" texture="concrete" />
          <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-warm-concrete/80">
              <Link href="/" className="hover:text-bone-linen">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link href={landing.parent.path} className="hover:text-bone-linen">
                {landing.parent.name}
              </Link>
              <span className="px-2">/</span>
              <span className="text-bone-linen">{landing.city}</span>
            </p>
            <span className="brand-divider mb-4 mt-6 block" />
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-equipment-gold">
              {landing.eyebrow}
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-bone-linen sm:text-5xl lg:text-6xl">
              {landing.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-warm-concrete">{landing.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-storm-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-bone-linen shadow-lg shadow-storm-blue/35 ring-1 ring-bone-linen/10 transition-colors hover:bg-steel-blue"
              >
                Get a Free Estimate
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
                  {landing.serviceLabel} for {landing.regionLabel} properties
                </h2>
                {landing.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="mb-4 leading-relaxed text-clay-taupe">
                    {paragraph}
                  </p>
                ))}
                <ul className="mb-7 flex flex-col gap-3">
                  {landing.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-storm-blue" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-weathered-stone">{landing.localNote}</p>
              </div>
              <div className="card-media aspect-[4/3]">
                <Image
                  src={landing.image}
                  alt={landing.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden">
          <PremiumSectionBackdrop fillClassName="bg-deep-slate" texture="concrete" />
          <div className="relative z-[1] mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-balance text-3xl font-bold text-bone-linen">
              Serving {landing.city} from Marlow, Oklahoma
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-warm-concrete">
              Family owned, licensed, and insured. Tell us the address and we will give you a straight answer on schedule, access, and cost.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {landing.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-bone-linen/30 px-5 py-3 text-sm font-bold uppercase tracking-wide text-bone-linen transition-colors hover:border-bone-linen hover:bg-bone-linen/10"
                >
                  {link.label}
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

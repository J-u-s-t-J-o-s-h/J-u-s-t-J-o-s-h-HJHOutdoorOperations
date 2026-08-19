'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Shield,
  Shovel,
  Trees,
  Layers,
  Droplets,
  Wrench,
  ArrowRight,
  Hammer,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'

const services = [
  {
    icon: Shield,
    title: 'Storm Shelter Installation',
    desc: 'Underground shelters designed and installed for Oklahoma tornado country. Built right, anchored deep.',
    href: '/storm-shelter',
  },
  {
    icon: Shovel,
    title: 'Excavation & Dirt Work',
    desc: 'From ponds to foundations — we move earth with precision and leave the site ready for what comes next.',
    href: '/services#excavation',
  },
  {
    icon: Trees,
    title: 'Land Clearing',
    desc: 'Brush, trees, stumps — we clear property so you can build, farm, or simply reclaim your land.',
    href: '/services#land-clearing',
  },
  {
    icon: Layers,
    title: 'Site Grading',
    desc: 'Proper drainage and level pads for driveways, pads, homes, and commercial builds.',
    href: '/services#site-grading',
  },
  {
    icon: Droplets,
    title: 'Septic Installation',
    desc: 'Full septic system installation for rural and residential properties, done to code.',
    href: '/services#septic',
  },
  {
    icon: Wrench,
    title: 'Culvert Installation',
    desc: 'Culvert installs and replacements to improve drainage, driveway access, and long-term property protection.',
    href: '/services#additional',
  },
  {
    icon: Hammer,
    title: 'Demolition',
    desc: 'Targeted residential demolition and haul-off for barns, concrete pads, and other site obstacles.',
    href: '/services#additional',
  },
  {
    icon: Layers,
    title: 'Driveways',
    desc: 'Driveway prep, regrading, and base shaping for smoother access and better water runoff.',
    href: '/services#additional',
  },
]

export function HomeServicesSection() {
  const [activeCategory, setActiveCategory] = useState('primary')

  const serviceCategories = {
    primary: {
      label: 'Core Services',
      services: [
        services[0],
        services[1],
        services[4],
      ],
    },
    specialized: {
      label: 'Specialized Work',
      services: [
        services[2],
        services[3],
      ],
    },
    additional: {
      label: 'Additional Services',
      services: [
        services[5],
        services[6],
        services[7],
      ],
    },
  }

  return (
    <section className="relative isolate overflow-hidden">
      <PremiumSectionBackdrop fillClassName="bg-sandstone" texture="brand-2" />
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-matte-black">
        <AnimatedSection className="text-center mb-16">
          <span className="brand-divider mx-auto mb-5 block h-1 w-20 rounded-full shadow-[0_0_18px_rgba(212,175,55,0.35)]" />
          <p className="text-equipment-gold text-sm sm:text-base font-extrabold tracking-[0.16em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gunmetal leading-tight text-balance">
            Complete Outdoor Services
          </h2>
          <p className="text-matte-black text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            From storm shelters to septic systems, we handle the hard jobs that take real equipment and real experience.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(serviceCategories).map(([key, { label }]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`min-h-11 touch-manipulation px-5 py-3 font-bold text-sm tracking-wide uppercase rounded-xl transition-all duration-300 sm:px-6 ${activeCategory === key
                  ? 'bg-gunmetal text-bone-linen shadow-md'
                  : 'bg-section-light border-2 border-gunmetal/40 text-gunmetal hover:border-storm-blue hover:text-storm-blue'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          {Object.entries(serviceCategories).map(([key, { services: catServices }]) => (
            <div
              key={key}
              className={`transition-all duration-500 ease-out ${activeCategory === key
                  ? 'opacity-100 max-h-[2000px] overflow-visible'
                  : 'max-h-0 overflow-hidden opacity-0 pointer-events-none'
                }`}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-1 pt-1">
                {catServices.map(({ icon: Icon, title, desc, href }, i) => (
                  <AnimatedSection key={title} delay={i * 100} className="h-full min-h-0">
                    <Link
                      href={href}
                      className="group relative flex h-full min-h-[17rem] flex-col rounded-2xl border border-soft-khaki/25 bg-gunmetal p-8 pb-9 shadow-lg shadow-matte-black/25 ring-1 ring-bone-linen/5 transition-all duration-300 [transform:perspective(900px)_translateZ(0)] hover:-translate-y-1.5 hover:border-storm-blue/55 hover:[transform:perspective(900px)_translateZ(8px)] hover:shadow-2xl hover:shadow-matte-black/35 sm:min-h-[18rem] sm:p-9"
                    >
                      <span
                        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                        aria-hidden="true"
                      >
                        <span className="absolute inset-0 rounded-2xl ring-1 ring-bone-linen/8" />
                        <span className="absolute inset-[1px] rounded-[0.85rem] border border-matte-black/25" />
                        <span className="absolute inset-0 bg-gradient-to-b from-storm-blue/22 via-gunmetal/95 to-matte-black/96" />
                        <span className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_12%_8%,rgba(212,175,55,0.2),transparent_35%),radial-gradient(circle_at_88%_92%,rgba(10,61,98,0.22),transparent_40%)]" />
                        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-equipment-gold/75 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-storm-blue/25 blur-2xl transition-opacity duration-300 group-hover:bg-storm-blue/35" />
                        <span className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-equipment-gold/12 blur-3xl transition-opacity duration-300 group-hover:bg-equipment-gold/18" />
                        <span className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-matte-black/25 to-transparent" />
                      </span>

                      <div className="relative z-10 mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-soft-khaki/30 bg-soft-coal/85 shadow-md shadow-matte-black/35 ring-1 ring-bone-linen/5 transition-colors duration-300 group-hover:border-storm-blue/40 group-hover:bg-storm-blue">
                        <Icon size={26} className="text-bone-linen" />
                      </div>

                      <h3 className="relative z-10 mb-3 text-balance text-xl font-bold leading-snug text-bone-linen transition-colors group-hover:text-bone-linen">
                        {title}
                      </h3>
                      <p className="relative z-10 mb-6 grow leading-relaxed text-pretty text-soft-khaki/90">
                        {desc}
                      </p>

                      <span className="relative z-10 mt-auto inline-flex items-center gap-2 pb-0.5 text-sm font-bold tracking-widest text-equipment-gold uppercase transition-all group-hover:gap-3 group-hover:text-burnished-amber">
                        Explore {title} <ArrowRight size={14} className="translate-y-[0.5px]" />
                      </span>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection delay={600} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gunmetal hover:bg-soft-coal text-bone-linen font-bold text-base tracking-wide uppercase rounded-xl transition-colors shadow-lg shadow-matte-black/25 ring-1 ring-bone-linen/10 hover:shadow-xl"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

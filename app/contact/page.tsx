'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PremiumSectionBackdrop } from '@/components/premium-section-backdrop'
import { ElfsightWidget } from '@/components/elfsight-widget'
import { BUSINESS } from '@/lib/business'
import { contactFaqs } from '@/lib/faqs/contact'

const faqs = contactFaqs

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b-2 border-soft-khaki/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-gunmetal text-base leading-snug">{q}</span>
        {open ? (
          <ChevronUp size={24} className="text-storm-blue shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown size={24} className="text-weathered-stone shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <p className="text-clay-taupe text-base leading-relaxed pb-6">{a}</p>
      )}
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Header */}
        <section className="relative isolate overflow-hidden pb-16 pt-[calc(9.75rem+env(safe-area-inset-top,0px))] lg:pb-20 lg:pt-[calc(11.75rem+env(safe-area-inset-top,0px))]">
          <PremiumSectionBackdrop fillClassName="bg-soft-coal" texture="concrete" />
          <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="brand-divider mb-4 block" />
            <p className="text-equipment-gold text-xs font-bold tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bone-linen leading-tight text-balance max-w-3xl">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="text-warm-concrete text-lg mt-5 max-w-2xl leading-relaxed">
              Fill out the form, give us a call, or send us an email. We respond fast and give free, honest estimates.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="relative isolate overflow-hidden">
          <PremiumSectionBackdrop fillClassName="bg-section-light" texture="linen" />
          <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2 card-panel p-7 lg:p-10">
                <ElfsightWidget appId="fe252980-983c-4859-bd8a-4f78cd2977c4" />
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-5">
                {/* Phone */}
                <div className="card-elevated-storm p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={18} className="text-bone-linen" />
                    <span className="text-bone-linen font-bold text-sm uppercase tracking-wide">Call Us</span>
                  </div>
                  <a
                    href="tel:+14057567304"
                    className="text-xl font-bold text-bone-linen hover:text-bone-linen/85 transition-colors block mb-1 break-words sm:text-2xl"
                  >
                    (405) 756-7304
                  </a>
                  <a
                    href="tel:+15804580087"
                    className="text-lg font-bold text-bone-linen hover:text-bone-linen/85 transition-colors block mb-1 break-words sm:text-xl"
                  >
                    (580) 458-0087
                  </a>
                  <p className="text-bone-linen/70 text-xs">
                    Fastest way to reach us. We answer during business hours and often evenings.
                  </p>
                </div>

                {/* Email */}
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={16} className="text-storm-blue" />
                    <span className="text-gunmetal font-bold text-sm uppercase tracking-wide">Email</span>
                  </div>
                  <a
                    href="mailto:Hjhoutdoor@gmail.com"
                    className="text-storm-blue text-sm font-semibold hover:text-steel-blue transition-colors"
                  >
                    Hjhoutdoor@gmail.com
                  </a>
                </div>

                {/* Service Area */}
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={16} className="text-storm-blue" />
                    <span className="text-gunmetal font-bold text-sm uppercase tracking-wide">Service Area</span>
                  </div>
                  <p className="text-clay-taupe text-sm leading-relaxed">
                    Serving Oklahoma from Marlow, including {BUSINESS.serviceCities.join(', ')}, and surrounding communities.
                  </p>
                </div>

                {/* Hours */}
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={16} className="text-storm-blue" />
                    <span className="text-gunmetal font-bold text-sm uppercase tracking-wide">Hours</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {[
                      ...BUSINESS.hours.map((block) => ({ day: block.label, hours: block.display })),
                      { day: 'Sunday', hours: BUSINESS.sundayNote },
                    ].map(({ day, hours }) => (
                      <li key={day} className="flex justify-between text-xs">
                        <span className="text-clay-taupe font-semibold">{day}</span>
                        <span className="text-weathered-stone">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to expect */}
                <div className="card-elevated-dark p-6">
                  <p className="text-bone-linen font-bold text-sm mb-3">What to Expect</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      'We respond to all inquiries within 1 business day',
                      'Free, no-obligation site visit and estimate',
                      'Clear pricing before any work begins',
                      'No hidden fees or surprise charges',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-equipment-gold mt-0.5 shrink-0" />
                        <span className="text-soft-khaki/80 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative isolate overflow-hidden">
          <PremiumSectionBackdrop fillClassName="bg-section-mid" texture="brand-2" />
          <div className="relative z-[1] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-matte-black">
            <div className="text-center mb-12">
              <span className="brand-divider mx-auto mb-4 block" />
              <h2 className="text-4xl font-bold text-gunmetal">Frequently Asked Questions</h2>
              <p className="text-clay-taupe text-lg mt-3 leading-relaxed">
                Common questions we hear from customers before they get started.
              </p>
            </div>
            <div className="card-shell-light px-7">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} {...faq} />
              ))}
            </div>
            <p className="text-center text-clay-taupe text-sm mt-6">
              Have a question not answered here?{' '}
              <a href="tel:+14057567304" className="text-storm-blue font-semibold hover:underline">
                Give us a call
              </a>{' '}
              and we&apos;ll answer it directly.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

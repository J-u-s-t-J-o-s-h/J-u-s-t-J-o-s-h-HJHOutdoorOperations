/**
 * Single source of truth for public business facts used in UI + structured data.
 * Do not invent addresses, ratings, or unverified service cities here.
 */

export const BUSINESS = {
  legalName: 'HJH Outdoor Operations LLC',
  name: 'HJH Outdoor Operations LLC',
  shortName: 'HJH Outdoor Operations',
  alternateNames: ['HJH Outdoor Operations', 'HJH Outdoor', 'HJH'],
  description:
    'Oklahoma contractor for storm shelter installation, excavation, dirt work, land clearing, site grading, and septic system services.',
  url: 'https://www.hjhoutdoorops.com',
  urlPath: '/',
  phone: '+14057567304',
  phoneDisplay: '(405) 756-7304',
  phoneAlt: '+15804580087',
  phoneAltDisplay: '(580) 458-0087',
  email: 'Hjhoutdoor@gmail.com',
  phones: [
    { label: '(405) 756-7304', tel: '+14057567304', primary: true },
    { label: '(580) 458-0087', tel: '+15804580087', primary: false },
  ],
  locality: 'Marlow',
  region: 'OK',
  postalCode: '73055',
  areaServed: 'Oklahoma',
  /** Public service-area language already shown on the site (no street address on file). */
  serviceAreaSummary: 'Based in Marlow, OK · Serving statewide',
  serviceCities: [
    'Duncan',
    'Chickasha',
    'Lawton',
    'Altus',
    'Blanchard',
    "Paul's Valley",
    'Oklahoma City',
    'Bartlesville',
    'Elk City',
    'Ardmore',
    'Ada',
  ] as const,
  hoursDisplay: 'Mon-Fri 7AM-6PM · Sat 8AM-4PM',
  openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-16:00'],
  /** Contact page is the detailed hours source of truth. */
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00', label: 'Monday – Friday', display: '7:00 AM – 6:00 PM' },
    { days: ['Saturday'], opens: '08:00', closes: '16:00', label: 'Saturday', display: '8:00 AM – 4:00 PM' },
  ] as const,
  sundayNote: 'By Appointment',
  hoursFooterSummary: 'Mon–Fri 7AM–6PM · Sat 8AM–4PM',
  social: {
    facebook: 'https://www.facebook.com/HJHoutdoor',
  },
  sameAs: ['https://www.facebook.com/HJHoutdoor'],
  services: [
    { name: 'Storm Shelter Installation', path: '/storm-shelter' },
    { name: 'Excavation', path: '/excavation' },
    { name: 'Dirt Work', path: '/services#dirt-work' },
    { name: 'Land Clearing', path: '/services#land-clearing' },
    { name: 'Site Grading', path: '/services#site-grading' },
    { name: 'Septic System Installation', path: '/services#septic' },
  ] as const,
  ogImagePath: '/HJH_media/Storm_Shelters/HJH_photo_014.webp',
  ogImageAlt: 'HJH Outdoor Operations storm shelter installation in Oklahoma',
} as const

export function primaryPhone() {
  return BUSINESS.phones.find((p) => p.primary) ?? BUSINESS.phones[0]
}

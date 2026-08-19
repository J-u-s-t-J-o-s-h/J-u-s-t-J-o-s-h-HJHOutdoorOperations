import { siteMedia } from '@/lib/site-media'

export type LocationLanding = {
  slug: string
  path: string
  query: string
  city: string
  cityPossessive: string
  regionLabel: string
  serviceLabel: string
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string
  body: string[]
  bullets: string[]
  localNote: string
  image: string
  imageAlt: string
  parent: { name: string; path: string }
  related: Array<{ label: string; href: string }>
}

export const locationLandings: LocationLanding[] = [
  {
    slug: 'okc-backhoe',
    path: '/okc/backhoe-service',
    query: 'backhoe service okc',
    city: 'Oklahoma City',
    cityPossessive: "Oklahoma City's",
    regionLabel: 'OKC',
    serviceLabel: 'Backhoe service',
    title: 'Backhoe Service in OKC | HJH Outdoor Operations',
    description:
      'Need backhoe service in OKC? HJH handles excavation, trenching, and site prep across Oklahoma City. Free estimates. Call (405) 756-7304.',
    h1: 'Backhoe Service in OKC',
    eyebrow: 'Oklahoma City excavation',
    intro:
      'HJH Outdoor Operations provides backhoe service in Oklahoma City for residential lots, new-build pads, drainage work, and utility trenches. We travel from our Marlow base with the equipment needed to dig clean and leave the site ready for the next trade.',
    body: [
      'OKC jobs range from tight backyard access to larger commercial pads on the edge of the metro. We size the machine to the site so we are not tearing up more yard than the work requires.',
      'Typical Oklahoma City calls include foundation excavation, driveway cuts, septic tie-ins, drainage swales, and storm-related cleanup. If you searched for backhoe service in OKC, that is the work we show up to do.',
    ],
    bullets: [
      'Residential and light commercial backhoe work',
      'Trenching for utilities, drainage, and footings',
      'Site prep and spoil haul-off',
      'Same crew that handles dirt work and grading',
    ],
    localNote:
      'We regularly work Oklahoma City and the south metro, including Norman, Moore, and surrounding neighborhoods. Mileage from Marlow is quoted up front.',
    image: siteMedia.services.excavation,
    imageAlt: 'HJH backhoe and excavation equipment working an Oklahoma jobsite',
    parent: { name: 'Excavation', path: '/excavation' },
    related: [
      { label: 'Statewide backhoe & excavation', href: '/excavation' },
      { label: 'Storm shelter installation', href: '/storm-shelter' },
      { label: 'Request an OKC estimate', href: '/contact' },
    ],
  },
  {
    slug: 'bartlesville-backhoe',
    path: '/bartlesville/backhoe-excavation',
    query: 'bartlesville ok backhoe & excavation',
    city: 'Bartlesville',
    cityPossessive: "Bartlesville's",
    regionLabel: 'Bartlesville, OK',
    serviceLabel: 'Backhoe and excavation',
    title: 'Bartlesville OK Backhoe & Excavation | HJH',
    description:
      'Backhoe and excavation in Bartlesville, OK from HJH Outdoor Operations. Site prep, trenching, and dirt work with free estimates. Call (405) 756-7304.',
    h1: 'Backhoe & Excavation in Bartlesville, OK',
    eyebrow: 'Northeast Oklahoma site work',
    intro:
      'Looking for backhoe and excavation in Bartlesville, OK? HJH Outdoor Operations takes on residential and rural earthwork in Washington County and the surrounding area. We travel for the job, quote mileage clearly, and run a licensed, insured crew.',
    body: [
      'Bartlesville properties often mix town lots with acreage just outside city limits. That means access, utilities, and spoil placement need a plan before the first bucket hits the ground.',
      'We handle backhoe work, excavation, and related dirt work so you are not coordinating two contractors for one hole. Call with the address and a short description of the job and we will tell you if we can get to it this trip.',
    ],
    bullets: [
      'Backhoe service for homes, shops, and acreage',
      'Excavation for pads, ponds, and drainage',
      'Utility trenches and septic-related digging',
      'Clear travel quote from our Marlow shop',
    ],
    localNote:
      'Bartlesville is a travel job from Marlow. We still take these projects when the scope makes the trip worthwhile, and we say so before you book.',
    image: siteMedia.services.dirtWork,
    imageAlt: 'Excavation and dirt work on an Oklahoma property',
    parent: { name: 'Excavation', path: '/excavation' },
    related: [
      { label: 'Statewide backhoe & excavation', href: '/excavation' },
      { label: 'Land clearing', href: '/services#land-clearing' },
      { label: 'Request a Bartlesville estimate', href: '/contact' },
    ],
  },
  {
    slug: 'elk-city-backhoe',
    path: '/elk-city/backhoe-service',
    query: 'backhoe service elk city',
    city: 'Elk City',
    cityPossessive: "Elk City's",
    regionLabel: 'Elk City, OK',
    serviceLabel: 'Backhoe service',
    title: 'Backhoe Service in Elk City OK | HJH',
    description:
      'Backhoe service in Elk City, OK for acreage, pads, and trenches. HJH Outdoor Operations quotes travel from Marlow and gives free estimates. Call (405) 756-7304.',
    h1: 'Backhoe Service in Elk City, OK',
    eyebrow: 'Western Oklahoma excavation',
    intro:
      'HJH Outdoor Operations provides backhoe service in Elk City for rural lots, house pads, drainage, and utility digging. Western Oklahoma soil and access are part of the estimate, not a surprise on the invoice.',
    body: [
      'Elk City jobs are often acreage work: longer driveways, pond edges, fence-line trenches, and pads for shops or homes. We bring a backhoe when that is the right machine, and we will tell you if a larger excavator is a better fit.',
      'If you searched for backhoe service in Elk City, send the location and photos if you have them. We will confirm access, travel, and a start window before we roll.',
    ],
    bullets: [
      'Backhoe digging for rural and residential sites',
      'Pads, trenches, and drainage cuts',
      'Coordination with grading and dirt work',
      'Upfront travel and scope from Marlow',
    ],
    localNote:
      'Elk City sits west of our shop. We schedule these jobs when the crew is already moving that direction or when the project size covers the trip.',
    image: siteMedia.about.dirtWork,
    imageAlt: 'HJH crew performing dirt work and excavation in Oklahoma',
    parent: { name: 'Excavation', path: '/excavation' },
    related: [
      { label: 'Statewide backhoe & excavation', href: '/excavation' },
      { label: 'Site grading', href: '/services#site-grading' },
      { label: 'Request an Elk City estimate', href: '/contact' },
    ],
  },
  {
    slug: 'blanchard-storm-shelter',
    path: '/blanchard/storm-shelter-installation',
    query: 'storm shelter installation blanchard ok',
    city: 'Blanchard',
    cityPossessive: "Blanchard's",
    regionLabel: 'Blanchard, OK',
    serviceLabel: 'Storm shelter installation',
    title: 'Storm Shelter Installation in Blanchard, OK | HJH',
    description:
      'Storm shelter installation in Blanchard, OK. Underground and walk-in saferooms, installed in a day on most homes. Free estimate. Call (405) 756-7304.',
    h1: 'Storm Shelter Installation in Blanchard, OK',
    eyebrow: 'South metro tornado protection',
    intro:
      'HJH Outdoor Operations installs storm shelters in Blanchard, Oklahoma for homeowners who want a real safe room, not a closet plan. We handle site assessment, excavation, placement, waterproofing, and cleanup.',
    body: [
      'Blanchard sits in tornado country just south of Oklahoma City. Lot sizes and HOA rules vary, so we walk the yard with you and recommend an underground unit or an outdoor walk-in saferoom based on access and drainage.',
      'Most residential installs finish in a single day. Permits, where required, are coordinated as part of the job. Pricing follows our standard shelter menu within 60 miles of Marlow, which includes Blanchard.',
    ],
    bullets: [
      'Underground yard shelters and outdoor walk-in saferooms',
      'Same-day residential installs on most sites',
      'Waterproofing, ventilation, and anchoring',
      'Permit help where the city or county requires it',
    ],
    localNote:
      'Blanchard is inside our standard shelter pricing radius from Marlow. Compare sizes on the pricing page, then request a site visit.',
    image: siteMedia.stormCallout,
    imageAlt: 'Storm shelter installation on a residential Oklahoma property',
    parent: { name: 'Storm Shelters', path: '/storm-shelter' },
    related: [
      { label: 'Storm shelter options', href: '/storm-shelter' },
      { label: 'Shelter pricing', href: '/pricing' },
      { label: 'Request a Blanchard estimate', href: '/contact' },
    ],
  },
]

export function getLocationLanding(path: string): LocationLanding {
  const landing = locationLandings.find((item) => item.path === path)
  if (!landing) {
    throw new Error(`Unknown location landing: ${path}`)
  }
  return landing
}

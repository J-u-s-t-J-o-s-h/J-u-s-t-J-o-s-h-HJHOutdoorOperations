export type ShelterRow = {
  size: string
  model?: string
  label: string
  price: number
  displayPrice: string
  badge?: string
  highlight?: boolean
}

export const shelterPricing: {
  aboveGround: ShelterRow[]
  belowGround: ShelterRow[]
} = {
  aboveGround: [
    { size: '5x7', label: '5x7', price: 6200, displayPrice: '$6,200' },
    { size: '6x8', label: '6x8', price: 6850, displayPrice: '$6,850', highlight: true },
    { size: '7x9', label: '7x9', price: 7700, displayPrice: '$7,700' },
  ],
  belowGround: [
    { size: '6x8', model: 'Standard', label: '6x8 Standard', price: 4750, displayPrice: '$4,750' },
    { size: '6x8', model: 'EZN', label: '6x8 EZN', price: 5200, displayPrice: '$5,200' },
    { size: '5x11', model: 'EZN', label: '5x11 EZN', price: 5200, displayPrice: '$5,200', badge: 'New Design & Size' },
    { size: '7x10XL', model: 'XL', label: '7x10XL', price: 5550, displayPrice: '$5,550' },
  ],
}

export const aboveGroundStartingPrice = '$6,200'
export const belowGroundStartingPrice = '$4,750'

export const PRICING_DISCLAIMER =
  'Prices shown are baseline installed pricing and may vary based on site conditions, delivery area, installation requirements, selected options, and final customer selections.'

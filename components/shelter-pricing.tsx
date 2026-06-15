import { shelterPricing, type ShelterRow } from '@/lib/shelter-pricing'

function PricingTable({ title, subtitle, rows }: { title: string; subtitle?: string; rows: ShelterRow[] }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-storm-blue">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm font-semibold text-clay-taupe">{subtitle}</p>
        )}
      </div>
      <div className="overflow-x-auto rounded-2xl border border-soft-khaki/55 bg-bone-linen">
        <table className="w-full min-w-[18rem] sm:min-w-[20rem] table-fixed">
          <colgroup>
            <col className="w-[72%]" />
            <col className="w-[28%]" />
          </colgroup>
          <thead className="bg-gunmetal text-left">
            <tr>
              <th className="px-3 sm:px-5 py-3 sm:py-4 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-bone-linen">
                Model
              </th>
              <th className="px-3 sm:px-5 py-3 sm:py-4 text-right text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-bone-linen">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-soft-khaki/60">
            {rows.map((row, idx) => (
              <tr
                key={row.label}
                className={
                  row.highlight
                    ? 'bg-equipment-gold/12'
                    : row.badge
                      ? 'bg-storm-blue/[0.06]'
                      : idx % 2 === 0
                        ? 'bg-transparent'
                        : 'bg-section-light/65'
                }
              >
                <td className="px-3 sm:px-5 py-3 sm:py-4 text-gunmetal text-base sm:text-[1.12rem] leading-snug">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>{row.label}</span>
                    {row.highlight && (
                      <span className="inline-flex items-center rounded-full border border-equipment-gold/70 bg-equipment-gold/25 px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] uppercase text-earth-brown">
                        Most Popular
                      </span>
                    )}
                    {row.badge && (
                      <span className="inline-flex items-center rounded-full border border-storm-blue/70 bg-storm-blue/15 px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] uppercase text-storm-blue">
                        {row.badge}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-3 sm:px-5 py-3 sm:py-4 text-right text-storm-blue font-extrabold text-xl sm:text-[1.55rem] lg:text-[1.75rem] tabular-nums leading-none">
                  {row.displayPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function ShelterPricingTables({
  disclaimer,
  showStartingPrices = false,
}: {
  disclaimer?: string
  showStartingPrices?: boolean
}) {
  return (
    <div className="space-y-7 sm:space-y-8">
      <PricingTable
        title="Above Ground Shelters"
        subtitle={showStartingPrices ? 'Starting at $6,200' : undefined}
        rows={shelterPricing.aboveGround}
      />
      <PricingTable
        title="Below Ground Shelters"
        subtitle={showStartingPrices ? 'Starting at $4,750' : undefined}
        rows={shelterPricing.belowGround}
      />
      {disclaimer && (
        <p className="text-xs sm:text-sm text-clay-taupe leading-relaxed">{disclaimer}</p>
      )}
    </div>
  )
}

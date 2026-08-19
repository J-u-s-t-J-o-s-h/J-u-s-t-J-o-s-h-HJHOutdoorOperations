'use client'

import Script from 'next/script'

type ElfsightWidgetProps = {
  appId: string
  lazy?: boolean
  className?: string
}

export function ElfsightWidget({ appId, lazy = true, className }: ElfsightWidgetProps) {
  const widgetClass = className ? `${className} elfsight-app-${appId}` : `elfsight-app-${appId}`
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className={widgetClass}
        data-elfsight-app-lazy={lazy ? true : undefined}
      />
    </>
  )
}

import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Grey Blending Beratung in Krefeld | DIE BIANCO Salon",
  description:
    "Deine persönliche Grey-Blending-Beratung in Krefeld-Egelsberg. Natürliche Übergänge, individuelle Nuancen und persönliche Betreuung durch Teresa.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function GreyBlendingBeratungLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Script
        id="hs-script-loader"
        src="//js-eu1.hs-scripts.com/146440145.js"
        strategy="afterInteractive"
        data-cookieconsent="marketing"
      />
    </>
  )
}

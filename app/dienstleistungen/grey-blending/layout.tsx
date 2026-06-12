import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Grey Blending in Krefeld | DIE BIANCO | Natürliche Übergänge",
  description:
    "Grey Blending bei DIE BIANCO in Krefeld-Egelsberg: Natürliche Übergänge, typgerechte Nuancen und persönliche Beratung für einen modernen Signature-Look.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Grey Blending",
  provider: {
    "@type": "HairSalon",
    name: "Teresa Bianco",
  },
  name: "Grey Blending",
  description:
    "Grey Blending bei DIE BIANCO in Krefeld-Egelsberg: Natürliche Übergänge, typgerechte Nuancen und persönliche Beratung für einen modernen Signature-Look.",
}

export default function GreyBlendingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kundenergebnisse & Bewertungen | DIE BIANCO Krefeld",
  description:
    "Entdecke echte Vorher-Nachher-Ergebnisse und Kundenbewertungen von DIE BIANCO in Krefeld. Grey Blending, Blond, Balayage und mehr.",
}

export default function ErgebnisseLayout({ children }: { children: React.ReactNode }) {
  return children
}

export type OpeningHourEntry = {
  day: string
  hours: string
}

export const openingHours: OpeningHourEntry[] = [
  { day: "Montag", hours: "09:00–17:00" },
  { day: "Dienstag", hours: "09:00–17:00" },
  { day: "Mittwoch", hours: "09:00–17:00" },
  { day: "Donnerstag", hours: "09:00–17:00" },
  { day: "Freitag", hours: "09:00–17:00" },
  { day: "Samstag", hours: "07:00–14:00" },
  { day: "Sonntag", hours: "Geschlossen" },
]

export type Team = {
  abbreviation: string
  displayName: string
  id: number
  location: string
  logos: {
    href: string
  }[]
  ranking: number
  score: number
}

export type TeamDataResponse = {
  team: Team
}

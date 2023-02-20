import { Player } from '../types/player'

//  We need to filter out duplicate player data from the api response
//  Ideally these changes would be made in the api but since we don't own it we can't change it
//  But we can filter out the duplicate players here
//  Many duplicates are where a player has accented letters in his name
//  ex: "Juancho Hernangomez" vs "Juancho Hernangómez"
//  So we need to remove the accents and filter out duplicate names

const filterDuplicatePlayerData = (players: Player[]): Player[] => {
  const seen = new Set()

  return players.filter((player) => {
    const duplicate = !seen.has(player.name)

    seen.add(player.name)
    return !duplicate
  })
}

export default filterDuplicatePlayerData

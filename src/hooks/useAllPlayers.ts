import useGetAllPlayers from '../queries/useGetAllPlayers'
import { Player } from '../types/player'
import filterNullData from '../util/filterNullData'

type ReturnValue = {
  isLoading: boolean
  players: Player[]
}

const useAllPlayers = (): ReturnValue => {
  const { data, isLoading } = useGetAllPlayers()
  const filteredPlayers = filterNullData({ data, filterParam: 'firstName' })

  const players = filteredPlayers.map((player) => ({ name: `${player.firstName} ${player.lastName}`, ...player }))

  return {
    players,
    isLoading
  }
}

export default useAllPlayers

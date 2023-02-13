import { Player } from '../types/player'
import filterNullData from '../util/filterNullData'

type Props = {
  data: Player[]
}

const useCleanedUpPlayerData = ({ data }: Props) => {
  const filteredPlayers = filterNullData({ data, filterParam: 'firstName' })

  return filteredPlayers.map((player) => ({ name: `${player.firstName} ${player.lastName}`, ...player }))
}

export default useCleanedUpPlayerData

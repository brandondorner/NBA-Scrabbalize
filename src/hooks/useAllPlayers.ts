import { useEffect, useState } from 'react'
import useGetAllPlayers from '../queries/useGetAllPlayers'
import { PaginationValues } from '../types/paginationValues'
import { Player } from '../types/player'
import extractData from '../util/extractData'
import filterNullData from '../util/filterNullData'

type ReturnValue = {
  isLoading: boolean
  paginationValues: PaginationValues
  players: Player[]
  totalPlayers: number
}

const useAllPlayers = (): ReturnValue => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPlayers, setTotalPlayers] = useState(0)
  const perPage = 25

  const paginationValues = {
    currentPage,
    setCurrentPage,
    perPage
  }

  const { data, isLoading } = useGetAllPlayers()

  const filteredPlayers = filterNullData({ data, filterParam: 'firstName' })

  useEffect(() => {
    setTotalPlayers(filteredPlayers.length)
  }, [filteredPlayers])

  const playersWithName = filteredPlayers.map((player) => ({
    name: `${player.firstName} ${player.lastName}`,
    ...player
  }))

  const displayedPlayers = data ? extractData({ data: playersWithName, currentPage, perPage }) : []

  return {
    paginationValues,
    isLoading,
    players: displayedPlayers,
    totalPlayers
  }
}

export default useAllPlayers

import { useEffect, useMemo, useState } from 'react'
import useGetAllPlayers from '../queries/useGetAllPlayers'
import { PaginationValues } from '../types/paginationValues'
import { Player } from '../types/player'
import extractData from '../util/extractData'
import filterNullData from '../util/filterNullData'
import filterDuplicatePlayerData from '../util/filterPlayerDuplicate'
import scrabbalizeWord from '../util/scrabbalizeWord'

const PER_PAGE = 25

type ReturnValue = {
  isLoading: boolean
  paginationValues: PaginationValues
  players: Player[]
  totalPlayers: number
}

type Props = {
  displayAllData?: boolean
}

const useAllPlayers = ({ displayAllData }: Props): ReturnValue => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPlayers, setTotalPlayers] = useState(0)

  const totalPages = useMemo(() => {
    return Math.ceil(totalPlayers / PER_PAGE)
  }, [totalPlayers, PER_PAGE])

  const { data, isLoading } = useGetAllPlayers()

  const isLastPlayerLoaded = useMemo(() => {
    if (isLoading) {
      return false
    }
    return currentPage * PER_PAGE >= data.length
  }, [currentPage, isLoading, PER_PAGE])

  const paginationValues = {
    currentPage,
    isLastPlayerLoaded,
    setCurrentPage,
    perPage: PER_PAGE,
    totalPages
  }

  // The api has some bad data we need to filter through
  const filteredNullPlayers = filterNullData({ data, filterParam: 'firstName' })
  const filteredActivePlayers = filterNullData({ data: filteredNullPlayers, filterParam: 'team' })
  const filteredPlayers = filterDuplicatePlayerData(filteredActivePlayers)

  useEffect(() => {
    setTotalPlayers(filteredPlayers.length)
  }, [filteredPlayers])

  const playersWithNameAndScore = filteredPlayers.map((player) => {
    const name = `${player.firstName} ${player.lastName}`
    return { ...player, name, score: scrabbalizeWord(name) }
  })

  const sortedPlayers = playersWithNameAndScore.sort((player1, player2) => (player1.score < player2.score ? 1 : -1))
  const sortedPlayersWithRankings = sortedPlayers.map((player, index) => ({ ...player, ranking: index + 1 }))
  const displayedPlayers = data
    ? extractData({ currentPage, data: sortedPlayersWithRankings, displayAllData, perPage: PER_PAGE })
    : []

  return {
    paginationValues,
    isLoading,
    players: displayedPlayers,
    totalPlayers
  }
}

export default useAllPlayers

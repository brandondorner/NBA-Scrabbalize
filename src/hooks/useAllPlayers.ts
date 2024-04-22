import { useEffect, useMemo, useState } from 'react'
import { Player } from 'types/player'
import { PaginationValues } from 'types/paginationValues'
import extractData from 'util/extractData'
import scrabbalizeWord from 'util/scrabbalizeWord'
import useGetAllPlayers from '../queries/useGetAllPlayers'

const PER_PAGE = 25

type ReturnValue = {
  isError: boolean
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

  const { data, isError, isLoading } = useGetAllPlayers()

  useEffect(() => {
    setTotalPlayers(data.length)
  }, [data])

  const playersWithPhotoAndScore = data.map((player) => {
    return {
      ...player,
      headShotUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/${player.player_id}.png`,
      score: scrabbalizeWord(player.player)
    }
  })

  const sortedPlayers = playersWithPhotoAndScore.sort((player1, player2) => (player1.score < player2.score ? 1 : -1))
  const sortedPlayersWithRankings = sortedPlayers.map((player, index) => ({ ...player, ranking: index + 1 }))
  const displayedPlayers = data
    ? extractData({ currentPage, data: sortedPlayersWithRankings, displayAllData, perPage: PER_PAGE })
    : []

  const paginationValues = {
    currentPage,
    setCurrentPage,
    perPage: PER_PAGE,
    totalPages
  }

  return {
    paginationValues,
    isError,
    isLoading,
    players: displayedPlayers,
    totalPlayers
  }
}

export default useAllPlayers

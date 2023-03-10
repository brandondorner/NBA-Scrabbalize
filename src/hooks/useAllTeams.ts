import { useEffect, useMemo, useState } from 'react'
import { PaginationValues } from 'types/paginationValues'
import { Team } from 'types/team'
import extractData from 'util/extractData'
import filterNullData from 'util/filterNullData'
import scrabbalizeWord from 'util/scrabbalizeWord'
import useGetAllTeams from '../queries/useGetAllTeams'

const PER_PAGE = 25

type ReturnValue = {
  isLoading: boolean
  paginationValues: PaginationValues
  teams: Team[]
  totalTeams: number
}

type Props = {
  displayAllData?: boolean
}

const useAllTeams = ({ displayAllData }: Props): ReturnValue => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalTeams, setTotalTeams] = useState(0)

  const totalPages = useMemo(() => {
    return Math.ceil(totalTeams / PER_PAGE)
  }, [totalTeams, PER_PAGE])

  const { data, isLoading } = useGetAllTeams()

  const paginationValues = {
    currentPage,
    setCurrentPage,
    perPage: PER_PAGE,
    totalPages
  }

  const filteredTeams = filterNullData({ data, filterParam: 'name' })

  useEffect(() => {
    setTotalTeams(filteredTeams.length)
  }, [filteredTeams])

  const teamsWithScore = filteredTeams.map((team) => {
    return { ...team, score: scrabbalizeWord(team.name) }
  })
  const sortedTeams = teamsWithScore.sort((team1, team2) => (team1.score < team2.score ? 1 : -1))
  const sortedTeamsWithRankings = sortedTeams.map((team, index) => ({ ...team, ranking: index + 1 }))
  const displayedTeams = sortedTeamsWithRankings
    ? extractData({ currentPage, data: sortedTeamsWithRankings, displayAllData, perPage: PER_PAGE })
    : []

  return {
    paginationValues,
    isLoading,
    teams: displayedTeams,
    totalTeams
  }
}

export default useAllTeams

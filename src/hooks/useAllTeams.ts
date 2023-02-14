import { useEffect, useState } from 'react'
import useGetAllTeams from '../queries/useGetAllTeams'
import { PaginationValues } from '../types/paginationValues'
import { Team } from '../types/team'
import extractData from '../util/extractData'
import filterNullData from '../util/filterNullData'

type ReturnValue = {
  isLoading: boolean
  paginationValues: PaginationValues
  teams: Team[]
  totalTeams: number
}

const useAllTeams = (): ReturnValue => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalTeams, setTotalTeams] = useState(0)
  const perPage = 25

  const paginationValues = {
    currentPage,
    setCurrentPage,
    perPage
  }

  const { data, isLoading } = useGetAllTeams()

  const filteredTeams = filterNullData({ data, filterParam: 'name' })

  useEffect(() => {
    setTotalTeams(filteredTeams.length)
  }, [filteredTeams])

  const displayedTeams = filteredTeams ? extractData({ data: filteredTeams, currentPage, perPage }) : []

  return {
    paginationValues,
    isLoading,
    teams: displayedTeams,
    totalTeams
  }
}

export default useAllTeams

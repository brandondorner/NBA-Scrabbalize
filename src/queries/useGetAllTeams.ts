import { useQuery } from '@tanstack/react-query'
import { TeamDataResponse } from 'types/team'
import axiosClient from '../network/axiosClient'

type ReturnValue = {
  data: TeamDataResponse[]
  isError: boolean
  isLoading: boolean
}

const useGetAllTeams = (): ReturnValue => {
  const response = useQuery({
    queryKey: ['teams'],
    queryFn: async () => await axiosClient.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
  })

  return {
    data: response.data?.data?.sports[0]?.leagues[0]?.teams,
    isError: response.isError,
    isLoading: response.isLoading
  }
}

export default useGetAllTeams

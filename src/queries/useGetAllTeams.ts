import { useQuery } from '@tanstack/react-query'
import axiosClient from '../network/axiosClient'
import { Team } from '../types/team'

type ReturnValue = {
  data: Team[]
  isLoading: boolean
}

const useGetAllTeams = (): ReturnValue => {
  const response = useQuery({
    queryKey: ['teams'],
    queryFn: async () => await axiosClient.get('/teams')
  })

  return {
    data: response.data?.data,
    isLoading: response.isLoading
  }
}

export default useGetAllTeams

import { useQuery } from '@tanstack/react-query'
import axiosClient from '../network/axiosClient'

const useGetAllTeams = () => {
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

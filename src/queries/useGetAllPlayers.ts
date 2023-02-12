import { useQuery } from '@tanstack/react-query'
import axiosClient from '../network/axiosClient'

const useGetAllPlayers = () => {
  const response = useQuery({
    queryKey: ['players'],
    queryFn: async () => await axiosClient.get('/players')
  })

  return {
    data: response.data?.data,
    isLoading: response.isLoading
  }
}

export default useGetAllPlayers

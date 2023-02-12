import { useQuery } from '@tanstack/react-query'
import axiosClient from '../network/axiosClient'

const useGetAllPlayers = () => {
  const response = useQuery({
    queryKey: ['players'],
    queryFn: async () => await axiosClient.get('/players')
  })

  const filteredResponse = filterNullData({ data: response.data?.data, filterParam: 'firstName' })

  return {
    data: filteredResponse,
    isLoading: response.isLoading
  }
}

export default useGetAllPlayers

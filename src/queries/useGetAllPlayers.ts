import { useQuery } from '@tanstack/react-query'
import axiosClient from '../network/axiosClient'
import { Player } from '../types/player'

type ReturnValue = {
  data: Player[]
  isLoading: boolean
}

const useGetAllPlayers = (): ReturnValue => {
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

import { useQuery } from '@tanstack/react-query'
import { Player } from 'types/player'
import axiosClient from '../network/axiosClient'

type ReturnValue = {
  data: Player[]
  isError: boolean
  isLoading: boolean
}

const useGetAllPlayers = (): ReturnValue => {
  const response = useQuery({
    queryKey: ['players'],
    queryFn: async () => await axiosClient.get('/players')
  })

  return {
    data: response.data?.data,
    isError: response.isError,
    isLoading: response.isLoading
  }
}

export default useGetAllPlayers

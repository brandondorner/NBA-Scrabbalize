import { useQuery } from '@tanstack/react-query'
import { Player } from 'types/player'
import axiosClient from '../network/axiosClient'

type Props = {
  id: number
}
type ReturnValue = {
  data: Player
  isLoading: boolean

}
const useGetPlayer = ({ id }: Props): ReturnValue => {
  const response = useQuery({
    queryKey: ['player', id],
    queryFn: async () => await axiosClient.get(`/players/${id}`)
  })

  return {
    data: response.data?.data,
    isLoading: response.isLoading
  }
}

export default useGetPlayer

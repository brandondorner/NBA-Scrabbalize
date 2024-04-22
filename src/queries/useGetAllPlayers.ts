import { useQuery } from '@tanstack/react-query'
import { Player } from 'types/player'
import { useMemo } from 'react'
import axiosClient from '../network/axiosClient'

type ReturnValue = {
  data: Player[]
  isError: boolean
  isLoading: boolean
}

const useGetAllPlayers = (): ReturnValue => {
  const response = useQuery({
    queryKey: ['players'],
    queryFn: async () =>
      await axiosClient.get(
        'https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2023-24&SeasonType=Regular%20Season&StatCategory=PTS'
      )
  }).data?.data?.resultSet

  const parsedData = useMemo(() => {
    return response?.rowSet.map((player: Array<number | string>) => {
      // This data set currently has 24 values
      // We could map through the headers and build the object that way but I wanted to remove a loop within a loop
      // but this way should be more resiliant in case the api structure changes we won't have data mismatches
      return {
        [response.headers[0].toLowerCase()]: player[0],
        [response.headers[1].toLowerCase()]: player[1],
        [response.headers[2].toLowerCase()]: player[2],
        [response.headers[3].toLowerCase()]: player[3],
        [response.headers[4].toLowerCase()]: player[4],
        [response.headers[5].toLowerCase()]: player[5],
        [response.headers[6].toLowerCase()]: player[6],
        [response.headers[7].toLowerCase()]: player[7],
        [response.headers[8].toLowerCase()]: player[8],
        [response.headers[9].toLowerCase()]: player[9],
        [response.headers[10].toLowerCase()]: player[10],
        [response.headers[11].toLowerCase()]: player[11],
        [response.headers[12].toLowerCase()]: player[12],
        [response.headers[13].toLowerCase()]: player[13],
        [response.headers[14].toLowerCase()]: player[14],
        [response.headers[15].toLowerCase()]: player[15],
        [response.headers[16].toLowerCase()]: player[16],
        [response.headers[17].toLowerCase()]: player[17],
        [response.headers[18].toLowerCase()]: player[18],
        [response.headers[19].toLowerCase()]: player[19],
        [response.headers[20].toLowerCase()]: player[20],
        [response.headers[21].toLowerCase()]: player[21],
        [response.headers[22].toLowerCase()]: player[22],
        [response.headers[23].toLowerCase()]: player[23],
        [response.headers[24].toLowerCase()]: player[24]
      }
    })
  }, [response])

  return {
    data: parsedData || [],
    isError: response?.isError,
    isLoading: response?.isLoading
  }
}

export default useGetAllPlayers

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Loading from '../../components/Loading'
import useGetAllPlayers from '../../queries/useGetAllPlayers'
import { Player } from '../../types/player'

const Home = () => {
  const { data: playerData, isLoading } = useGetAllPlayers()

  // This can be moved later on in the component that displays the data
  if (isLoading) {
    return <Loading />
  }

  return (
    <Box>
      <Text>Home Page</Text>
      {playerData.map((player: Player) => {
        return (
          <Flex key={`player-${player.id}`}>
            <Heading as="h3">
              {player.firstName} {player.lastName}
            </Heading>
            <Text as="span" paddingLeft={'4px'}>
              {player.position}
            </Text>
            <Text as="span" paddingLeft={'4px'}>
              {player?.team?.abbreviation ?? 'N/A'}
            </Text>
          </Flex>
        )
      })}
    </Box>
  )
}

export default Home

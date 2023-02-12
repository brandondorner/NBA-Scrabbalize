import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Loading from '../../components/Loading'
import useGetAllTeams from '../../queries/useGetAllTeams'
import { Team } from '../../types/team'

const Teams = () => {
  const { data: teamsData, isLoading } = useGetAllTeams()

  // This can be moved later on in the component that displays the data
  if (isLoading) {
    return <Loading />
  }

  return (
    <Box>
      <Text>Teams Page</Text>
      {teamsData.map((team: Team) => (
        <Flex key={`team-${team.id}`}>
          <Heading as="h3">{team.name}</Heading>
          <Text as="span" paddingLeft={'4px'}>
            {team.record}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}

export default Teams

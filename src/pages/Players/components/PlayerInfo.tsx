import { Box, Flex, Image, Text } from '@chakra-ui/react'
import PlayerAvatar from 'assets/images/player_avatar.png'
import { useMemo } from 'react'
import { Player } from 'types/player'
import scrabbalizeWord from 'util/scrabbalizeWord'

type Props = {
  player: Player
}

const PlayerInfo = ({ player }: Props) => {
  const scrabbleScore = useMemo(() => {
    return player ? scrabbalizeWord(`${player.firstName} ${player.lastName}`) : null
  }, [player])

  return (
    <Flex alignItems={'center'} flexDirection={{ base: 'column', sm: 'row' }}>
      <Image fallbackSrc={PlayerAvatar} h="max-content" w={{ base: '80%', sm: '50%' }} src={player.headShotUrl} />
      <Box>
        <Flex gap={4} pt={2}>
          <Text>{player.team}</Text>
        </Flex>
        <Flex gap={4} pt={2}>
          <Text>{player.position}</Text>
          <Text>{player.jerseyNumber}</Text>
        </Flex>
        <Flex gap={4} pt={2}>
          <Text>HT/WT</Text>
          <Text fontWeight={'semibold'}>
            {player.height} / {player.weight}
          </Text>
        </Flex>
        <Flex gap={4} pt={2}>
          <Text>Birthdate</Text>
          <Text fontWeight={'semibold'}>
            {player.dateOfBirth} ({player.age})
          </Text>
        </Flex>
        <Flex gap={4} pt={2}>
          <Text>Scrabble Score</Text>
          <Text fontWeight={'semibold'}>{scrabbleScore}</Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PlayerInfo

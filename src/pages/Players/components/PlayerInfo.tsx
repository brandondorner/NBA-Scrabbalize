import { Box, Flex, Image } from '@chakra-ui/react'
import PlayerAvatar from 'assets/images/player_avatar.png'
import { Player } from 'types/player'
import PlayerInfoBlock from './PlayerInfoBlock'

type Props = {
  player: Player
}

const PlayerInfo = ({ player }: Props) => {
  return (
    <Flex alignItems={'center'} flexDirection={{ base: 'column', sm: 'row' }}>
      <Image fallbackSrc={PlayerAvatar} h="max-content" w={{ base: '80%', sm: '50%' }} src={player.headShotUrl} />
      <Box>
        <PlayerInfoBlock body={player.team} heading="Team" />
        <PlayerInfoBlock body={player.score} heading="Scrabble Score" />
        <PlayerInfoBlock body={player.rank} heading="Ranking" />
      </Box>
    </Flex>
  )
}

export default PlayerInfo

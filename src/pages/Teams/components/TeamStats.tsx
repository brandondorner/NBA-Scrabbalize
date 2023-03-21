import { Flex, Image } from '@chakra-ui/react'
import PlayerAvatar from 'assets/images/player_avatar.png'
import StatBlock from 'components/StatBlock'
import StatBox from 'components/StatBox'
import { Team } from 'types/team'

type Props = {
  team: Team
}

const TeamStats = ({ team }: Props) => {
  return (
    <Flex alignItems={'center'} flexDirection={'column'}>
      <Image fallbackSrc={PlayerAvatar} h="max-content" w={'90%'} src={team.teamLogoUrl} />
      <StatBox title="TEAM STATS">
        <Flex w="100%">
          <StatBlock stat={team.conference} statName="Conference" />
          <StatBlock stat={team.record} statName="Record" />
          <StatBlock stat={team.score} statName="Scrabble Score" />
        </Flex>
      </StatBox>
    </Flex>
  )
}

export default TeamStats

import { Flex, Image } from '@chakra-ui/react'
import TeamAvatar from 'assets/images/team.webp'
import StatBlock from 'components/StatBlock'
import StatBox from 'components/StatBox'
import { Team } from 'types/team'

type Props = {
  team: Team
}

const TeamStats = ({ team }: Props) => {
  return (
    <Flex alignItems={'center'} flexDirection={'column'}>
      <Image fallbackSrc={TeamAvatar} h="max-content" w={'90%'} src={team.logos[0].href} />
      <StatBox title="TEAM STATS">
        <Flex w="100%">
          <StatBlock stat={team.score} statName="Scrabble Score" />
          <StatBlock stat={team.ranking} statName="Ranking" />
          <StatBlock stat={team.abbreviation} statName="Abbreviation" />
        </Flex>
      </StatBox>
    </Flex>
  )
}

export default TeamStats

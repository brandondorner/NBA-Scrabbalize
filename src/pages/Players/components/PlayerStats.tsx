import { Flex } from '@chakra-ui/react'
import StatBlock from 'components/StatBlock'
import StatBox from 'components/StatBox'
import { Player } from 'types/player'

type Props = {
  player: Player
}

const PlayerStats = ({ player }: Props) => {
  return (
    <StatBox title="CAREER STATS">
      <Flex w="100%">
        <StatBlock stat={player.careerPoints.toFixed(1)} statName="Points" />
        <StatBlock stat={player.careerRebounds.toFixed(1)} statName="Rebounds" />
        <StatBlock stat={player.carrerAssists.toFixed(1)} statName="Assists" />
      </Flex>
      <Flex w="100%">
        <StatBlock isPercentage={true} stat={player.careerPercentageThree.toFixed(1)} statName="3P %" />
        <StatBlock isPercentage={true} stat={player.careerPercentageFieldGoal.toFixed(1)} statName="FG %" />
        <StatBlock isPercentage={true} stat={player.careerPercentageFreethrow.toFixed(1)} statName="FT %" />
      </Flex>
    </StatBox>
  )
}

export default PlayerStats

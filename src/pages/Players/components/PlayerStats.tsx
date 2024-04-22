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
        <StatBlock stat={player.pts} statName="PPG" />
        <StatBlock stat={player.reb} statName="Rebounds" />
        <StatBlock stat={player.ast} statName="Assists" />
      </Flex>
      <Flex w="100%">
        <StatBlock isPercentage={true} stat={(player.fg3_pct * 100).toFixed(1)} statName="3P %" />
        <StatBlock isPercentage={true} stat={(player.fg_pct * 100).toFixed(1)} statName="FG %" />
        <StatBlock isPercentage={true} stat={(player.ft_pct * 100).toFixed(1)} statName="FT %" />
      </Flex>
    </StatBox>
  )
}

export default PlayerStats

import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { useState } from 'react'
import RenderedTeamTable from './RenderedTeamTable'
import Scrabbalize from '../../assets/images/scrabbalize.svg'
import VariantButtonGroup from '../../components/VariantButtonGroup'

const Teams = () => {
  const [displayedTable, setDisplayedTable] = useState('basic')

  return (
    <Flex flexDirection={'column'}>
      <Flex alignItems={'center'} flexDirection="column" gap={8} justifyContent={'center'} pb={16}>
        <Image src={Scrabbalize} />
        <Heading size="lg" textAlign={'center'}>
          Ranking the NBA by player name Scrabble scores.{' '}
        </Heading>
      </Flex>
      <Box>
        <VariantButtonGroup displayedTable={displayedTable} setDisplayedTable={setDisplayedTable} />
        <RenderedTeamTable displayedTable={displayedTable} />
      </Box>
    </Flex>
  )
}

export default Teams

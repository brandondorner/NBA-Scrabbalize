import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import VariantButtonGroup from 'components/VariantButtonGroup'
import Header from 'components/Header'
import RenderedTeamTable from './RenderedTeamTable'

const Teams = () => {
  const [displayedTable, setDisplayedTable] = useState('basic')

  return (
    <Flex flexDirection={'column'}>
      <Header page="Team" />
      <Box>
        <VariantButtonGroup displayedTable={displayedTable} setDisplayedTable={setDisplayedTable} />
        <RenderedTeamTable displayedTable={displayedTable} />
      </Box>
    </Flex>
  )
}

export default Teams

import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import VariantButtonGroup from 'components/VariantButtonGroup'
import Header from 'components/Header'
import RenderedPlayerTable from './RenderedPlayerTable'
import PlayerModal from './components/PlayerModal'

const Players = () => {
  const [displayedTable, setDisplayedTable] = useState('basic')

  return (
    <Flex flexDirection={'column'}>
      <Header page="Player" />
      <Box>
        <VariantButtonGroup displayedTable={displayedTable} setDisplayedTable={setDisplayedTable} />
        <RenderedPlayerTable displayedTable={displayedTable} />
      </Box>
      <PlayerModal />
    </Flex>
  )
}

export default Players

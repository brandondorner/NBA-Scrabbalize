import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import RenderedPlayerTable from './RenderedPlayerTable'
import VariantButton from '../../components/VariantButton'
import Header from '../../components/Header'

const Players = () => {
  const [displayedTable, setDisplayedTable] = useState('basic')

  return (
    <Flex flexDirection={'column'}>
      <Header page="player" />
      <Box>
        <ButtonGroup
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          gap={1}
          pb={2}
          spacing="2"
          variant="outline"
        >
          <VariantButton
            displayedTable={displayedTable}
            setDisplayedTable={setDisplayedTable}
            title="Basic Table"
            type="basic"
          />
          <VariantButton
            displayedTable={displayedTable}
            setDisplayedTable={setDisplayedTable}
            title="Infinite Scroll"
            type="infiniteScroll"
          />

          <VariantButton
            displayedTable={displayedTable}
            setDisplayedTable={setDisplayedTable}
            title="Filterable Paginated"
            type="paginated"
          />
        </ButtonGroup>

        <RenderedPlayerTable displayedTable={displayedTable} />
      </Box>
    </Flex>
  )
}

export default Players

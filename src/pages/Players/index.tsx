import { Box, ButtonGroup, Flex, Heading, Image } from '@chakra-ui/react'
import { useState } from 'react'
import RenderedPlayerTable from './RenderedPlayerTable'
import Scrabbalize from '../../assets/images/scrabbalize.svg'
import VariantButton from '../../components/VariantButton'

const Players = () => {
  const [displayedTable, setDisplayedTable] = useState('basic')

  return (
    <Flex flexDirection={'column'}>
      <Flex alignItems={'center'} flexDirection="column" gap={8} justifyContent={'center'} pb={16}>
        <Image src={Scrabbalize} />
        <Heading size="lg" textAlign={'center'}>
          Ranking the NBA in terms of Scrabble scores.{' '}
        </Heading>
      </Flex>
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

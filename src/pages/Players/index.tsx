import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import RenderedPlayerTable from './RenderedPlayerTable'
const Players = () => {
  const [displayedTable, setDisplayedTable] = useState('basic')

  return (
    <Box>
      <ButtonGroup variant="outline" spacing="2">
        <Button
          colorScheme="blue"
          onClick={() => {
            setDisplayedTable('basic')
          }}
          isActive={displayedTable === 'basic'}
        >
          Basic Table
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => {
            setDisplayedTable('infiniteScroll')
          }}
          isActive={displayedTable === 'infiniteScroll'}
        >
          Infinite Scroll
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => {
            setDisplayedTable('paginated')
          }}
          isActive={displayedTable === 'paginated'}
        >
          Filterable Paginated
        </Button>
      </ButtonGroup>
      <RenderedPlayerTable displayedTable={displayedTable} />
    </Box>
  )
}

export default Players

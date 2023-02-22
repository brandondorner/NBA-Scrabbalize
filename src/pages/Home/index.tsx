import { Box } from '@chakra-ui/react'
import FilterablePaginatedPlayersTable from './FilterablePaginatedPlayersTable'
import InfiniteScrollPlayersTable from './InfiniteScrollPlayersTable'
import SortablePlayersTable from './SortablePlayersTable'

const Home = () => {
  return (
    <Box>
      <InfiniteScrollPlayersTable />
      <SortablePlayersTable />
      <FilterablePaginatedPlayersTable />
    </Box>
  )
}

export default Home

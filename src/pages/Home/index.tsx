import { Box } from '@chakra-ui/react'
import InfiniteScrollPlayersTable from './InfiniteScrollPlayersTable'
import SortablePlayersTable from './SortablePlayersTable'

const Home = () => {
  return (
    <Box>
      <InfiniteScrollPlayersTable />
      <SortablePlayersTable />
    </Box>
  )
}

export default Home

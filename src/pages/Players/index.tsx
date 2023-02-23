import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import FilterablePaginatedPlayersTable from './FilterablePaginatedPlayersTable'
import InfiniteScrollPlayersTable from './InfiniteScrollPlayersTable'
import SortablePlayersTable from './SortablePlayersTable'
import Teams from '../Teams'
import NotFound from '../NotFound'

const Players = () => {
  return (
    <Box>
      <InfiniteScrollPlayersTable />
      <SortablePlayersTable />
      <FilterablePaginatedPlayersTable />
    </Box>
  )
}

export default Players

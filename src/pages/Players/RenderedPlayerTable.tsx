/* eslint-disable indent */
import FilterablePaginatedPlayersTable from './Tables/FilterablePaginatedPlayersTable'
import InfiniteScrollPlayersTable from './Tables/InfiniteScrollPlayersTable'
import SortablePlayersTable from './Tables/SortablePlayersTable'

type Props = {
  displayedTable: string
}

const RenderedPlayerTable = ({ displayedTable }: Props) => {
  switch (displayedTable) {
    case 'infiniteScroll':
      return <InfiniteScrollPlayersTable />
    case 'paginated':
      return <FilterablePaginatedPlayersTable />
    default:
      return <SortablePlayersTable />
  }
}

export default RenderedPlayerTable

/* eslint-disable indent */
import PaginatedPlayersTable from './Tables/PaginatedPlayersTable'
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
      return <PaginatedPlayersTable />
    default:
      return <SortablePlayersTable />
  }
}

export default RenderedPlayerTable

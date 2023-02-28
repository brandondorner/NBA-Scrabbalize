/* eslint-disable indent */
import PaginatedTeamsTable from './Tables/PaginatedTeamsTable'
import InfiniteScrollTeamsTable from './Tables/InfiniteScrollTeamsTable'
import SortableTeamsTable from './Tables/SortableTeamsTable'

type Props = {
  displayedTable: string
}

const RenderedTeamTable = ({ displayedTable }: Props) => {
  switch (displayedTable) {
    case 'infiniteScroll':
      return <InfiniteScrollTeamsTable />
    case 'paginated':
      return <PaginatedTeamsTable />
    default:
      return <SortableTeamsTable />
  }
}

export default RenderedTeamTable

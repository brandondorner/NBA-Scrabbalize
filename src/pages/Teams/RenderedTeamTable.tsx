/* eslint-disable indent */
import FilterablePaginatedTeamsTable from './Tables/FilterablePaginatedTeamsTable'
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
      return <FilterablePaginatedTeamsTable />
    default:
      return <SortableTeamsTable />
  }
}

export default RenderedTeamTable

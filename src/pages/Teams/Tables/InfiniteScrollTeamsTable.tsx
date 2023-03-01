import Loading from 'components/Loading'
import InfiniteScrollTable from 'components/Table/InfiniteScrollTable'
import useTeamsColumns from '../hooks/useTeamsColumns'
import useAllTeams from '../../../hooks/useAllTeams'

const InfiniteScrollTeamsTable = () => {
  const { columns } = useTeamsColumns({})
  const { isLoading, teams, paginationValues, totalTeams } = useAllTeams({ displayAllData: true })

  // maybe pass this into the table component below.
  // so that the table frame loads and shows the loading icon inside the table
  if (isLoading) {
    return <Loading />
  }

  return (
    <InfiniteScrollTable paginationValues={paginationValues} data={teams} columns={columns} totalItems={totalTeams} />
  )
}

export default InfiniteScrollTeamsTable

import Loading from 'components/Loading'
import InfiniteScrollTable from 'components/Table/InfiniteScrollTable'
import useAllTeams from 'hooks/useAllTeams'
import ApiErrorDisplay from 'components/ApiErrorDisplay'
import useTeamsColumns from '../hooks/useTeamsColumns'

const InfiniteScrollTeamsTable = () => {
  const { columns } = useTeamsColumns({})
  const { isError, isLoading, teams, paginationValues, totalTeams } = useAllTeams({ displayAllData: true })

  // maybe pass this into the table component below.
  // so that the table frame loads and shows the loading icon inside the table
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ApiErrorDisplay />
  }

  return (
    <InfiniteScrollTable paginationValues={paginationValues} data={teams} columns={columns} totalItems={totalTeams} />
  )
}

export default InfiniteScrollTeamsTable

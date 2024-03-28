import Loading from 'components/Loading'
import PaginatedTable from 'components/Table/PaginatedTable'
import useAllTeams from 'hooks/useAllTeams'
import useTeamsColumns from '../hooks/useTeamsColumns'
import ApiErrorDisplay from 'components/ApiErrorDisplay'

const PaginatedTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isError, isLoading, teams, paginationValues } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ApiErrorDisplay />
  }

  return <PaginatedTable columns={columns} data={teams} paginationValues={paginationValues} />
}

export default PaginatedTeamsTable

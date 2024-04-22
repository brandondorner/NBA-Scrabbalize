import Loading from 'components/Loading'
import PaginatedTable from 'components/Table/PaginatedTable'
import useAllTeams from 'hooks/useAllTeams'
import ApiErrorDisplay from 'components/ApiErrorDisplay'
import useTeamsColumns from '../hooks/useTeamsColumns'

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

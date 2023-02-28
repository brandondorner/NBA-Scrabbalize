import useTeamsColumns from '../hooks/useTeamsColumns'
import Loading from '../../../components/Loading'
import useAllTeams from '../../../hooks/useAllTeams'
import PaginatedTable from '../../../components/Table/PaginatedTable'

const PaginatedTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isLoading, teams, paginationValues } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  return <PaginatedTable columns={columns} data={teams} paginationValues={paginationValues} />
}

export default PaginatedTeamsTable

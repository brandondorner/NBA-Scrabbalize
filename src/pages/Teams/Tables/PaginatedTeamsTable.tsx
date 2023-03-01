import Loading from 'components/Loading'
import PaginatedTable from 'components/Table/PaginatedTable'
import useTeamsColumns from '../hooks/useTeamsColumns'
import useAllTeams from '../../../hooks/useAllTeams'

const PaginatedTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isLoading, teams, paginationValues } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  return <PaginatedTable columns={columns} data={teams} paginationValues={paginationValues} />
}

export default PaginatedTeamsTable

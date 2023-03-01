import Loading from 'components/Loading'
import PaginatedTable from 'components/Table/PaginatedTable'
import useAllTeams from 'hooks/useAllTeams'
import useTeamsColumns from '../hooks/useTeamsColumns'

const PaginatedTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isLoading, teams, paginationValues } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  return <PaginatedTable columns={columns} data={teams} paginationValues={paginationValues} />
}

export default PaginatedTeamsTable

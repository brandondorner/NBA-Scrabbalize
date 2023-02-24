import useTeamsColumns from '../hooks/useTeamsColumns'
import Loading from '../../../components/Loading'
import useAllTeams from '../../../hooks/useAllTeams'
import FilterablePaginatedTable from '../../../components/Table/FilterablePaginatedTable'

const FilterablePaginatedTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isLoading, teams, paginationValues } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  return <FilterablePaginatedTable columns={columns} data={teams} paginationValues={paginationValues} />
}

export default FilterablePaginatedTeamsTable

import usePlayersColumns from '../hooks/usePlayersColumns'
import Loading from '../../../components/Loading'
import useAllPlayers from '../../../hooks/useAllPlayers'
import FilterablePaginatedTable from '../../../components/Table/FilterablePaginatedTable'

const FilterablePaginatedPlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isLoading, players, paginationValues } = useAllPlayers({})

  if (isLoading) {
    return <Loading />
  }

  return <FilterablePaginatedTable columns={columns} data={players} paginationValues={paginationValues} />
}

export default FilterablePaginatedPlayersTable

import PaginatedTable from 'components/Table/PaginatedTable'
import Loading from 'components/Loading'
import useAllPlayers from 'hooks/useAllPlayers'
import usePlayersColumns from '../hooks/usePlayersColumns'
import ApiErrorDisplay from 'components/ApiErrorDisplay'

const PaginatedPlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isError, isLoading, players, paginationValues } = useAllPlayers({})

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ApiErrorDisplay />
  }

  return <PaginatedTable columns={columns} data={players} paginationValues={paginationValues} />
}

export default PaginatedPlayersTable

import PaginatedTable from 'components/Table/PaginatedTable'
import Loading from 'components/Loading'
import useAllPlayers from 'hooks/useAllPlayers'
import usePlayersColumns from '../hooks/usePlayersColumns'

const PaginatedPlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isLoading, players, paginationValues } = useAllPlayers({})

  if (isLoading) {
    return <Loading />
  }

  return <PaginatedTable columns={columns} data={players} paginationValues={paginationValues} />
}

export default PaginatedPlayersTable

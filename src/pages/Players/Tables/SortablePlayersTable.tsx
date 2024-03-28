import Loading from 'components/Loading'
import SortableTable from 'components/Table/SortableTable'
import useAllPlayers from 'hooks/useAllPlayers'
import usePlayersColumns from '../hooks/usePlayersColumns'
import ApiErrorDisplay from 'components/ApiErrorDisplay'

const SortablePlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isError, isLoading, players } = useAllPlayers({})

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ApiErrorDisplay />
  }

  return <SortableTable data={players} columns={columns} />
}

export default SortablePlayersTable

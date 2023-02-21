import usePlayersColumns from './hooks/usePlayersColumns'
import Loading from '../../components/Loading'
import useAllPlayers from '../../hooks/useAllPlayers'
import SortableTable from '../../components/Table/SortableTable'

const SortablePlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isLoading, players } = useAllPlayers()

  if (isLoading) {
    return <Loading />
  }

  return <SortableTable data={players} columns={columns} />
}

export default SortablePlayersTable

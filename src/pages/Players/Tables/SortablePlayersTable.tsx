import Loading from 'components/Loading'
import SortableTable from 'components/Table/SortableTable'
import usePlayersColumns from '../hooks/usePlayersColumns'
import useAllPlayers from '../../../hooks/useAllPlayers'

const SortablePlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isLoading, players } = useAllPlayers({})

  if (isLoading) {
    return <Loading />
  }

  return <SortableTable data={players} columns={columns} />
}

export default SortablePlayersTable

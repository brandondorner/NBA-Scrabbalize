import Loading from 'components/Loading'
import SortableTable from 'components/Table/SortableTable'
import useAllPlayers from 'hooks/useAllPlayers'
import usePlayersColumns from '../hooks/usePlayersColumns'

const SortablePlayersTable = () => {
  const { columns } = usePlayersColumns({ enableSorting: true })
  const { isLoading, players } = useAllPlayers({})

  if (isLoading) {
    return <Loading />
  }

  return <SortableTable data={players} columns={columns} />
}

export default SortablePlayersTable

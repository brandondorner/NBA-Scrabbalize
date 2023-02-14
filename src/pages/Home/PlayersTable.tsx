import usePlayersColumns from './hooks/usePlayersColumns'
import Loading from '../../components/Loading'
import Table from '../../components/Table'
import useAllPlayers from '../../hooks/useAllPlayers'

const PlayersTable = () => {
  const { columns } = usePlayersColumns()
  const { isLoading, players, paginationValues, totalPlayers } = useAllPlayers()

  // This can be moved later on in the component that displays the data
  if (isLoading) {
    return <Loading />
  }

  return <Table paginationValues={paginationValues} data={players} columns={columns} totalItems={totalPlayers} />
}

export default PlayersTable

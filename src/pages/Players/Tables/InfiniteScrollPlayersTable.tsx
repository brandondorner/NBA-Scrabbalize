import Loading from 'components/Loading'
import InfiniteScrollTable from 'components/Table/InfiniteScrollTable'
import useAllPlayers from 'hooks/useAllPlayers'
import ApiErrorDisplay from 'components/ApiErrorDisplay'
import usePlayersColumns from '../hooks/usePlayersColumns'

const InfiniteScrollPlayersTable = () => {
  const { columns } = usePlayersColumns({})
  const { isError, isLoading, players, paginationValues, totalPlayers } = useAllPlayers({ displayAllData: true })

  // maybe pass this into the table component below.
  // so that the table frame loads and shows the loading icon inside the table
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ApiErrorDisplay />
  }

  return (
    <InfiniteScrollTable
      paginationValues={paginationValues}
      data={players}
      columns={columns}
      totalItems={totalPlayers}
    />
  )
}

export default InfiniteScrollPlayersTable

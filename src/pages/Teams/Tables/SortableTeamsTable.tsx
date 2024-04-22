import Loading from 'components/Loading'
import SortableTable from 'components/Table/SortableTable'
import useAllTeams from 'hooks/useAllTeams'
import ApiErrorDisplay from 'components/ApiErrorDisplay'
import useTeamsColumns from '../hooks/useTeamsColumns'

const SortableTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isError, isLoading, teams } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ApiErrorDisplay />
  }

  return <SortableTable data={teams} columns={columns} />
}

export default SortableTeamsTable

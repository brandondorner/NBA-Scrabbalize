import Loading from '../../../components/Loading'
import useAllTeams from '../../../hooks/useAllTeams'
import SortableTable from '../../../components/Table/SortableTable'
import useTeamsColumns from '../hooks/useTeamsColumns'

const SortableTeamsTable = () => {
  const { columns } = useTeamsColumns({ enableSorting: true })
  const { isLoading, teams } = useAllTeams({})

  if (isLoading) {
    return <Loading />
  }

  return <SortableTable data={teams} columns={columns} />
}

export default SortableTeamsTable

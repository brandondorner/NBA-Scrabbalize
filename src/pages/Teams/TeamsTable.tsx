import useTeamsColumns from './hooks/useTeamsColumns'
import Loading from '../../components/Loading'
import Table from '../../components/Table'
import useAllTeams from '../../hooks/useAllTeams'

const TeamsTable = () => {
  const { columns } = useTeamsColumns()
  const { isLoading, teams, paginationValues, totalTeams } = useAllTeams()

  if (isLoading) {
    return <Loading />
  }

  return <Table paginationValues={paginationValues} data={teams} columns={columns} totalItems={totalTeams} />
}

export default TeamsTable

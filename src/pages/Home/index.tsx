import { Box } from '@chakra-ui/react'
import usePlayersTable from './tables/hooks/usePlayersTable'
import Loading from '../../components/Loading'
import Table from '../../components/Table'

const Home = () => {
  const { data, columns, isLoading } = usePlayersTable()

  // This can be moved later on in the component that displays the data
  if (isLoading) {
    return <Loading />
  }

  return (
    <Box>
      <Table data={data} columns={columns} />
    </Box>
  )
}

export default Home

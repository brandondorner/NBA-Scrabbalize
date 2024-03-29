import { Box, Text } from '@chakra-ui/react'
import { ColumnDef, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PaginationValues } from 'types/paginationValues'
import { Player } from 'types/player'
import { Team } from 'types/team'
import TableContent from './TableContent'
import Loading from '../Loading'

type Props = {
  data: Player[] | Team[]
  columns: Array<ColumnDef<any, string>>
  paginationValues: PaginationValues
  totalItems: number
}

const InfiniteScrollTable = ({ columns, data, paginationValues, totalItems }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const { currentPage, setCurrentPage } = paginationValues
  const isDataFullyLoaded = data.length === totalItems

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  })

  return (
    <>
      <Box border={'solid 1px black'}>
        <InfiniteScroll
          dataLength={data.length}
          hasMore={!isDataFullyLoaded}
          height={550}
          loader={<Loading />}
          next={() => {
            setCurrentPage(currentPage + 1)
          }}
        >
          <TableContent table={table} />
        </InfiniteScroll>
      </Box>
      <Box border={'solid 1px black'} borderTopWidth={0} py={2} pr={4} textAlign={'right'} width={'100%'}>
        <Text>
          Displaying{' '}
          <Text as="b">
            {data.length} of {totalItems}{' '}
          </Text>
          rows
        </Text>
      </Box>
    </>
  )
}
export default InfiniteScrollTable

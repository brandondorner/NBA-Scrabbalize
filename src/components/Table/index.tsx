import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Box, Table as ChakraTable, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PaginationValues } from '../../types/paginationValues'
import { Player } from '../../types/player'
import Loading from '../Loading'

export type DataTableProps = {
  data: Player[]
  columns: Array<ColumnDef<Player, string>>
  paginationValues: PaginationValues
  totalItems: number
}

const Table = ({ columns, data, paginationValues, totalItems }: DataTableProps) => {
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
    <Box border={'solid 1px black'}>
      <InfiniteScroll
        dataLength={data.length}
        height={500}
        next={() => {
          setCurrentPage(currentPage + 1)
        }}
        hasMore={!isDataFullyLoaded}
        loader={<Loading />}
      >
        <ChakraTable variant="striped" colorScheme="gray">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr backgroundColor={'gray.200'} key={headerGroup.id} position="sticky" top="0">
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      cursor={header.column.columnDef.enableSorting ? 'pointer' : 'default'}
                    >
                      <Text as="span">{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                      <Text as="span" pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === 'desc' ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </Text>
                    </Th>
                  )
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
                })}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </InfiniteScroll>
    </Box>
  )
}
export default Table

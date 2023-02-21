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
import { Player } from '../../types/player'
import { Team } from '../../types/team'

type Props = {
  data: Player[] | Team[]
  columns: Array<ColumnDef<any, string>>
}

const SortableTable = ({ columns, data }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([])

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
    <Box border={'solid 1px black'} display="block" overflowY={'auto'} height="500px">
      Top 25 (Sortable Table)
      <ChakraTable variant="striped" colorScheme="gray" height={500}>
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
    </Box>
  )
}
export default SortableTable

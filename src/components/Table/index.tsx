import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Table as ChakraTable, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
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

export type DataTableProps = {
  data: Player[]
  columns: Array<ColumnDef<Player, string>>
}

const Table = ({ data, columns }: DataTableProps) => {
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
    <ChakraTable variant="striped" colorScheme="gray">
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
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
  )
}
export default Table

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Table as ChakraTable, Flex, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { flexRender, Table as TableType } from '@tanstack/react-table'

type Props = {
  table: TableType<any>
}

const TableContent = ({ table }: Props) => {
  return (
    <ChakraTable variant="striped" colorScheme="whiteAlpha">
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr backgroundColor={'gray.100'} key={headerGroup.id} position="sticky" top="0">
            {headerGroup.headers.map((header) => {
              return (
                <Th
                  color={'black'}
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  cursor={header.column.columnDef.enableSorting ? 'pointer' : 'default'}
                >
                  <Flex>
                    <Text>{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                    <Text pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </Text>
                  </Flex>
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
export default TableContent

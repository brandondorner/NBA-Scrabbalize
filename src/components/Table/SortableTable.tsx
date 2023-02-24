import { Box } from '@chakra-ui/react'
import { ColumnDef, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import TableContent from './TableContent'
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
    <Box border={'solid 1px black'} display="block" overflowY={'auto'} height="550px">
      <TableContent table={table} />
    </Box>
  )
}
export default SortableTable

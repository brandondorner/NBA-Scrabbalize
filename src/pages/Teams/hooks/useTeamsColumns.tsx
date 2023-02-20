import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Image } from '@chakra-ui/react'
import PlayerAvatar from '../../../assets/images/player_avatar.png'
import { Team } from '../../../types/team'

type ReturnType = {
  columns: Array<ColumnDef<Team, any>>
}

const useTeamsColumns = (): ReturnType => {
  const columnHelper = createColumnHelper<Team>()

  const columns = useMemo(
    () => [
      {
        accessorKey: 'teamLogoUrl',
        cell: ({ row }: { row: { original: { teamLogoUrl: string } } }) => (
          // change PlayerAvatar here to something else
          <Image maxW={'90px'} src={row.original.teamLogoUrl} fallbackSrc={PlayerAvatar} />
        ),
        enableSorting: false,
        header: 'Team Logo',
        id: 'team-logo',
        size: 10
      },
      {
        accessorKey: 'name',
        cell: ({ row }: { row: { original: { name: string } } }) => row.original.name,
        enableSorting: true,
        header: 'Name'
      },
      {
        accessorKey: 'record',
        cell: ({ row }: { row: { original: { record: string } } }) => row.original.record,
        enableSorting: false,
        header: 'Record '
      },
      {
        accessorKey: 'score',
        cell: ({ row }: { row: { original: { score: number } } }) => row.original.score,
        enableSorting: true,
        header: 'Scrabble Score'
      }
    ],
    [columnHelper]
  )

  return {
    columns
  }
}

export default useTeamsColumns

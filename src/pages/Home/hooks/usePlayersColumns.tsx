import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Image } from '@chakra-ui/react'
import { Player } from '../../../types/player'
import PlayerAvatar from '../../../assets/images/player_avatar.png'

type Props = {
  enableSorting?: boolean
}

type ReturnType = {
  columns: Array<ColumnDef<Player, any>> | any
}

const usePlayersColumns = ({ enableSorting = false }: Props): ReturnType => {
  const columnHelper = createColumnHelper<Player>()

  const columns = useMemo(
    () => [
      {
        accessorKey: 'ranking',
        cell: ({ row }: { row: { original: { ranking: number } } }) => row.original.ranking,
        enableSorting,
        header: 'Ranking',
        id: 'index'
      },
      {
        accessorKey: 'headShotUrl',
        cell: ({ row }: { row: { original: { headShotUrl: string } } }) => (
          <Image maxW={'90px'} src={row.original.headShotUrl} fallbackSrc={PlayerAvatar} />
        ),
        enableSorting: false,
        header: 'Player Image',
        id: 'player-image',
        size: 10
      },
      {
        accessorKey: 'name',
        cell: ({ row }: { row: { original: { name: string } } }) => row.original.name,
        enableSorting,
        header: 'Name'
      },
      {
        accessorKey: 'position',
        cell: ({ row }: { row: { original: { position: string } } }) => row.original.position,
        enableSorting,
        header: 'Position'
      },
      {
        accessorKey: 'team',
        cell: ({ row }: { row: { original: { team: string } } }) => row.original.team,
        enableSorting,
        header: 'Team'
      },
      {
        accessorKey: 'ranking',
        cell: ({ row }: { row: { original: { score: number } } }) => row.original.score,
        enableSorting,
        header: 'Scrabble Score'
      }
    ],
    [columnHelper]
  )

  return {
    columns
  }
}

export default usePlayersColumns

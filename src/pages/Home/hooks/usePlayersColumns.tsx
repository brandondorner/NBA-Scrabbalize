import { useMemo } from 'react'
import { ColumnDef, createColumnHelper, Row } from '@tanstack/react-table'
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

  // The react-table fallback sorting is goes by the string row.id which does not work for comparing
  // numbers because it's comparing strings. So instead we must make a custom sorting function to
  // sort by the index which can never be the same, removing the need for a fallback.
  const sortByIndex = (player1: Row<{ index: number }>, player2: Row<{ index: number }>) => {
    return player1.index > player2.index ? 1 : -1
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'score',
        cell: ({ row }: { row: { index: number } }) => row.index + 1,
        enableSorting,
        header: 'Ranking',
        id: 'index',
        sortingFn: (player1: Row<{ index: number }>, player2: Row<{ index: number }>) => {
          return sortByIndex(player1, player2)
        }
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
        accessorKey: 'score',
        cell: ({ row }: { row: { original: { score: number } } }) => row.original.score,
        enableSorting,
        header: 'Scrabble Score',
        sortingFn: (player1: Row<{ index: number }>, player2: Row<{ index: number }>) => {
          return sortByIndex(player1, player2)
        }
      }
    ],
    [columnHelper]
  )

  return {
    columns
  }
}

export default usePlayersColumns

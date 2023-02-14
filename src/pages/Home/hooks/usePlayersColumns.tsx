import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Image } from '@chakra-ui/react'
import { Player } from '../../../types/player'
import PlayerAvatar from '../../../assets/images/player_avatar.png'

type ReturnType = {
  columns: Array<ColumnDef<Player, any>>
}

const usePlayersColumns = (): ReturnType => {
  const columnHelper = createColumnHelper<Player>()

  const columns = useMemo(
    () => [
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
        enableSorting: true,
        header: 'Name'
      },
      {
        accessorKey: 'position',
        cell: ({ row }: { row: { original: { position: string } } }) => row.original.position,
        enableSorting: true,
        header: 'Position'
      }
    ],
    [columnHelper]
  )

  return {
    columns
  }
}

export default usePlayersColumns

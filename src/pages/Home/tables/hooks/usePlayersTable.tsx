import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Image, Text } from '@chakra-ui/react'
import { Player } from '../../../../types/player'
import PlayerAvatar from '../../../../assets/images/player_avatar.png'
import useAllPlayers from '../../../../hooks/useAllPlayers'

type ReturnType = {
  data: Player[]
  columns: Array<ColumnDef<Player, any>>
  isLoading: boolean
}

const usePlayersTable = (): ReturnType => {
  const { players, isLoading } = useAllPlayers()
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
        cell: ({ row }: { row: { original: { name: string } } }) => (
          <Text as={'span'} cursor="pointer">
            {row.original.name}
          </Text>
        ),
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
    data: players,
    columns,
    isLoading
  }
}

export default usePlayersTable

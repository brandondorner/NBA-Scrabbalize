import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import ScoringTooltip from 'components/ScoringToolTip'
import PlayerAvatar from 'assets/images/player_avatar.png'
import { Player } from 'types/player'

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
        // maybe make all of these types Partial<Player> or something
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
        accessorKey: 'score',
        cell: ({ row }: { row: { original: { score: number } } }) => row.original.score,
        enableSorting,
        header: (
          <Flex alignItems={'center'} gap={2}>
            <Text>Scrabble Score</Text>
            <Tooltip label={<ScoringTooltip tableType={'player'} />}>
              <QuestionIcon />
            </Tooltip>
          </Flex>
        )
      }
    ],
    [columnHelper]
  )

  return {
    columns
  }
}

export default usePlayersColumns

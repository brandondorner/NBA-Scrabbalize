import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Button, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import ScoringTooltip from 'components/ScoringToolTip'
import PlayerAvatar from 'assets/images/player_avatar.png'
import { Player } from 'types/player'
import usePlayerStore from 'state/PlayerStore'

type Props = {
  enableSorting?: boolean
}

type ReturnType = {
  columns: Array<ColumnDef<Player, any>> | any
}

const usePlayersColumns = ({ enableSorting = false }: Props): ReturnType => {
  const columnHelper = createColumnHelper<Player>()
  const { setIsPlayerModalOpen, setSelectedPlayer } = usePlayerStore()

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
        cell: ({ row }: { row: { original: Player } }) => (
          <Image
            cursor={'pointer'}
            fallbackSrc={PlayerAvatar}
            maxW={'90px'}
            onClick={() => {
              setSelectedPlayer(row.original)
              setIsPlayerModalOpen(true)
            }}
            src={row.original.headShotUrl}
          />
        ),
        enableSorting: false,
        header: 'Player Image',
        id: 'player-image',
        size: 10
      },
      {
        accessorKey: 'player',
        // maybe make all of these types Partial<Player> or something
        cell: ({ row }: { row: { original: Player } }) => row.original.player,
        enableSorting,
        header: 'Name'
      },
      {
        accessorKey: 'ppg',
        cell: ({ row }: { row: { original: Player } }) => row.original.pts,
        enableSorting,
        header: 'PPG'
      },
      {
        accessorKey: 'team',
        cell: ({ row }: { row: { original: Player } }) => row.original.team,
        enableSorting,
        header: 'Team'
      },
      {
        accessorKey: 'score',
        cell: ({ row }: { row: { original: Player } }) => row.original.score,
        enableSorting,
        header: (
          <Flex alignItems={'center'} gap={2}>
            <Text>Scrabble Score</Text>
            <Tooltip label={<ScoringTooltip tableType={'player'} />}>
              <QuestionIcon />
            </Tooltip>
          </Flex>
        )
      },
      {
        cell: ({ row }: { row: { original: Player } }) => (
          <Button
            border="solid 1px white"
            backgroundColor="initial"
            color={'white'}
            onClick={() => {
              setSelectedPlayer(row.original)
              setIsPlayerModalOpen(true)
            }}
            _hover={{
              color: 'black',
              bg: 'gray.200'
            }}
          >
            View Player
          </Button>
        ),
        enableSorting,
        header: 'Actions'
      }
    ],
    [columnHelper]
  )

  return {
    columns
  }
}

export default usePlayersColumns

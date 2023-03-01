import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import ScoringTooltip from 'components/ScoringToolTip'
import PlayerAvatar from 'assets/images/player_avatar.png'
import { Team } from 'types/team'

type Props = {
  enableSorting?: boolean
}

type ReturnType = {
  columns: Array<ColumnDef<Team, any>> | any
}

const useTeamsColumns = ({ enableSorting = false }: Props): ReturnType => {
  const columnHelper = createColumnHelper<Team>()

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
        accessorKey: 'teamLogoUrl',
        cell: ({ row }: { row: { original: { teamLogoUrl: string } } }) => (
          // TODO change PlayerAvatar here to something else
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
        enableSorting,
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
        enableSorting,
        header: (
          <Flex alignItems={'center'} gap={2}>
            <Text>Scrabble Score</Text>
            <Tooltip label={<ScoringTooltip tableType={'team'} />}>
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

export default useTeamsColumns

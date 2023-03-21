import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Button, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
import ScoringTooltip from 'components/ScoringToolTip'
import PlayerAvatar from 'assets/images/player_avatar.png'
import { Team } from 'types/team'
import useTeamStore from 'state/TeamStore'
type Props = {
  enableSorting?: boolean
}

type ReturnType = {
  columns: Array<ColumnDef<Team, any>> | any
}

const useTeamsColumns = ({ enableSorting = false }: Props): ReturnType => {
  const columnHelper = createColumnHelper<Team>()
  const { setIsTeamModalOpen, setSelectedTeam } = useTeamStore()

  const columns = useMemo(
    () => [
      {
        accessorKey: 'ranking',
        cell: ({ row }: { row: { original: Team } }) => row.original.ranking,
        enableSorting,
        header: 'Ranking',
        id: 'index'
      },
      {
        accessorKey: 'teamLogoUrl',
        cell: ({ row }: { row: { original: Team } }) => (
          <Image
            cursor={'pointer'}
            fallbackSrc={PlayerAvatar}
            maxW={'90px'}
            onClick={() => {
              setSelectedTeam(row.original)
              setIsTeamModalOpen(true)
            }}
            src={row.original.teamLogoUrl}
          />
        ),
        enableSorting: false,
        header: 'Team Logo',
        id: 'team-logo',
        size: 10
      },
      {
        accessorKey: 'name',
        cell: ({ row }: { row: { original: Team } }) => row.original.name,
        enableSorting,
        header: 'Name'
      },
      {
        accessorKey: 'record',
        cell: ({ row }: { row: { original: Team } }) => row.original.record,
        enableSorting: false,
        header: 'Record '
      },
      {
        accessorKey: 'score',
        cell: ({ row }: { row: { original: Team } }) => row.original.score,
        enableSorting,
        header: (
          <Flex alignItems={'center'} gap={2}>
            <Text>Scrabble Score</Text>
            <Tooltip label={<ScoringTooltip tableType={'team'} />}>
              <QuestionIcon />
            </Tooltip>
          </Flex>
        )
      },
      {
        cell: ({ row }: { row: { original: Team } }) => (
          <Button
            border="solid 1px white"
            backgroundColor="initial"
            onClick={() => {
              setSelectedTeam(row.original)
              setIsTeamModalOpen(true)
            }}
            _hover={{
              color: 'black',
              bg: 'gray.200'
            }}
          >
            View Team
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

export default useTeamsColumns

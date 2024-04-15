import { Flex, Heading } from '@chakra-ui/react'
import Modal from 'components/Modal/Modal'
import ModalNoDataView from 'components/Modal/ModalNoDataView'
import { useMemo } from 'react'
import useTeamStore from 'state/TeamStore'
import TeamStats from './TeamStats'

const TeamModal = () => {
  const { isTeamModalOpen, selectedTeam, setIsTeamModalOpen } = useTeamStore()

  const teamNameObject = useMemo(() => {
    const splitName = selectedTeam?.displayName.split(' ')
    return { location: splitName?.[0], name: splitName?.[1] }
  }, [selectedTeam])

  return (
    <Modal
      isOpen={isTeamModalOpen}
      onClose={() => {
        setIsTeamModalOpen(false)
      }}
    >
      {selectedTeam ? (
        <Flex flexDirection={'column'} gap={4}>
          <Flex gap={2} justifyContent="center">
            <Heading fontWeight={'thin'}>{teamNameObject.location}</Heading>
            <Heading>{teamNameObject.name}</Heading>
          </Flex>
          <TeamStats team={selectedTeam} />
        </Flex>
      ) : (
        <ModalNoDataView />
      )}
    </Modal>
  )
}

export default TeamModal

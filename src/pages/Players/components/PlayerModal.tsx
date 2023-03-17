import { Flex, Heading } from '@chakra-ui/react'
import Modal from 'components/Modal/Modal'
import ModalNoDataView from 'components/Modal/ModalNoDataView'
import useGetPlayer from 'queries/useGetPlayer'
import usePlayerStore from 'state/PlayerStore'

import PlayerStats from './PlayerStats'
import PlayerInfo from './PlayerInfo'

const PlayerModal = () => {
  const { isPlayerModalOpen, selectedPlayerId, setIsPlayerModalOpen } = usePlayerStore()
  const { data: player, isLoading } = useGetPlayer({ id: selectedPlayerId })

  return (
    <Modal
      isLoading={isLoading}
      isOpen={isPlayerModalOpen}
      onClose={() => {
        setIsPlayerModalOpen(false)
      }}
    >
      {player ? (
        <Flex flexDirection={'column'} gap={4}>
          <Flex gap={2} justifyContent="center">
            <Heading fontWeight={'thin'}>{player.firstName}</Heading>
            <Heading>{player.lastName}</Heading>
          </Flex>
          <PlayerInfo player={player} />
          <PlayerStats player={player} />
        </Flex>
      ) : (
        <ModalNoDataView />
      )}
    </Modal>
  )
}

export default PlayerModal

import { Flex, Heading } from '@chakra-ui/react'
import Modal from 'components/Modal/Modal'
import ModalNoDataView from 'components/Modal/ModalNoDataView'
import usePlayerStore from 'state/PlayerStore'
import PlayerStats from './PlayerStats'
import PlayerInfo from './PlayerInfo'

const PlayerModal = () => {
  const { isPlayerModalOpen, selectedPlayer, setIsPlayerModalOpen } = usePlayerStore()

  return (
    <Modal
      isOpen={isPlayerModalOpen}
      onClose={() => {
        setIsPlayerModalOpen(false)
      }}
    >
      {selectedPlayer ? (
        <Flex flexDirection={'column'} gap={4}>
          <Flex gap={2} justifyContent="center">
            <Heading>{selectedPlayer.player}</Heading>
          </Flex>
          <PlayerInfo player={selectedPlayer} />
          <PlayerStats player={selectedPlayer} />
        </Flex>
      ) : (
        <ModalNoDataView />
      )}
    </Modal>
  )
}

export default PlayerModal

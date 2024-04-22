import { Player } from 'types/player'
import { create } from 'zustand'

type Props = {
  isPlayerModalOpen: boolean
  selectedPlayer: Player | null
  setIsPlayerModalOpen: (isOpen: boolean) => void
  setSelectedPlayer: (player: Player) => void
}

const usePlayerStore = create<Props>((set) => ({
  isPlayerModalOpen: false,
  selectedPlayer: null,
  setSelectedPlayer: (player) => {
    set((state) => ({ ...state, selectedPlayer: player }))
  },
  setIsPlayerModalOpen: (isOpen) => {
    set((state) => ({ ...state, isPlayerModalOpen: isOpen }))
  }
}))

export default usePlayerStore

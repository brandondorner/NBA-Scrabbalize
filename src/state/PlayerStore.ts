import { create } from 'zustand'

type Props = {
  isPlayerModalOpen: boolean
  selectedPlayerId: number
  setIsPlayerModalOpen: (isOpen: boolean) => void
  setSelectedPlayerId: (playerId: number) => void
}

const usePlayerStore = create<Props>((set) => ({
  isPlayerModalOpen: false,
  selectedPlayerId: 0,
  setSelectedPlayerId: (playerId) => {
    set((state) => ({ ...state, selectedPlayerId: playerId }))
  },
  setIsPlayerModalOpen: (isOpen) => {
    set((state) => ({ ...state, isPlayerModalOpen: isOpen }))
  }
}))

export default usePlayerStore

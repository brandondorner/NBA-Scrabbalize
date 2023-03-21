import { Team } from 'types/team'
import { create } from 'zustand'

type Props = {
  isTeamModalOpen: boolean
  selectedTeam?: Team
  setIsTeamModalOpen: (isOpen: boolean) => void
  setSelectedTeam: (team: Team) => void
}

const useTeamStore = create<Props>((set) => ({
  isTeamModalOpen: false,
  selectedTeam: undefined,
  setSelectedTeam: (team) => {
    set((state) => ({ ...state, selectedTeam: team }))
  },
  setIsTeamModalOpen: (isOpen) => {
    set((state) => ({ ...state, isTeamModalOpen: isOpen }))
  }
}))

export default useTeamStore

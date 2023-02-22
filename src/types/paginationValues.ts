import { Dispatch, SetStateAction } from 'react'

export type PaginationValues = {
  currentPage: number
  isLastPlayerLoaded?: boolean
  perPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  totalPages?: number
}

import { Dispatch, SetStateAction } from 'react'

export type PaginationValues = {
  currentPage: number
  perPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  totalPages: number
}

import { Box, Flex, FormControl, FormErrorMessage, FormLabel, IconButton, Input, Text } from '@chakra-ui/react'
import { ColumnDef, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { Fragment, useEffect, useState } from 'react'
import TableContent from './TableContent'
import { Player } from '../../types/player'
import { Team } from '../../types/team'
import { PaginationValues } from '../../types/paginationValues'

type Props = {
  data: Player[] | Team[]
  columns: Array<ColumnDef<any, string>>
  paginationValues: PaginationValues
}

const PaginatedTable = ({ columns, data, paginationValues }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pageNumber, setPageNumber] = useState('1')
  const [error, setError] = useState('')

  const { currentPage, isLastPlayerLoaded, setCurrentPage, totalPages } = paginationValues
  const isFirstPage = currentPage === 1

  useEffect(() => {
    setPageNumber(`${currentPage}`)
    setError('')
  }, [currentPage])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  })

  const handlePageInputChange = (value: string) => {
    setPageNumber(value)

    const numberVal = Number(value)

    if (numberVal < 1 || numberVal > totalPages!) {
      setError(`Please enter a whole number between 1 and ${totalPages}.`)
      return
    }

    setError('')
    setCurrentPage(numberVal)
  }

  return (
    <Box>
      <Box border={'solid 1px black'} display="block" overflowY={'auto'} height="550px">
        <TableContent table={table} />
      </Box>
      <Flex border={'solid 1px black'} borderTopWidth={0} justifyContent="space-between" padding={2} width={'100%'}>
        <Box>
          <FormControl
            alignItems="center"
            display={'flex'}
            flexDirection="row"
            justifyContent="center"
            isInvalid={!!error}
          >
            <Flex alignItems={'center'}>
              <FormLabel margin={2} whiteSpace={'nowrap'}>
                Go to page:
              </FormLabel>
              <Input
                onChange={(event) => {
                  const { value } = event.target
                  const regex = /^[0-9]+$/

                  if (value === '' || regex.test(value)) {
                    handlePageInputChange(value.replace(/\D/g, ''))
                  }
                }}
                type="text"
                value={pageNumber}
                width="75px"
              />
            </Flex>
            <FormErrorMessage margin={2}>{error}</FormErrorMessage>
          </FormControl>
        </Box>
        <Flex alignItems="center">
          <IconButton
            aria-label={'First Page'}
            backgroundColor={'initial'}
            isDisabled={isFirstPage}
            icon={<Fragment>{'<<'}</Fragment>}
            onClick={() => {
              setCurrentPage(1)
            }}
            size={'sm'}
          />
          <IconButton
            aria-label={'Previous Page'}
            backgroundColor={'initial'}
            isDisabled={isFirstPage}
            icon={<Fragment>{'<'}</Fragment>}
            onClick={() => {
              setCurrentPage(currentPage - 1)
            }}
            size={'sm'}
          />
          <IconButton
            aria-label={'Next Page'}
            backgroundColor={'initial'}
            isDisabled={isLastPlayerLoaded}
            icon={<Fragment>{'>'}</Fragment>}
            onClick={() => {
              setCurrentPage(currentPage + 1)
            }}
            size={'sm'}
          />
          <IconButton
            aria-label={'Next Page'}
            backgroundColor={'initial'}
            isDisabled={isLastPlayerLoaded}
            icon={<Fragment>{'>>'}</Fragment>}
            onClick={() => {
              setCurrentPage(totalPages!)
            }}
            size={'sm'}
          />
          <Text>
            Page{' '}
            <Text as="b">
              {currentPage} of {totalPages}
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
export default PaginatedTable

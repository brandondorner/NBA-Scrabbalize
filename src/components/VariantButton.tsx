import { Button } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type VariantButtonProps = {
  displayedTable: string
  setDisplayedTable: Dispatch<SetStateAction<string>>
  title: string
  type: string
}

const VariantButton = ({ displayedTable, setDisplayedTable, title, type }: VariantButtonProps) => (
  <Button
    _active={{
      color: 'black',
      bg: 'gray.200'
    }}
    colorScheme="gray"
    onClick={() => {
      setDisplayedTable(type)
    }}
    _hover={{
      color: 'black',
      bg: 'gray.200'
    }}
    isActive={displayedTable === type}
    marginInlineStart={'0 !important'}
  >
    {title}
  </Button>
)

export default VariantButton

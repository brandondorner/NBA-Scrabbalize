import { ButtonGroup } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import VariantButton from './VariantButton'

type VariantButtonGroupProps = {
  displayedTable: string
  setDisplayedTable: Dispatch<SetStateAction<string>>
}

const VariantButtonGroup = ({ displayedTable, setDisplayedTable }: VariantButtonGroupProps) => (
  <ButtonGroup
    display="flex"
    flexDirection={{ base: 'column', sm: 'row' }}
    gap={1}
    pb={2}
    spacing="2"
    variant="outline"
  >
    <VariantButton
      displayedTable={displayedTable}
      setDisplayedTable={setDisplayedTable}
      title="Basic Table"
      type="basic"
    />
    <VariantButton
      displayedTable={displayedTable}
      setDisplayedTable={setDisplayedTable}
      title="Infinite Scroll"
      type="infiniteScroll"
    />

    <VariantButton
      displayedTable={displayedTable}
      setDisplayedTable={setDisplayedTable}
      title="Paginated"
      type="paginated"
    />
  </ButtonGroup>
)

export default VariantButtonGroup

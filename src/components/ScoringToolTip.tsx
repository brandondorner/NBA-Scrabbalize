import { Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import { ScrabbleValues } from '../types/scrabbleValues'

type Props = {
  tableType: 'player' | 'team'
}

const ScoringToolTip = ({ tableType }: Props) => {
  return (
    <Flex flexDirection={'column'}>
      <Text>
        The score is calculated using the {tableType}&apos;s name broken down into letters which are then converted to
        Scrabble scores.
      </Text>
      <Text pt={2} pb={2}>
        The letters are scored as:
      </Text>
      <SimpleGrid columns={3}>
        {Object.entries(ScrabbleValues).map(([key, value]) => {
          return (
            <GridItem key={`${key}-${value}`}>
              {key.toUpperCase()} - {value}
            </GridItem>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}

export default ScoringToolTip

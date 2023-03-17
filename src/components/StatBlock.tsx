import { Flex, Text } from '@chakra-ui/react'

type Props = {
  isPercentage?: boolean
  stat: number | string
  statName: string
}

const StatBlock = ({ isPercentage, stat, statName }: Props) => {
  return (
    <Flex flexDirection={'column'} justifyContent="space-evenly" pb={2} pt={2} width={'100%'}>
      <Text color={'gray.500'} fontWeight="light">
        {statName}
      </Text>
      <Text fontWeight={'bold'}>
        {stat}
        {isPercentage ? '%' : null}
      </Text>
    </Flex>
  )
}

export default StatBlock

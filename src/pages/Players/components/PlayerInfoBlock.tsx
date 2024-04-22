import { Flex, Text } from '@chakra-ui/react'

type Props = {
  body: string | number,
  heading: string
}

const PlayerInfoBlock = ({ body, heading }: Props) => {
  return (
        <Flex gap={4} pt={2}>
          <Text>{heading}:</Text>
          <Text fontWeight={'semibold'}>{body}</Text>
        </Flex>
  )
}

export default PlayerInfoBlock

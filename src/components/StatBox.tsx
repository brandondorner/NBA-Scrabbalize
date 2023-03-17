import { Box, Flex, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type Props = {
  title?: string
} & PropsWithChildren

const StatBox = ({ children, title }: Props) => {
  return (
    <Flex justifyContent={'center'}>
      <Box border={'1px solid black'} borderRadius={10} textAlign="center" width={'95%'}>
        <Box backgroundColor={'gray.800'} borderTopRadius={8} color="white" p={2}>
          <Text>{title}</Text>
        </Box>
        <Flex alignItems={'center'} flexDirection="column" justifyContent={'center'} minH="50px">
          {children}
        </Flex>
      </Box>
    </Flex>
  )
}

export default StatBox

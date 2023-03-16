import { Flex, Heading } from '@chakra-ui/react'

const ModalNoDataView = () => {
  return (
    <Flex alignItems={'center'} h="80%" justifyContent={'center'}>
      <Heading as="h3">No Data Available</Heading>
    </Flex>
  )
}

export default ModalNoDataView

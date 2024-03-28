import { Flex, Heading, Text } from "@chakra-ui/react"

const ApiErrorDisplay = () => {
  return (
    <Flex alignItems={'center'} h='50vh' justifyContent={'center'} w='100%'>
      <Flex flexDirection='column' textAlign={'center'}>
        <Heading>Oops! There seems to be a problem with the API.</Heading>
        <Text>Contact Brandon Dorner and tell him to stop cheaping out on freemium APIs.</Text>
      </Flex>
    </Flex>
  )
}

export default ApiErrorDisplay

import { Flex, Heading } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <Flex alignItems={'center'} flexDirection="column" gap={4} height="80vh" justifyContent="center" width={'100%'}>
      <Heading>Page Not Found</Heading>
      <Heading as="h4" color={'blue.300'} size="md" textDecoration={'underline'}>
        <NavLink title="home" to={'/'}>
          Take me home
        </NavLink>
      </Heading>
    </Flex>
  )
}

export default NotFound

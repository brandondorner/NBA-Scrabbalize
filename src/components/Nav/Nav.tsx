import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, HStack, IconButton, Image, Link, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import navRoutes from './navRoutes'
import basketballImage from '../../assets/images/basketball.png'

type NavRoute = {
  title: string
  to: string
}

const NavLink = ({ route }: { route: NavRoute }) => (
  <Link
    px={2}
    py={1}
    rounded={'sm'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
  >
    <RouterLink to={route.to}>{route.title}</RouterLink>
  </Link>
)

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ sm: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            justifyContent={'space-between'}
            as={'nav'}
            spacing={4}
            display={{ base: 'none', sm: 'flex' }}
            width="100%"
          >
            <Flex>
              {navRoutes.map((route) => (
                <NavLink key={route.title} route={route} />
              ))}
            </Flex>
          </HStack>
          <RouterLink to="/">
            <Image maxW={'initial'} cursor={'pointer'} height={10} src={basketballImage} alt="Home" />
          </RouterLink>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {navRoutes.map((route) => (
                <NavLink key={route.title} route={route} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Nav

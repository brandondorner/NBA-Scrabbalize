import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import navRoutes from './navRoutes'
import basketballImage from '../../assets/images/basketball.png'

type NavRoute = {
  title: string
  to: string
}

const NavLink = ({ close, route }: { close: () => void; route: NavRoute }) => (
  <Link
    color={'black'}
    px={3}
    py={1}
    rounded={'sm'}
    cursor="default"
    _hover={{
      textDecoration: 'none'
    }}
  >
    <RouterLink onClick={close} to={route.to}>
      {route.title}
    </RouterLink>
  </Link>
)

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            aria-label={'Open Menu'}
            bg="gray.800"
            display={{ sm: 'none' }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            size={'sm'}
          />
          <HStack
            justifyContent={'space-between'}
            as={'nav'}
            spacing={4}
            display={{ base: 'none', sm: 'flex' }}
            width="100%"
          >
            <Flex gap={2}>
              {navRoutes.map((routeMenu) => (
                <Menu key={routeMenu.label}>
                  {({ onClose: close }) => (
                    <>
                      <MenuButton
                        as={Button}
                        backgroundColor="inherit"
                        _expanded={{
                          bg: 'gray.200',
                          color: 'black'
                        }}
                        _hover={{
                          bg: 'gray.200',
                          color: 'black',
                          textDecoration: 'none'
                        }}
                        rightIcon={<ChevronDownIcon />}
                      >
                        {routeMenu.label}
                      </MenuButton>
                      <MenuList display={'flex'} flexDirection="column" padding={0} rowGap="2px">
                        {routeMenu.routes.map((route) => (
                          <MenuItem key={route.title}>
                            <NavLink close={close} route={route} />
                          </MenuItem>
                        ))}
                      </MenuList>
                    </>
                  )}
                </Menu>
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
              {navRoutes.map((routeMenu) => (
                <Menu key={routeMenu.label}>
                  <MenuButton
                    as={Button}
                    backgroundColor="inherit"
                    _expanded={{
                      bg: 'gray.200',
                      color: 'black'
                    }}
                    _hover={{
                      bg: 'gray.200',
                      color: 'black',
                      textDecoration: 'none'
                    }}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {routeMenu.label}
                  </MenuButton>
                  <MenuList display={'flex'} flexDirection="column" padding={0} rowGap="2px">
                    {routeMenu.routes.map((route) => (
                      <MenuItem key={route.title}>
                        <NavLink close={close} route={route} />
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Nav

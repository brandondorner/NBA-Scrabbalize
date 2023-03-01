import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, HStack, IconButton, Image, Stack, useDisclosure } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import basketballImage from 'assets/images/basketball.png'
import NavDropdown from './NavDropdown'

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box fontWeight={'semibold'} px={4}>
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
              <NavDropdown />
            </Flex>
          </HStack>
          <RouterLink to="/">
            <Image maxW={'initial'} cursor={'pointer'} height={10} src={basketballImage} alt="Home" />
          </RouterLink>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavDropdown />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Nav

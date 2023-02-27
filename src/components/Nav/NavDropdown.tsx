import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import NavLink from './NavLink'
import navRoutes from './navRoutes'

const NavDropdown = () => {
  return (
    <>
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
                  <MenuItem key={route.title} p={0}>
                    <NavLink close={close} route={route} />
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      ))}
    </>
  )
}

export default NavDropdown

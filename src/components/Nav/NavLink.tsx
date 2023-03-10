import { Flex, Image, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

type NavRoute = {
  icon?: string
  isExternal?: boolean
  title: string
  to: string
}

type NavLinkProps = {
  close: () => void
  route: NavRoute
}

const NavLink = ({ close, route }: NavLinkProps) => (
  <Link
    color={'black'}
    cursor="default"
    fontWeight={'medium'}
    _hover={{
      textDecoration: 'none'
    }}
    padding="0"
    rounded={'sm'}
    width="100%"
    height={'100%'}
  >
    <Flex alignItems={'center'}>
      {route.icon ? <Image height={'25px'} ml={2} src={route.icon} width="25px" /> : null}
      <RouterLink
        onClick={close}
        style={{ display: 'block', height: '100%', padding: '6px 12px', width: '100%' }}
        target={route.isExternal ? '_blank' : '_self'}
        to={route.to}
      >
        {route.title}
      </RouterLink>
    </Flex>
  </Link>
)

export default NavLink

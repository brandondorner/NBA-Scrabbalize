import { Flex, Heading, Image } from '@chakra-ui/react'
import Scrabbalize from '../assets/images/scrabbalize.svg'

type Props = {
  page: 'player' | 'team'
}

const Header = ({ page }: Props) => (
  <Flex alignItems={'center'} flexDirection="column" gap={8} justifyContent={'center'} pb={16}>
    <Image src={Scrabbalize} />
    <Heading size="lg" textAlign={'center'}>
      Ranking the NBA by converting {page} names to Scrabble scores
    </Heading>
  </Flex>
)

export default Header

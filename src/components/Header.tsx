import { Flex, Heading, Image } from '@chakra-ui/react'
import Scrabbalize from 'assets/images/scrabbalize.svg'

type Props = {
  page: 'Player' | 'Team'
}

const Header = ({ page }: Props) => (
  <Flex alignItems={'center'} flexDirection="column" gap={8} justifyContent={'center'} pb={16}>
    <Image src={Scrabbalize} />
    <Heading size="lg" textAlign={'center'}>
      Ranking The NBA By Converting {page} Names To Scrabble Scores
    </Heading>
  </Flex>
)

export default Header

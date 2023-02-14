import { Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Nav from './components/Nav/Nav'
import Teams from './pages/Teams'

const App = () => {
  return (
    <Box minH="100vh" minW="100vw" backgroundColor={'white.500'}>
      {/* <Box minH="100vh" minW="100vw"  padding="2%"> */}
      <Nav />
      <Box padding="2%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App

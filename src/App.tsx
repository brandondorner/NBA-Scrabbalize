import { Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Players from './pages/Players'
import NotFound from './pages/NotFound'
import Nav from './components/Nav/Nav'
import Teams from './pages/Teams'

const App = () => {
  return (
    <Box color={'whiteAlpha.900'} minH="100vh" minW="100vw" backgroundColor={'gray.800'}>
      {/* <Box minH="100vh" minW="100vw"  padding="2%"> */}
      <Nav />
      <Box padding="2%">
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App

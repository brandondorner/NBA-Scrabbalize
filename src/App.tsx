import { Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Nav from './components/Nav/Nav'
import Teams from './pages/Teams'

const App = () => {
  return (
    <Box backgroundColor={'##f6f6f6'} margin="5%">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  )
}

export default App

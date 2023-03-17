import { Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Nav from 'components/Nav/Nav'
import { lazy, Suspense } from 'react'
import Loading from 'components/Loading'

const Players = lazy(async () => await import('pages/Players'))
const Teams = lazy(async () => await import('pages/Teams'))
const NotFound = lazy(async () => await import('pages/NotFound'))

const App = () => {
  return (
    <Box color={'whiteAlpha.900'} minH="100vh" minW="100vw" backgroundColor={'gray.800'}>
      <Nav />
      <Box padding="2%">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  )
}

export default App

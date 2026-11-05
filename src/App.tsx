import { HomePage } from './pages/HomePage'
import { PresentPage } from './pages/PresentPage'
import { useHashPresent } from './hooks/useHashPresent'

function App() {
  const present = useHashPresent()
  return present ? <PresentPage /> : <HomePage />
}

export default App

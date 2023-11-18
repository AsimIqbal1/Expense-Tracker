import { RootRoute } from 'routes/RootRoute'
import { ThemeSwitcher } from 'ui/components/ThemeSwitcher'
import './App.scss'

function App() {
  return (
    <>
      <ThemeSwitcher />
      <RootRoute />
    </>
  )
}

export default App

import { RootRoute } from 'routes/RootRoute'
import './App.scss'
import { ThemeSwitcher } from 'ui/components/ThemeSwitcher'

function App() {
  return (
    <>
      <ThemeSwitcher />
      <RootRoute />
    </>
  )
}

export default App

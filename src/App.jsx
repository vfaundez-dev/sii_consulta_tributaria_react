import Header from "./components/Header"
import ToggleTheme from "./components/ToggleTheme"

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ToggleTheme />
      <Header />
    </div>
  )
}

export default App

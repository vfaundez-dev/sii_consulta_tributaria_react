import Header from "./components/Header";
import Main from "./components/Main";
import ToggleTheme from "./components/ToggleTheme";

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ToggleTheme />
      <Header />
      <Main />
    </div>
  )
}

export default App

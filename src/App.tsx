import './App.css'
import { GridComponent, Navbar, ProjectsContainer } from './components'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Bienvenue sur mon portfolio</h1>
        <GridComponent />
        <ProjectsContainer />
      </main>
    </>
  )
}

export default App

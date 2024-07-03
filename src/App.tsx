import './App.css'
import { Contact, GridComponent, Navbar, ProjectsContainer } from './components'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Bienvenue sur mon portfolio</h1>
        <GridComponent />
        <hr />
        <ProjectsContainer />
        <hr />
        <Contact />
      </main>
    </>
  )
}

export default App

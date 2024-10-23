import './App.css'
import { Contact, GridComponent, Navbar, ProjectsContainer, Footer, Presentation, Exemple } from './components';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Presentation />
        <hr />
        <GridComponent />
        <hr />
        {/* <Exemple />
        <hr /> */}
        <ProjectsContainer />
        <hr />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

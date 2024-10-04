import './App.css'
import { Contact, GridComponent, Navbar, ProjectsContainer, Footer, Presentation } from './components';

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
        <ProjectsContainer />
        <hr />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

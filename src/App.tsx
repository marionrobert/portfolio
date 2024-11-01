import './App.css'
import { Contact, GridComponent, Navbar, ProjectsContainer, Footer, Presentation, Experience} from './components';

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
        <Experience />
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

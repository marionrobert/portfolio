import { useEffect } from 'react';
import './App.css';
import { Contact, GridComponent, Navbar, ProjectsContainer, Footer, Presentation, Experience } from './components';
import createStarryBackground from './utils/createStarryBackground';

function App() {
  useEffect(() => {
    document.body.appendChild(createStarryBackground());
  }, []);

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
  );
}

export default App;

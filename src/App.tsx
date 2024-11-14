import { useEffect } from 'react';
import './App.css';
import { Contact, GridComponent, Navbar, ProjectsContainer, Footer, Presentation, Experience } from './components';
import createStarryBackground from './utils/createStarryBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    document.body.appendChild(createStarryBackground());
    AOS.init({
      duration: 2000, // Durée de l'animation (en ms)
      once: false, // L'animation se joue une seule fois lorsqu'elle entre en vue
      delay: 600,
      offset: 100,
    });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Presentation />
        <hr />
        {/* <GridComponent /> */}
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

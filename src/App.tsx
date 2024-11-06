import { useEffect } from 'react';
import './App.css';
import { Contact, GridComponent, Navbar, ProjectsContainer, Footer, Presentation, Experience, Exp2} from './components';

function createStarryBackground() {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('starry-sky');

  for (let i = 0; i < 300; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Positions
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Size
    const size = Math.random() * 1.9;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Animation delay
    star.style.animationDelay = `${Math.random() * 2}s`;

    starsContainer.appendChild(star);
  }

  return starsContainer;
}

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
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GridComponent } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bienvenue sur le portfolio de Marion Robert</h1>
      <GridComponent />
    </>
  )
}

export default App

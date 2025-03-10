import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DocumentPortal from './pages/documents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DocumentPortal />
  )
}

export default App

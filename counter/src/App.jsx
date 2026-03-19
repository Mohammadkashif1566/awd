import { useState } from 'react'
import Count from './component/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count />
    </>
  )
}

export default App

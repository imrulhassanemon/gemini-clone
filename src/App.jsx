import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidbar from './component/sidbar/Sidbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Sidbar></Sidbar>
    </>
  )
}

export default App

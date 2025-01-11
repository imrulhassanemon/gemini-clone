import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidbar from './component/sidbar/Sidbar'
import Main from './component/main/Main'

function App() {

  return (
    <>
     <Sidbar></Sidbar>
     <Main></Main>
    </>
  )
}

export default App

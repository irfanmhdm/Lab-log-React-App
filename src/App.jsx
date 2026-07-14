import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element = {<View/>}/>
        <Route path="/" element ={<Add/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App

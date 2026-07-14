import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/view" element = {<View/>}/>
        <Route path="/add" element ={<Add/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Character from './components/character';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/character' element={<Character />}/>
        </Routes>
    </div>
  )
}

export default App

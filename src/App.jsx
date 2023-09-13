import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Character from './components/character';
import Game from './components/game'


function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/character' element={<Character />}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
    </div>
  )
}

export default App

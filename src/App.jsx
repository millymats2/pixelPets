import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Character from './components/character';
import Bunny from './components/bunny';
import Cone from './components/cone';
import Jelly from './components/jelly';
import Octopus from './components/octopus';
import Oyster from './components/oyster';
import Pancake from './components/pancake';
import Squid from './components/squid';
import Star from './components/star';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/character' element={<Character />}/>
          <Route path='/donutbandit' element={<Bunny />}/>
          <Route path='/coneconnoisseur' element={<Cone/>}/>
          <Route path='/daddylongtentacles' element={<Jelly/>}/>
          <Route path='/hangrycherry' element={<Octopus/>}/>
          <Route path='/creampie' element={<Oyster/>}/>
          <Route path='/mrbutters' element={<Pancake/>}/>
          <Route path='/wafers' element={<Squid/>}/>
          <Route path='/gingerosnap' element={<Star/>}/>
        </Routes>
    </div>
  )
}

export default App

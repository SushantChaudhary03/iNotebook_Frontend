import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About.jsx';
import NoteState from './context/notes/NoteState.jsx';

const App = () => {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </NoteState>

    </>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Studyabroad from './Pages/studyabroad'
import Studyessentials from './Pages/studyessentials'

function App() {

  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='studyabroad' element={<Studyabroad />} />
            <Route path='studyessentials' element={<Studyessentials />} />
          </Route>
        </Routes>
      </div>
  )
}

export default App
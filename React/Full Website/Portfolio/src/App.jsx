// import { useState } from 'react'
import Menu from './Components/Menu/Menu'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="max-w-5xl flex flex-col items-center py-8">
      <div className="bg-[url('./Vector.png')] bg-no-repeat bg-cover w-full h-full absolute top-0 right-0 -z-10"></div>
      <Menu/>
      <Hero/>
      <div className="h-72">Section 1</div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

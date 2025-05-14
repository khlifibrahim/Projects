import React from 'react'
import Testimonials from './Components/Testimonials'
import Slider from '../../Components/Heading/Slider'
import Assessment from './Components/Assessment'

function Home() {
  return (
    <div>
      <Slider />
      <Assessment />
      <Testimonials />
    </div>
  )
}

export default Home
import Hero from '../../Components/Hero/Hero'
import Clients from '../../Components/Clients/Clients'
import Services from '../../Components/Services/Services'
import Projects from '../../Components/Projects/Projects'
import About from '../../Components/About/About'


function Home() {
  return (
    <div className='mx-auto'>
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <About />
      
    </div>
  )
}

export default Home
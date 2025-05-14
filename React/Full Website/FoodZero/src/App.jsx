import './App.css'
import Menu from './Components/Menu/Menu'
// import SelectBox from './Components/Inputs/SelectBox'
// import Hero from './Components/Hero/Hero'
import OurMenu from './Components/OurMenu/OurMenu'
import About from './Components/About/About'

function App() {

  return (
    <div className='w-full'>
      <header className='bg-nightGreen'>
        <Menu />
        {/* <Hero /> */}
      </header>
      <div className="relative">
        <section className='max-w-[1644px] w-full mx-auto px-[138px]'>
          <OurMenu />
        </section>
        <section className=''>
          <About />
        </section>
      </div>
    </div>
  )
}

export default App

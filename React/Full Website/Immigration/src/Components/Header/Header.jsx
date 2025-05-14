import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=''>
      <div className='flex gap-2 items-center justify-end py-4 px-[15%] bg-[#2B292A] text-white'>
        <span>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
        </span>
        <p>Contacter Nous</p>
      </div>
      <div className='flex gap-4 items-center justify-between py-10 px-[15%]'>
        <span>logo</span>
        <nav className='flex gap-7'>
          <Link to='/' >
            <p className='font-medium'>Home</p>
          </Link>
          <Link to='/studyabroad'>
            <p className='font-medium'>Study Abroad</p>
          </Link>
          <Link to='/studyessentials'>
            <p className='font-medium'>Study Essentials</p>
          </Link>
          <Link to='/about'>
            <p className='font-medium'>A Propos</p>
          </Link>
          <Link to='/contact'>
            <p className='font-medium'>Contacter Nous</p>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
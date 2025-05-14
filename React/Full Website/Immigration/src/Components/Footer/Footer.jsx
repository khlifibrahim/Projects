import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='flex flex-col bg-[#2B292A] text-white'>
      <div className='flex justify-start items-start gap-20 px-[15%] py-10 text-left'>
        <div className='basis-2xs'>
          <img src="" alt="" />
          <div className='flex gap-2'>
            <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></span>
            <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></span>
            <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg></span>
            <span></span>
          </div>
        </div>

        <div className=''>
          <h1 className='font-bold mb-2'>Study Abroad</h1>
          <p>How to choose your destination</p>
          <p>Study abroad intakes</p>
          <p>The world university rankings</p>
          <p>Institution answers</p>
          <p>Study Essentials</p>
        </div>
        <div className=''>
          <h1 className='font-bold mb-2'>Useful Links</h1>
          <p>Enginnering courses</p>
          <p>Health and medicine</p>
          <p>Information technology</p>
          <p>Management courses</p>
          <p>Find Scholarships</p>
        </div>
        <div className=''>
          <h1 className='font-bold mb-2'>ILETS</h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className='flex items-center justify-between px-[15%] py-5 bg-[#221F20] '>
        <p>Copyright © {currentYear} Global Counsel</p>
        <div className='flex gap-4'>
          <Link to=''>
            <p>Disclaimer</p>
          </Link>
          <Link to=''>
            <p>Privacy Policy</p>
          </Link>
          <Link to=''>
            <p>Terms Of Use</p>
          </Link>
          <Link to=''>
            <p>Investors</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
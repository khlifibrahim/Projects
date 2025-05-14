import React from 'react'
import hero from '../../assets/home-hero.png'

function Slider() {
  return (
    <div className='relative w-full flex'>
      <img src={hero} className='' alt="" />
      <div className=''>
        <span className='cursor-pointer z-100 absolute top-[50%] left-[5%] -translate-y-[50%]'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  className="icon icon-tabler icons-tabler-filled icon-tabler-circle-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 0 1 5 8.66c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10a10 10 0 0 1 15 -8.66m-3.293 4.953a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293a1 1 0 0 0 0 -1.414" /></svg>
        </span>
        <div className='px-[15%] absolute left-0 top-[50%] w-[65%] -translate-y-[50%] text-white'>
          <h1 className='font-bold text-5xl mb-4'>
            Begin Your Canada Education Dream</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='px-5 py-2 mt-8 rounded-full border-2 border-white bg-[#EA4142] font-medium cursor-pointer'>Book Your Seat</button>
        </div>
        
        <span className='cursor-pointer z-100 absolute top-[50%] right-[5%] -translate-y-[50%]'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#fff"  className="icon icon-tabler icons-tabler-filled icon-tabler-circle-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -20 0c0 -5.523 4.477 -10 10 -10m-.293 6.293a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293l-2.292 2.293a1 1 0 0 0 1.414 1.414l3 -3a1 1 0 0 0 0 -1.414z" /></svg>
        </span>
      </div>
    </div>
  )
}

export default Slider
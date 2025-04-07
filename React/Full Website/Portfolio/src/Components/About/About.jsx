import React from 'react'
import p1 from '../../assets/about-2.jpg'
import p2 from '../../assets/car.jpg'
import p3 from '../../assets/tokyo.jpg'

function About() {
  return (
    <div className=' max-w-7xl mx-auto flex items-center justify-center gap-10 basis-3/5 bg-[#101011] !px-28 !py-[74px] h-screen max-lg:flex-col max-lg:!px-8'>
        <div className='basis-4/6'>
            <p className='font-semibold text-[#E3E4E6] text-2xl leading-[150%] max-lg:text-base '>A BIT ABOUT ME</p>
            <p className='font-extralight text-3xl text-[#E3E4E6]/55 leading-[150%] max-lg:text-lg '>
                I am a full stack developer passionate<span className='text-[#E3E4E6] font-normal leading-[150%] '> about creating beautiful digital experiences. Alongside coding, I love driving fast cars, music and exploring new places.</span>
            </p>
        </div>
        <div className='grid items-center justify-center grid-cols-2 grid-rows-2 grid-flow-row-dense gap-4 basis-2/5 !my-8'>
            <img src={p1} alt="Coding ❤" className='cursor-pointer rounded-[12px] row-span-1 col-span-1 row-start-1 row-end-3 !my-auto' />
            <img src={p2} alt="Street Racing 😎" className='cursor-pointer rounded-[12px] bg-cover' />
            <img src={p3} alt="Love Tokyo ✨" className='cursor-pointer rounded-[12px]' />
        </div>
    </div>
  )
}

export default About
import React from 'react'
import image from '../../../assets/assignment.png'

function Assessment() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 px-[15%] '>
        <div className='text-center'>
            <h1 className='text-[38px] font-bold '>Study Abroad free Assessment</h1>
            <p className='text-[20px] font-normal'>Fill in your details below to get a personalised advice</p>
            <span className='min-w-40 min-h-2 bg-[#EA4142] '></span>
        </div>
        <div className='flex'>
            <div className='basis-1/2 '>
                <img src={image} alt="" />
            </div>
            <form action="" className='flex flex-wrap gap-8 items-start justify-start w-full basis-1/2'>
                <label htmlFor="">
                    <input type="text" className='border-b-2 w-[256px] basis-1/2' />
                </label>
                <label htmlFor="">
                    <input type="text" className='border-b-2 w-[256px] basis-1/2' />
                </label>
                <label htmlFor="">
                    <input type="text" className='border-b-2 w-[256px] basis-1/2' />
                </label>
                <label htmlFor="">
                    <input type="text" className='border-b-2 w-[256px] basis-1/2' />
                </label>
        
                <select name="" id="" className='border-b-2 w-[256px] '>

                </select>
            
                <select name="" id="" className='border-b-2 w-[256px] '>

                </select>
            
                <select name="" id="" className='border-b-2 w-[256px] '>

                </select>
            
                <select name="" id="" className='border-b-2 w-[256px] '>

                </select>
            
                <select name="" id="" className='border-b-2 w-[256px] '>

                </select>
            
            </form>
        </div>
    </div>
  )
}

export default Assessment
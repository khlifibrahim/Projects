import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function SelectBox( props ) {
    const {options} = props;
  return (
    <select className='px-10 py-[30px] border-2 border-black ' name="" id="">
        <div className='flex items-center justify-between'>
            <p className='font-lato text-black text-[24px] leading-[140%]'>6:00PM</p>
            <div><MdKeyboardArrowDown /></div>
        </div>
    </select>
  )
}

export default SelectBox
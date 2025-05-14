import React from 'react'

function Heading({title, content, img}) {
  return (
    <div className='relative w-full flex'>
          <img src={img} className='' alt="" />
          <div className=''>
            <div className='px-[15%] absolute left-0 top-[50%] w-[65%] -translate-y-[50%] text-white'>
              <h1 className='font-bold text-5xl mb-4'>{title}</h1>
              <p>{content}</p>
            </div>
          </div>
        </div>
  )
}

export default Heading
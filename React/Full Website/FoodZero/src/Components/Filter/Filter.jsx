import React from 'react'

function Filter( {content} ) {
  return (
    <div className='w-fit cursor-pointer'>
        <p className='font-lato hover:border-b-2 hover:border-dotted hover:border-black transition-all'>{content}</p>
    </div>
  )
}

export default Filter
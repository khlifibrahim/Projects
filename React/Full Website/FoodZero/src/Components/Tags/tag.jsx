// import React from 'react'

function Tag({ content }) {
    return (
        <button 
          className="px-5 border-2 border-black font-lato text-[18px] leading-10 hover:bg-darkGreen hover:text-white transition-colors">
            {content}
        </button>
      )
}

export default Tag
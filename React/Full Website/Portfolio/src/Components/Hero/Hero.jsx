// import React from 'react'

function Hero() {
  return (
    <div className='w-full flex flex-col items-center justify-center my-28 text-center'>
        <div className="img ring ring-red-500/90 rounded-full p-8">
            <img src="./me.jpg" className='w-64 h-w-64 rounded-full' alt="" />
        </div>
        <div className="details">
            <h1 className="text-[55px] font-bold my-12 leading-[2.8rem] text-pretty">I do code and <br />make content <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500/90">about it!</span></h1>
            <p className=" mb-12 px-48 text-zinc-400">I am a seasoned full-stack software engineer with over 
                8 years of professional experience, specializing in backend development. 
                My expertise lies in crafting robust and scalable SaaS-based 
                architectures on the Amazon AWS platform.</p>
          </div>
        <div className="btns">
          <button className=' hover:bg-red-500/90 border-none transition-colors'>Get In Touch</button>
        </div>
    </div>
  )
}

export default Hero
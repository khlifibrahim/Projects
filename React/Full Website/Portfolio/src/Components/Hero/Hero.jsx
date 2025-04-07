// import React from 'react'
import './style.css'
import hero from '../../assets/Background_Intro_dark.png'

function Hero() {
  const tags = [
    {
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>),
      title: 'Github'
    },
    {
      
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#E3646E"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>),
      title: 'HTML'
    },
    {
      
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#3996DB"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>),
      title: 'CSS3'
    },
    {
      
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#EABD5F"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>),
      title: 'JavaScript'
    },
    {
      
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#3996DB"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>),
      title: 'React'
    },
    {
      
      icon: (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#82BC4F"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>),
      title: 'Node.js'
    },
  ]


  return (
    <div className='h-screen'>
      <img src={hero} className='bg absolute top-0 left-0 z-0  max-lg:hidden' alt="" />
      <div className='relative h-screen flex flex-col items-center justify-center gap-4 text-center text-white max-lg:w-screen'>
        <div className="relative ring-4 ring-[#EC5656] rounded-full !p-3 max-lg:">
            <img src="./me.jpg" className='w-56 h-w-56 rounded-full max-lg:w-36' alt="" />
            <p className="text-yellow-400 text-3xl font-bold absolute bottom-8 right-10 !mark ring-gray-50 max-lg:bottom-4 max-lg:right-6 max-lg:text-2xl">JS</p>
        </div>
        <div className="details !mt-8 z-10">
          <p>Hello I`m <span className="text-[#EC5656]">Khlifi Brahim</span></p>
            <h1 className="text-[55px] font-bold text-pretty max-lg:text-[32px] ">Full-Stack Developer <span className='max-lg:hidden'>|</span> JavaScript Expert</h1>
            <p className="w-3/4 !mx-auto py-2 px-48 text-zinc-400 text-center max-lg:text-sm">Full-Stack Developer | SaaS & Cloud Architect Specializing in backend development, 
            scalable SaaS solutions, and AWS infrastructure with expertise in JavaScript, Node.js, and React.
            </p>
            <div className="tags flex !mx-auto !mt-4 items-center justify-center gap-6 max-lg:flex-wrap">
              {
                tags.map((tag, i) => (
                <span key={i} className="flex gap-2 bg-neutral-800/30 !px-4 !py-2 rounded-full cursor-pointer">{tag.icon} {tag.title}</span>
              ))
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
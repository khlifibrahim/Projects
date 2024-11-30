// import React from 'react';

function Menu() {
    return (
        <nav className="menu flex justify-center gap-3 bg-[#1c1c1f] ring-1 ring-zinc-500/5 py-4 px-10 rounded-full list-none ">
            <li ><a href="" className='capitalize px-3 py-2 text-zinc-200 text-sm font-medium transition hover:text-red-500'>home</a></li>
            <li ><a href="" className='capitalize px-3 py-2 text-zinc-200 text-sm font-medium transition hover:text-red-500'>about</a></li>
            <li ><a href="" className='capitalize px-3 py-2 text-zinc-200 text-sm font-medium transition hover:text-red-500'>education</a></li>
            <li ><a href="" className='capitalize px-3 py-2 text-zinc-200 text-sm font-medium transition hover:text-red-500'>projects</a></li>
        </nav>
    )
}

export default Menu
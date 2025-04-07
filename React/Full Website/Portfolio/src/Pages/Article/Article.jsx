// import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import p from '../../assets/articles-img.jpg'
import './style.css'


function Article() {
    const location = useLocation()
    const {title} = useParams()
    const article = location.state;
    console.log('Location.state: ', article)

  return (
    <div className=''>
        <div className='header !max-w-7xl !mx-auto text-white min-h-52 flex flex-col justify-end gap-4 !py-3'>
            <Link to='/'>
                <span className='flex gap-2 items-center cursor-pointer'>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="stroke-white icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                    <p className='font-medium'>Back to home</p>
                </span>
            </Link>
            <h1 className='text-5xl font-semibold !pb-4 max-lg:text-3xl max-lg:!mx-4'>{title} </h1>
        </div>
        {
            article.content ? 
        (<div>
            <div className="article-bg">
                <img src={article.image || p} alt="" className='w-full bg-cover' />
            </div>
            <article 
                className='body max-w-7xl w-3/4 !m-auto !py-10 text-white prose '
                dangerouslySetInnerHTML={{ __html: article.content }}>
            </article>
        </div>)
        :
        (
            <div className='w-full flex items-center justify-center text-white min-h-screen'><p className='font-semibold text-3xl'>Article not available</p></div>
        )
        }
    </div>
  )
}

export default Article
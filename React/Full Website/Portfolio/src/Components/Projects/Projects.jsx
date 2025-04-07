import { Link, useNavigate } from 'react-router-dom'
import { articles } from '../../Components/Utilities/articles'
// import p from '../../assets/image 2.png'
// import p1 from '../../assets/image 2-1.png'
// import p2 from '../../assets/image 2-2.png'
// import p3 from '../../assets/image 2-3.png'
// import p4 from '../../assets/image 2-4.png'
// import p5 from '../../assets/image 2-5.png'
import { useState } from 'react'
import { useEffect } from 'react';

function Projects() {
    const navigate = useNavigate();
    const [Articles, setArticles] = useState([])
    console.log('Articles:', Articles)

    useEffect(()=> {
        const fetchArticles = ()=> {
            setArticles(articles)
        }

        fetchArticles()
    }, [])

    const handleNavigation = (id) => {
        const article = articles.find(art => art.id === id)
        navigate(`/article/${articles[id].title}`, {state: article})
    }

  return (
    <div className='services max-w-7xl mx-auto flex flex-col justify-center items-center gap-14 !pt-[80px] !pb-[130px] !px-28 bg-[#101011] text-white max-lg:!px-8'>
        <div className='text-center'>
            <h1 className='text-xl font-normal text-[#EC5656] leading-[120%] '>My Projects</h1>
            <p className='text-2xl font-bold text-[#fff] leading-[120%] max-lg:text-lg'>Real-world apps built with modern stacks designed, developed, and deployed by me.</p>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-6 w-full'>
            {
                Articles.map((article) => (
                    <Link to={`/article/${encodeURIComponent(article.title)}`} 
                        onClick={(e) => { 
                            e.preventDefault()
                            handleNavigation(article.id)
                        }} 
                        key={article.id}>
                        <div className='card-service flex flex-col gap-5 border border-[#16181D] rounded-[10px] !p-3 !w-[280px] min-h-[220px] cursor-pointer hover:border-red transition-colors max-lg:!w-full'>
                            <div className='w-full rounded-[10px] overflow-hidden'>
                                <img src={`${article.image}`} alt="" className=" bg-cover" />
                            </div>
                            <div className='hover:!ml-2 transition-all'>
                                <h2 className='font-bold text-base leading-[120%] '>{article.title} </h2>
                                <p className='font-normal text-sm leading-[140%] text-[#C0C4CE]/50'>{article.description} </p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Projects
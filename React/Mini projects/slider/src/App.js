import React, { useState } from 'react';
import './App.css';
import baot from './assets/pngwing.png'
import watch from './assets/pngfind 1.png'
import headphone from './assets/pngwing-1.png'
import apple from './assets/pngwing 1.png'

function App() {
  const [index, setIndex] = useState(0)
  

  const products = [
    {
      bgColor: '#DEE1E8',
      image: baot,
      title: 'boAt Airdopes ',
      description: 'boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)',
      price: 199
    },
    {
      bgColor: '#FFBBB8',
      image: watch,
      title: 'Apple Watch SE ',
      description: 'boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)',
      price: 1499
    },
    {
      bgColor: '#B3D3F2',
      image: headphone,
      title: 'boAt Ear Headphones',
      description: 'boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)',
      price: 399
    },
    {
      bgColor: '#F4FFBB',
      image: apple,
      title: 'Apple FOLX FNO01 ',
      description: 'boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)',
      price: 1599
    },
  ]

  const handleNext = ()=> {
    setIndex((prevIndex) => {
      if(prevIndex === products.length -1) {
        return 0
      }else {
        return prevIndex + 1
      }
    })
  }
  const handlePrev = ()=> {
    setIndex((prevIndex) => {
      if(prevIndex === 0) {
        return products.length - 1
      }else {
        return prevIndex - 1
      }
    })
  }

  return (
    <div className="App flex justify-around items-center h-screen font-">
      <div className='h-full w-1/2 min-w-[50%] flex items-center justify-center' style={{backgroundColor: products[index].bgColor}}>
        <img src={products[index].image} alt="" className=' object-cover'/>
      </div>

      <div className='flex flex-col justify-between items-start h-full w-full text-left p-20'>
        <button 
          className='text-lightGray' 
          onClick={handleNext}>NEXT</button>
        <div className="product-details flex flex-col gap-7">
          <p className='text-lightGray'>New Arrival Series </p>
          <div className="title font-semibold text-[54px] ">{products[index].title}</div>
          <p className="description text-sm max-w-md">{products[index].description}</p>
          <p className="price text-3xl">$ {products[index].price} </p>
          <button className='w-[237px] h-[64px] bg-black text-white rounded-lg'>Add to cart</button>
        </div>
        <button 
          className='text-lightGray'
          onClick={handlePrev} >PREV</button>
      </div>

    </div>
  );
}

export default App;

// import React from 'react'
import OurMenuImg from '../../assets/our-menu.png'
import CardMenu from './CardMenu'

function OurMenu() {

    const menuItems = [
        {
            price: 20,
            title: 'Deep Sea Snow White Cod Fillet',
            description: 'Delicate and flaky cod fillet, lightly seasoned and pan-seared to perfection.'
        },
        {
            price: 18,
            title: 'Grilled Mediterranean Lamb Chops',
            description: 'Tender lamb chops marinated in rosemary, garlic, and olive oil, grilled to juicy perfection.'
        },
        {
            price: 22,
            title: 'Truffle Infused Wild Mushroom Risotto',
            description: 'Creamy Arborio rice cooked with wild mushrooms, white truffle oil, and Parmesan.'
        },
        {
            price: 16,
            title: 'Caramelized Banana French Toast',
            description: 'Thick brioche toast topped with caramelized bananas, maple syrup, and powdered sugar.'
        }
    ];

  return (
    <div  className=''>
        <img src={OurMenuImg} className='absolute top-0 right-0 w-3/6' alt="" />
        <div className='py-32'>
            <h1 className='font-rufina font-bold leading-[120px] text-[108px]'>Our Menu</h1>
            <p className='font-lato font-light text-[24px] text-Grey leading-[140%] w-[32%] '>This is a section of your menu. Give your section a brief description</p>
        </div>
        <div className='grid grid-cols-2 gap-12'>
            {menuItems.map((item, i) => (<CardMenu key={i} price={item.price} title={item.title} description={item.description} />))}
        </div>
    </div>
  )
}

export default OurMenu
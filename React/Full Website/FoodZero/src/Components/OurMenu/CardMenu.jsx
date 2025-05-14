
function CardMenu( {price, title, description} ) {
  return (
    <div className='font-rufina'>
        <div className="font-bold text-5xl leading-[64px] text-right border-b-4 border-dashed border-black">${price}</div>
        <h1 className='font-bold text-[68px] leading-[84px] my-6'>{title}</h1>
        <p className='font-lato text-2xl text-Grey leading-[140%]'>{description} </p>
    </div>
  )
}

export default CardMenu
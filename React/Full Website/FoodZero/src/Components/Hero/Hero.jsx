import food1 from '../../assets/Hero-1.png'
import spice1 from '../../assets/spices1.png'
import spice2 from '../../assets/spices2.png'
import spice3 from '../../assets/spices3.png'


function Hero() {
  return (
    <div className='my-12'>
        <div className='flex justify-between'>
            <div className=" text-white bg-red-400">
                <h1 className='font-rufina  text-[148px] leading-[152px]'>
                Healthy Eating 
                is important
                part of lifestyle
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
            <div className='relative bg-blue-400 w-3/5'>
                <img src={food1} className='absolute w-[792px]' alt="" />
                <div className='flex gap-11'>
                    <img src={spice1} className='w-60' alt="" />
                    <img src={spice2} className='w-60' alt="" />
                    <img src={spice3} className='w-60' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
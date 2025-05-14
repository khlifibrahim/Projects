import cookeimg from '../../assets/about-cook.png'

function About() {
  return (
    <div className=' bg-lightGreen'>
        <div className='max-w-[1644px] w-full mx-auto px-[138px] flex justify-center gap-8'>
            <div className='h-full'>
                <img src={cookeimg} alt="" />
            </div>
            <div className='h-full'>
                <h1 className='font-rufina text-heading1-rufina leading-[120px] '>Excellent cook</h1>
                <p className='font-lato text-bo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>
            </div>
        </div>
    </div>
  )
}

export default About
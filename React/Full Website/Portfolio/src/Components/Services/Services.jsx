import './style.css'
import desk from '../../assets/service-icon-desk.png'
import server from '../../assets/service-icon-server.png'
import devOps from '../../assets/devOps.png'

function Services() {
    const services = [
        {
            icon: desk ,
            title: 'Websites and Applications',
            description: 'Development of interfaces',
        },
        {
            icon:  server,
            title: 'API and data Base',
            description: 'System Services Creation',
        },
        {
            icon: devOps,
            title: 'DevOps',
            description: 'Application infrastructure',
        },
    ]
  return (
    <div className=' max-w-7xl mx-auto services flex flex-col justify-center items-center gap-14 !pt-[80px] !pb-[130px] !px-28 bg-[#101011] text-white max-lg:!px-8'>
        <div className='text-center'>
            <h1 className='text-xl font-normal text-[#EC5656] leading-[120%] '>My Services</h1>
            <p className='text-2xl font-bold text-[#fff] leading-[120%] max-lg:text-lg'>I empower your ideas with seamless digital solutions.</p>
        </div>
        <div className='flex justify-center items-center gap-6 w-full max-lg:flex-wrap max-lg:gap-4'>
            {
                services.map((service, i) => (
                    <div key={i} className='card-service flex flex-col gap-5 border border-border rounded-[10px] !p-5 !w-[280px] max-lg:!w-full '>
                        <div className='w-12 h-12 max-lg:w-10 max-lg:h-10'>
                            <img src={`${service.icon}`} alt="" className=" bg-cover" />
                        </div>
                        <div>
                            <h2 className='font-bold text-base leading-[120%] max-lg:text-sm'>{service.title} </h2>
                            <p className='font-normal text-sm leading-[140%] text-[#C0C4CE]/50 max-lg:text-xs'>{service.description} </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services
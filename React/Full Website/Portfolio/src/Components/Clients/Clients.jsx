import google from '../../assets/Google Logo.png'
import miscrosoft from '../../assets/Microsoft Logo.png'
import fedex from '../../assets/FedEx Logo.png'
import airbnb from '../../assets/Airbnb Logo.png'

function Contact() {
  const clients = [ google, miscrosoft, fedex, airbnb ]

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col justify-center items-start gap-20 !pt-[80px] !pb-[130px] !px-28 max-lg:!px-8 text-neutral-500 bg-[#101011]">
      <h1 className='text-[40px] leading-[150%] text-[#E3E4E6]/50 font-extralight max-lg:text-[32px] '>
        Some of the 
        <span className='text-[#E3E4E6]/100 font-bold'> clients I have <br /> work with</span>
      </h1>
      <div className="caroussel flex w-full items-center justify-between max-lg:flex-wrap max-lg:gap-4">
        {
          clients.map((client, i) => (
            // <span >
              <img key={i} src={client} className='max-lg:w-1/3' alt="" />
            // </span>
          ))
        }
      </div>
    </div>
  )
}

export default Contact


import Button from '../Btns/Button'
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../../assets/Logo.png'

function Menu() {

  return (
    <div className='max-w-[1644px] mx-auto px-[138px] p-3 flex justify-between items-center py-4'>
        <div className="flex justify-between items-center gap-4">
            <img src={logo} className='w-40' alt="" />
            <div ><AiOutlineMenu className='w-6 h-6 text-white cursor-pointer'/></div>
        </div>
        <div className="flex justify-between items-center gap-4 text-white">
            <p>+86 852 346 000</p>
            <Button content={'Reservations'} style={{BorderColor: "white"}}/>
        </div>
    </div>
  )
}

export default Menu
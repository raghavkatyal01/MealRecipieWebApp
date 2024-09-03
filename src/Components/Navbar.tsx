import { FC } from 'react'
import { Link } from 'react-router-dom'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return <>
  <div className='flex flex-row justify-between bg-transparent fixed-top border-black'>
    <img src="https://cdn-icons-png.flaticon.com/128/296/296665.png" alt="" className='w-16 p-2'/>
    <div className='flex m-4 gap-20 text-red-900 font-bold'>
        <Link to='/Country'>Country Wise</Link>
        <Link to='/Country'>Name Wise</Link>
        <Link to='/Country'>About Us</Link>
    </div>
  </div >
  </>
}

export default Navbar
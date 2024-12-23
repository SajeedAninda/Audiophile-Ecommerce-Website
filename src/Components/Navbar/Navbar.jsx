import React from 'react'
import logo from '../../assets/images/shared/desktop/logo.svg'
import cartIcon from '../../assets/images/shared/desktop/icon-cart.svg'

const Navbar = () => {
  return (
    <div className='bg-[#181918]'>
      <div className='w-[100%] lg:w-[1130px] mx-auto h-[14vh] border-b border-[#3a3a3a] flex justify-between items-center'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <div className='links flex gap-10 items-center text-[15px] text-white font-semibold uppercase tracking-widest'>
          <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
            Home
          </p>
          <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
            Headphones
          </p>
          <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
            Speakers
          </p>
          <p className='hover:text-[#d87d4a] cursor-pointer transition-all duration-300 delay-75'>
            Earphones
          </p>
        </div>

        <div className='cart'>
          <img className='cursor-pointer' src={cartIcon} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Navbar

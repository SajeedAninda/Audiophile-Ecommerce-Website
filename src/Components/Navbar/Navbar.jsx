import React from 'react'
import logo from '../../assets/images/shared/desktop/logo.svg'
import cartIcon from '../../assets/images/shared/desktop/icon-cart.svg'

const Navbar = () => {
  return (
    <div className='bg-[#181918]'>
      <div className='w-[100%] lg:w-[1130px] mx-auto h-[14vh] border-b border-gray-400 flex justify-between items-center'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <div className='links flex gap-10 items-center text-[15px] text-white font-semibold uppercase tracking-widest'>
          <p className='hover:text-[#d87d4a] cursor-pointer'>Home</p>
          <p className='hover:text-[#d87d4a] cursor-pointer'>Headphones</p>
          <p className='hover:text-[#d87d4a] cursor-pointer'>Speakers</p>
          <p className='hover:text-[#d87d4a] cursor-pointer'>Earphones</p>
        </div>

        <div className="cart">
            <img className='cursor-pointer' src={cartIcon} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Navbar

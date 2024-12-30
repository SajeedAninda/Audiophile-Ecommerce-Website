import React from 'react';
import logo from '../../assets/images/shared/desktop/logo.svg';
import cartIcon from '../../assets/images/shared/desktop/icon-cart.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-[#181918]'>
      <div className='w-[100%] lg:w-[1130px] mx-auto h-[14vh] border-b border-[#3a3a3a] flex justify-between items-center'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>

        <div className='links flex gap-10 items-center text-[15px] text-white font-semibold uppercase tracking-widest'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 delay-75 hover:text-[#d87d4a] ${
                isActive ? 'text-[#d87d4a]' : 'text-white'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/headphones'}
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 delay-75 hover:text-[#d87d4a] ${
                isActive ? 'text-[#d87d4a]' : 'text-white'
              }`
            }
          >
            Headphones
          </NavLink>
          <NavLink
            to={'/speakers'}
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 delay-75 hover:text-[#d87d4a] ${
                isActive ? 'text-[#d87d4a]' : 'text-white'
              }`
            }
          >
            Speakers
          </NavLink>
          <NavLink
            to={'/earphones'}
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 delay-75 hover:text-[#d87d4a] ${
                isActive ? 'text-[#d87d4a]' : 'text-white'
              }`
            }
          >
            Earphones
          </NavLink>
        </div>

        <div className='cart'>
          <img className='cursor-pointer' src={cartIcon} alt='Cart Icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

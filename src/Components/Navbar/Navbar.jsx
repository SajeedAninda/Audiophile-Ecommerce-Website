import React, { useContext, useState } from 'react'
import logo from '../../assets/images/shared/desktop/logo.svg'
import cartIcon from '../../assets/images/shared/desktop/icon-cart.svg'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../ContextAPI/CartProvider'
import Modal from '../Modal/Modal'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const { cartItems, setCartItems } = useContext(CartContext)

  const toggleModal = () => setModalOpen(!isModalOpen)
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div>
      {/* FOR LARGE DEVICE  */}
      <div className='bg-[#181918] hidden lg:block'>
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

          <div className='cart relative' onClick={toggleModal}>
            <img className='cursor-pointer' src={cartIcon} alt='Cart Icon' />
            <div className='w-[19px] h-[19px] bg-[#d87d4a] rounded-full font-bold flex justify-center items-center absolute -top-3 -right-3'>
              <p className='text-[13px] text-white'>{totalQuantity}</p>
            </div>
          </div>

          {isModalOpen && (
            <Modal
              cartItems={cartItems}
              setCartItems={setCartItems}
              onClose={toggleModal}
            />
          )}
        </div>
      </div>

      {/* FOR MOBILE DEVICES  */}
      <div className='bg-[#181918] flex items-center justify-between lg:hidden h-[14vh] px-6'>
        <div onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <IoClose className='text-[25px] text-white font-bold cursor-pointer' />
          ) : (
            <GiHamburgerMenu className='text-[25px] text-white font-bold cursor-pointer' />
          )}
        </div>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>

        <div className='cart relative' onClick={toggleModal}>
          <img className='cursor-pointer' src={cartIcon} alt='Cart Icon' />
          <div className='w-[19px] h-[19px] bg-[#d87d4a] rounded-full font-bold flex justify-center items-center absolute -top-3 -right-3'>
            <p className='text-[13px] text-white'>{totalQuantity}</p>
          </div>
        </div>

        {isModalOpen && (
          <Modal
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={toggleModal}
          />
        )}
      </div>

      {/* SIDEBAR */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black opacity-50 z-40'
            onClick={closeSidebar}
          ></div>

          {/* Sidebar */}
          <div className='fixed left-0 top-0 h-full w-[50%] bg-[#181918] z-50 py-12 px-10'>
            <nav className='flex flex-col gap-12 text-white font-semibold text-[20px]'>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `cursor-pointer transition-all duration-300 delay-75 hover:text-[#d87d4a] ${
                    isActive ? 'text-[#d87d4a]' : 'text-white'
                  }`
                }
                onClick={closeSidebar}
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
                onClick={closeSidebar}
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
                onClick={closeSidebar}
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
                onClick={closeSidebar}
              >
                Earphones
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar

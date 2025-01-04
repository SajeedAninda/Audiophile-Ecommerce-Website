import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const Modal = ({ cartItems, onClose, setCartItems }) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleRemoveAll = () => {
    setCartItems([])
    localStorage.removeItem('cart')
  }

  const updateQuantity = (slug, action) => {
    const updatedItems = cartItems.map(item => {
      if (item.slug === slug) {
        if (action === 'increase') {
          item.quantity += 1
        } else if (action === 'decrease' && item.quantity > 1) {
          item.quantity -= 1
        }
      }
      return item
    })

    setCartItems(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }

  return (
    <div
      className='fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg px-8 py-6 w-[90%] lg:w-[500px]'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold mb-6 uppercase'>
            Cart ({totalQuantity})
          </h2>

          <div className='flex items-center mb-6'>
            <button
              onClick={handleRemoveAll}
              className='text-[#00000080] underline font-bold hover:text-[#d87d4a]'
            >
              Remove All
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='mt-5'>
            {cartItems.map(item => (
              <div
                key={item.slug}
                className='flex justify-between items-center mb-4'
              >
                <div className='flex gap-4 items-center'>
                  <div>
                    <img
                      src={item.image}
                      className='w-16 h-16 object-cover rounded'
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p className='font-bold text-[#191919]'>{item.name}</p>
                    <p className='text-[#00000080] mt-1 font-semibold'>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className='cartCounter flex items-center'>
                  <div
                    className='bg-[#f1f1f1] h-[48px] hover:bg-[#d3d2d2] cursor-pointer transition-colors duration-300 ease-in-out py-2 px-4 flex items-center group select-none'
                    onClick={() => updateQuantity(item.slug, 'decrease')}
                  >
                    <FiMinus className='text-[15px] group-hover:text-[#d87d5a]' />
                  </div>

                  <div className='bg-[#f1f1f1] h-[48px] font-bold py-2 px-4 text-[15px] flex justify-center items-center'>
                    {item.quantity}
                  </div>

                  <div
                    className='bg-[#f1f1f1] h-[48px] hover:bg-[#d3d2d2] cursor-pointer transition-colors duration-300 ease-in-out py-2 px-4 flex items-center group select-none'
                    onClick={() => updateQuantity(item.slug, 'increase')}
                  >
                    <FiPlus className='text-[15px] group-hover:text-[#d87d5a]' />
                  </div>
                </div>
              </div>
            ))}

            <div className='mt-8 flex justify-center gap-4 items-center'>
              <p className='text-[17px] font-semibold text-[#00000080] uppercase '>
                Total:
              </p>

              <h3 className='text-[#191919] font-bold text-[18px]'>
                $ {totalPrice}
              </h3>
            </div>

            <div className='mt-8 w-full'>
              <button className='bg-[#d87d4a] w-full px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out'>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal

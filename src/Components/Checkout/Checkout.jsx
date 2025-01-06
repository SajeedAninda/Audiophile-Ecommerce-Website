import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import CheckoutSummary from './CheckoutSummary'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
  let navigate = useNavigate()

  return (
    <div className='bg-[#f1f1f180] pt-10 pb-24'>
      <div className='w-[100%] lg:w-[1130px] mx-auto'>
        <button
          onClick={() => {
            navigate(-1)
          }}
          className='bg-[#d87d4a] px-8 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out flex items-center gap-3'
        >
          <IoReturnUpBack className='text-white text-[25px] font-bold' />
          Go Back
        </button>

        <div className='mainDiv flex gap-10 justify-between items-start mt-6'>
          <CheckoutForm></CheckoutForm>

          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
}

export default Checkout

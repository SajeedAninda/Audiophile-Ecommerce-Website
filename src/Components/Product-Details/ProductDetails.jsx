import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  let navigate = useNavigate()

  return (
    <div>
      <div className='w-[100%] lg:w-[1130px] mx-auto mt-16'>
        <button
          onClick={() => {
            navigate(-1)
          }}
          className='bg-[#d87d4a] px-8 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] mt-8 transition-colors duration-300 ease-in-out flex items-center gap-3'
        >
          <IoReturnUpBack className='text-white text-[25px] font-bold' />
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ProductDetails

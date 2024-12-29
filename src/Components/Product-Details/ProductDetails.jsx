import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import zx9Img from '../../assets/images/product-zx9-speaker/desktop/image-product.jpg'
import { FiMinus, FiPlus } from 'react-icons/fi'

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

        <div
          className={`productHeader flex mt-16 gap-10 justify-between items-center mb-28`}
        >
          <div className='imgDiv w-[50%]'>
            <img className='rounded-xl' src={zx9Img} />
          </div>

          <div className={`textDiv w-[50%] pl-20`}>
            <p className='text-[14px] text-[#d87d4a] uppercase tracking-[15px]'>
              New Product
            </p>
            <h3 className='text-[#191919] text-[40px] font-bold uppercase mt-6 leading-[45px]'>
              ZX9 Speaker
            </h3>

            <p className='mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>

            <p className='text-[#191919] text-[18px] font-bold uppercase mt-6'>
              $ 4,500
            </p>

            <div className='flex items-center gap-3 mt-9'>
              <div className='cartCounter flex items-center'>
                <div className='bg-[#f1f1f1] h-[48px] hover:bg-[#d3d2d2] cursor-pointer transition-colors duration-300 ease-in-out py-3 px-5 flex items-center group'>
                  <FiMinus className='text-[15px] group-hover:text-[#d87d5a]' />
                </div>

                <div className='bg-[#f1f1f1] h-[48px] font-bold py-3 px-5 text-[15px]'>1</div>

                <div className='bg-[#f1f1f1] h-[48px] hover:bg-[#d3d2d2] cursor-pointer transition-colors duration-300 ease-in-out py-3 px-5 flex items-center group'>
                  <FiPlus className='text-[15px] group-hover:text-[#d87d5a]' />
                </div>
              </div>

              <div className='flex items-center'>
                <button className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out'>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

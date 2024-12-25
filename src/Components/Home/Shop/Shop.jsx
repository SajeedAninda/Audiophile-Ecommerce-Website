import React from 'react'
import arrowIcon from '../../../assets/images/shared/desktop/icon-arrow-right.svg'
import headphoneImg from '../../../assets/images/shared/desktop/image-headphones.png'
import speakerImg from '../../../assets/images/shared/desktop/image-speakers.png'
import earphoneImg from '../../../assets/images/shared/desktop/image-earphones.png'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <div className='w-[100%] lg:w-[1130px] h-[70vh] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-40 pb-20'>
          <Link to={"/headphones"} className='headphones relative bg-[#f1f0f0] px-8 pt-20 pb-8 rounded-xl group cursor-pointer hover:shadow-lg'>
            <img
              className='absolute -top-14 left-1/2 transform -translate-x-1/2 w-[138px]'
              src={headphoneImg}
              alt=''
            />
            <p className='text-[#191919] text-[18px] tracking-widest font-bold uppercase text-center'>
              Headphones
            </p>
            <div className='flex justify-center items-center gap-2 mt-3'>
              <p className='uppercase font-semibold tracking-widest text-[#00000080] group-hover:text-[#d87d4a] text-[13px] text-center'>
                Shop
              </p>
              <img src={arrowIcon} alt='' />
            </div>
          </Link>

          <Link to={"/speakers"} className='speakers relative bg-[#f1f0f0] px-8 pt-20 pb-8 rounded-xl group cursor-pointer hover:shadow-lg'>
            <img
              className='absolute -top-14 left-1/2 transform -translate-x-1/2 w-[138px]'
              src={speakerImg}
              alt=''
            />
            <p className='text-[#191919] text-[18px] tracking-widest font-bold uppercase text-center'>
              speakers
            </p>
            <div className='flex justify-center items-center gap-2 mt-3'>
              <p className='uppercase font-semibold tracking-widest text-[#00000080] group-hover:text-[#d87d4a] text-[13px] text-center'>
                Shop
              </p>
              <img src={arrowIcon} alt='' />
            </div>
          </Link>

          <Link to={"/earphones"} className='Earphones relative bg-[#f1f0f0] px-8 pt-20 pb-8 rounded-xl group cursor-pointer hover:shadow-lg'>
            <img
              className='absolute -top-14 left-1/2 transform -translate-x-1/2 w-[138px]'
              src={earphoneImg}
              alt=''
            />
            <p className='text-[#191919] text-[18px] tracking-widest font-bold uppercase text-center'>
              Earphones
            </p>
            <div className='flex justify-center items-center gap-2 mt-3'>
              <p className='uppercase font-semibold tracking-widest text-[#00000080] group-hover:text-[#d87d4a] text-[13px] text-center'>
                Shop
              </p>
              <img src={arrowIcon} alt='' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Shop

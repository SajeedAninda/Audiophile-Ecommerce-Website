import React from 'react'
import yx1EarphoneImg from '../../assets/images/home/desktop/image-earphones-yx1.jpg'

const YX1_Eaphone = () => {
  return (
    <div className='w-[100%] lg:w-[1130px] mx-auto mb-28 flex gap-8 justify-between items-stretch'>
      {/* Image Div */}
      <div className='rounded-xl w-[50%]'>
        <img
          className='rounded-xl object-cover w-full h-full'
          src={yx1EarphoneImg}
          alt='YX1 Earphone'
        />
      </div>

      {/* Text Div */}
      <div className='w-[50%] rounded-xl py-24 pl-24 bg-[#f1f1f1]'>
        <h1 className='uppercase text-[28px] text-[#191919] font-bold'>
          YX1 Earphone
        </h1>
        <button className='bg-transparent px-10 py-3 hover:bg-[#191919] text-[#191919] hover:text-white border border-[#191919] font-bold uppercase text-[13px] mt-8 transition-colors duration-300 ease-in-out'>
          See Product
        </button>
      </div>
    </div>
  )
}

export default YX1_Eaphone

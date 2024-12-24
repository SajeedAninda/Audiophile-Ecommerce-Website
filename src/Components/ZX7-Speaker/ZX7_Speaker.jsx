import React from 'react'
import zx7SpeakerImg from '../../assets/images/home/desktop/image-speaker-zx7.jpg'

const ZX7_Speaker = () => {
  return (
    <div
      className="w-[100%] lg:w-[1130px] mx-auto mb-20 py-24 rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${zx7SpeakerImg})` }}
    >
      <div className="pl-24">
        <h1 className="uppercase text-[28px] text-[#191919] font-bold">
          ZX7 Speaker
        </h1>
        <button className="bg-transparent px-10 py-3 hover:bg-[#191919] text-[#191919] hover:text-white border border-[#191919] font-bold uppercase text-[13px] mt-8 transition-colors duration-300 ease-in-out">
          See Product
        </button>
      </div>
    </div>
  )
}

export default ZX7_Speaker

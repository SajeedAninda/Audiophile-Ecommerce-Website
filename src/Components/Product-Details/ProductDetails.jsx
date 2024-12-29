import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import zx9Img from '../../assets/images/product-zx9-speaker/desktop/image-product.jpg'
import { FiMinus, FiPlus } from 'react-icons/fi'
import imgGallery1 from '../../assets/images/product-zx9-speaker/desktop/image-gallery-1.jpg'
import imgGallery2 from '../../assets/images/product-zx9-speaker/desktop/image-gallery-2.jpg'
import imgGallery3 from '../../assets/images/product-zx9-speaker/desktop/image-gallery-3.jpg'
import zx7SpeakerImg from '../../assets/images/product-zx7-speaker/desktop/image-product.jpg'
import xx99Img from '../../assets/images//product-xx99-mark-one-headphones/desktop/image-product.jpg'
import xx59Img from '../../assets/images/product-xx59-headphones/desktop/image-product.jpg'

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

        <div className='productHeader flex mt-16 gap-10 justify-between items-center mb-28'>
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

                <div className='bg-[#f1f1f1] h-[48px] font-bold py-3 px-5 text-[15px]'>
                  1
                </div>

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

        <div className='features flex justify-between items-start mb-28'>
          <div className='w-[60%]'>
            <h3 className='text-[#191919] text-[32px] font-bold uppercase mt-6 leading-[45px]'>
              Features
            </h3>
            <p className='description mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
            </p>
            <p className='featureDetails mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
              Discover clear, more natural sounding highs than the competition
              with ZX9’s signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5” aluminum
              alloy bass unit. You’ll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.
            </p>
          </div>

          <div className='inTheBox w-[40%] pl-24'>
            <h3 className='text-[#191919] text-[32px] font-bold uppercase mt-6 leading-[45px]'>
              In The Box
            </h3>
            <div className='mt-6'>
              <li className='featureDetails mt-1 text-[15px] text-[#00000080] leading-[30px] list-none'>
                <span className='text-[#d87d4a] font-bold pr-3'>2x</span>
                Speaker Unit
              </li>

              <li className='featureDetails mt-1 text-[15px] text-[#00000080] leading-[30px] list-none'>
                <span className='text-[#d87d4a] font-bold pr-3'>2x</span>
                Speaker Unit
              </li>

              <li className='featureDetails mt-1 text-[15px] text-[#00000080] leading-[30px] list-none'>
                <span className='text-[#d87d4a] font-bold pr-3'>2x</span>
                Speaker Unit
              </li>

              <li className='featureDetails mt-1 text-[15px] text-[#00000080] leading-[30px] list-none'>
                <span className='text-[#d87d4a] font-bold pr-3'>2x</span>
                Speaker Unit
              </li>

              <li className='featureDetails mt-1 text-[15px] text-[#00000080] leading-[30px] list-none'>
                <span className='text-[#d87d4a] font-bold pr-3'>2x</span>
                Speaker Unit
              </li>
            </div>
          </div>
        </div>

        <div className='imageGallery flex items-stretch gap-5 mb-28'>
          {/*Left Column */}
          <div className='w-[40%] flex flex-col gap-5'>
            <div className='flex-1'>
              <img
                className='rounded-xl h-full object-cover'
                src={imgGallery1}
                alt=''
              />
            </div>
            <div className='flex-1'>
              <img
                className='rounded-xl h-full object-cover'
                src={imgGallery2}
                alt=''
              />
            </div>
          </div>

          {/*  Right Column */}
          <div className='w-[60%] flex-1'>
            <img
              className='rounded-xl h-full w-full object-cover'
              src={imgGallery3}
              alt=''
            />
          </div>
        </div>

        <div className='alsoLike mb-28'>
          <h3 className='text-[#191919] text-[32px] font-bold uppercase mt-6 leading-[45px] text-center'>
            You May Also Like
          </h3>

          <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-7'>
            <div>
              <img className='rounded-xl' src={zx7SpeakerImg} alt='' />
              <h4 className='text-[#191919] text-[24px] font-bold uppercase mt-6 leading-[45px] text-center'>
                ZX7 Speaker
              </h4>
              <div className='flex justify-center'>
                <button className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out mt-6'>
                  See Product
                </button>
              </div>
            </div>

            <div>
              <img className='rounded-xl' src={xx99Img} alt='' />
              <h4 className='text-[#191919] text-[24px] font-bold uppercase mt-6 leading-[45px] text-center'>
                X99 Mark I
              </h4>
              <div className='flex justify-center'>
                <button className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out mt-6'>
                  See Product
                </button>
              </div>
            </div>

            <div>
              <img className='rounded-xl' src={xx59Img} alt='' />
              <h4 className='text-[#191919] text-[24px] font-bold uppercase mt-6 leading-[45px] text-center'>
               XX59
              </h4>
              <div className='flex justify-center'>
                <button className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out mt-6'>
                  See Product
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

import React, { useContext, useEffect, useState } from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Shop from '../Home/Shop/Shop'
import AudioGear from '../AudioGear/AudioGear'
import { CartContext } from '../ContextAPI/CartProvider'
import toast from 'react-hot-toast'

const ProductDetails = () => {
  let navigate = useNavigate()
  const { products } = useLoaderData()
  const { slug } = useParams()
  let [selectedAmount, setSelectedAmount] = useState(1)
  let { cartItems, setCartItems } = useContext(CartContext)

  const product = products.find(product => product.slug === slug)

  const handleAddToCart = () => {
    let item = {
      id: product?.id,
      slug: product?.slug,
      name: product?.name,
      price: product?.price,
      image: product?.cartImage,
      quantity: selectedAmount
    }

    const existingItem = cartItems.find(
      cartItem => cartItem.slug === product.slug
    )

    if (existingItem) {
      const updatedCart = cartItems.map(cartItem =>
        cartItem.slug === product.slug
          ? { ...cartItem, quantity: cartItem.quantity + selectedAmount }
          : cartItem
      )
      setCartItems(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      toast.success('Added to cart!')
    } else {
      const updatedCart = [...cartItems, item]
      setCartItems(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      toast.success('Added to cart!')
    }
  }

  return (
    <div>
      <div className='w-[100%] lg:w-[1130px] mx-auto mt-16'>
        <button
          onClick={() => {
            navigate(-1)
          }}
          className='bg-[#d87d4a] px-8 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] mt-8 transition-colors duration-300 ease-in-out flex items-center gap-3 mx-6 lg:mx-0'
        >
          <IoReturnUpBack className='text-white text-[25px] font-bold' />
          Go Back
        </button>

        <div className='productHeader flex flex-col lg:flex-row mt-16 gap-10 justify-between items-center mb-28 px-6 lg:px-0'>
          <div className='imgDiv w-full lg:w-[50%]'>
            <img className='rounded-xl' src={product?.image?.desktop} />
          </div>

          <div className={`textDiv w-full lg:w-[50%] pl-4 lg:pl-20`}>
            {product?.new && (
              <p className='text-[14px] text-[#d87d4a] uppercase tracking-[15px]'>
                New Product
              </p>
            )}
            <h3 className='text-[#191919] text-[40px] font-bold uppercase mt-6 leading-[45px]'>
              {product?.name}
            </h3>

            <p className='mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
              {product?.description}
            </p>

            <p className='text-[#191919] text-[18px] font-bold uppercase mt-6'>
              $ {product?.price}
            </p>

            <div className='flex items-center gap-3 mt-9'>
              <div className='cartCounter flex items-center'>
                <div
                  onClick={() => {
                    if (selectedAmount > 0) {
                      setSelectedAmount(selectedAmount - 1)
                    }
                  }}
                  className='bg-[#f1f1f1] h-[48px] hover:bg-[#d3d2d2] cursor-pointer transition-colors duration-300 ease-in-out py-3 px-5 flex items-center group select-none'
                >
                  <FiMinus className='text-[15px] group-hover:text-[#d87d5a]' />
                </div>

                <div className='bg-[#f1f1f1] h-[48px] font-bold py-3 px-5 text-[15px]'>
                  {selectedAmount}
                </div>

                <div
                  onClick={() => setSelectedAmount(selectedAmount + 1)}
                  className='bg-[#f1f1f1] h-[48px] hover:bg-[#d3d2d2] cursor-pointer transition-colors duration-300 ease-in-out py-3 px-5 flex items-center group select-none'
                >
                  <FiPlus className='text-[15px] group-hover:text-[#d87d5a]' />
                </div>
              </div>

              <div className='flex items-center'>
                <button
                  onClick={handleAddToCart}
                  className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='features flex flex-col lg:flex-row justify-between items-start mb-28'>
          <div className='w-full lg:w-[60%] px-6 lg:px-0'>
            <h3 className='text-[#191919] text-[32px] font-bold uppercase mt-6 leading-[45px]'>
              Features
            </h3>
            <p className='description mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
              {product?.description}
            </p>
            <p className='featureDetails mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
              {product?.features}
            </p>
          </div>

          <div className='inTheBox w-full lg:w-[40%] pl-6 lg:pl-24'>
            <h3 className='text-[#191919] text-[32px] font-bold uppercase mt-6 leading-[45px]'>
              In The Box
            </h3>
            <div className='mt-6'>
              {product?.includedItems.map(items => {
                return (
                  <li className='featureDetails mt-1 text-[15px] text-[#00000080] leading-[30px] list-none'>
                    <span className='text-[#d87d4a] font-bold pr-4'>
                      {items?.quantity}x
                    </span>
                    {items?.item}
                  </li>
                )
              })}
            </div>
          </div>
        </div>

        <div className='imageGallery flex flex-col lg:flex-row items-stretch gap-5 mb-28'>
          {/*Left Column */}
          <div className='px-6 lg:px-0 w-full lg:w-[40%] flex flex-col gap-5'>
            <div className='flex-1'>
              <img
                className='rounded-xl h-full object-cover'
                src={product?.gallery?.first?.desktop}
                alt=''
              />
            </div>
            <div className='flex-1'>
              <img
                className='rounded-xl h-full object-cover'
                src={product?.gallery?.second?.desktop}
                alt=''
              />
            </div>
          </div>

          {/*  Right Column */}
          <div className='px-6 lg:px-0 w-full lg:w-[60%] flex-1'>
            <img
              className='rounded-xl h-full w-full object-cover'
              src={product?.gallery?.third?.desktop}
              alt=''
            />
          </div>
        </div>

        <div className='alsoLike mb-28 px-6 lg:px-0'>
          <h3 className='text-[#191919] text-[32px] font-bold uppercase mt-6 leading-[45px] text-center'>
            You May Also Like
          </h3>

          <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-7'>
            {product?.others.map(others => {
              const slugPart = others?.slug.split('/')[1]
              return (
                <div key={others?.slug}>
                  <img
                    className='rounded-xl'
                    src={others?.image.desktop}
                    alt=''
                  />
                  <h4 className='text-[#191919] text-[24px] font-bold uppercase mt-6 leading-[45px] text-center'>
                    {others?.name}
                  </h4>
                  <div className='flex justify-center'>
                    <Link
                      to={`/${slugPart}`}
                      className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] transition-colors duration-300 ease-in-out mt-6'
                    >
                      See Product
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='-mt-40 lg:-mt-20'>
          <Shop></Shop>
        </div>
        <div className='mt-[540px] lg:mt-0'>
          <AudioGear></AudioGear>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Shop from '../Home/Shop/Shop'
import AudioGear from '../AudioGear/AudioGear'

const CategoryPage = () => {
  const location = useLocation()
  const routeName = location.pathname.slice(1)
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then(data => {
        const matchedData = data.products
          .filter(product => product.category === routeName)
          .sort((a, b) => (b.new === true) - (a.new === true)) // Sort: 'new' products first
        setCategoryData(matchedData)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [routeName])

  console.log(categoryData)

  return (
    <div>
      <div className='bg-[#181918]'>
        <div className='w-[100%] lg:w-[1130px] mx-auto text-center py-24'>
          <h1 className='text-white text-[40px] font-bold uppercase'>
            {routeName}
          </h1>
        </div>
      </div>

      <div className='h-fit mt-16'>
        <div className='w-[100%] lg:w-[1130px] mx-auto'>
          {categoryData.map((product, index) => {
            const isRowReversed = index % 2 === 1
            return (
              <div
                key={product?.id}
                className={`product flex ${
                  isRowReversed ? 'flex-row-reverse' : 'flex-row'
                } gap-10 justify-between items-center mb-28`}
              >
                <div className='imgDiv w-[50%]'>
                  <img
                    className='rounded-xl'
                    src={product?.image?.desktop}
                    alt={product?.name || 'Product Image'}
                  />
                </div>

                <div
                  className={`textDiv w-[50%] ${isRowReversed ? '' : 'pl-20'}`}
                >
                  {product?.new && (
                    <p className='text-[14px] text-[#d87d4a] uppercase tracking-[10px]'>
                      New Product
                    </p>
                  )}
                  <h3 className='text-[#191919] text-[30px] font-bold uppercase mt-6 leading-[35px] w-[50%]'>
                    {product?.name}
                  </h3>

                  <p className='mt-6 text-[15px] text-[#00000080] leading-[30px] w-[90%]'>
                    {product?.description}
                  </p>

                  <button className='bg-[#d87d4a] px-10 py-3 hover:bg-[#db956c] text-white font-bold uppercase text-[13px] mt-6 transition-colors duration-300 ease-in-out'>
                    See Product
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='-mt-20'>
        <Shop></Shop>
      </div>
      <div>
        <AudioGear></AudioGear>
      </div>
    </div>
  )
}

export default CategoryPage

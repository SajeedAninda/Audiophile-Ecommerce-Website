import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import headphoneImg from '../../assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg'

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
        const matchedData = data.products.filter(
          product => product.category === routeName
        )
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

      <div className='h-fit'>
        <div lassName='w-[100%] lg:w-[1130px] mx-auto gap-8 flex justify-between items-center'>
          <div className='imgDiv flex-1'>
            <img src={headphoneImg} alt="" />
          </div>

          <div className='textDiv flex-1'>
            <p className=''>
                New Product
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage

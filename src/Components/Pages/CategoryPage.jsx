import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CategoryPage = () => {
  const location = useLocation()
  const routeName = location.pathname.slice(1)
  let [categoryData, setCategoryData] = useState([])

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

  return <div>Fetching data for category: {routeName}</div>
}

export default CategoryPage

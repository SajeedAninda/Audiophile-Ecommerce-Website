import React from 'react'
import { useLocation } from 'react-router-dom'

const CategoryPage = () => {
  let location = useLocation()
  let routeName = location.pathname.slice(1)
  console.log(routeName)

  return <div>New Category</div>
}

export default CategoryPage

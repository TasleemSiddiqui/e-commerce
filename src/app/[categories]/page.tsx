import React from 'react'
import Categories from './categoriesPage'

const page = ({ params }: { params: { categories: string } }) => {
  return (
    <div><Categories params={{
      categories: params.categories
    }}/></div>
  )
}

export default page
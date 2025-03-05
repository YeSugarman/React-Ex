import React from 'react'
import Products from './Products'
import TotalPrice from './TotalPrice'
import AddProduct from './AddProduct'

export default function HomePage() {
  return (
    <div>
        <Products/>
        <TotalPrice/>
        <AddProduct/>
    </div>
  )
}

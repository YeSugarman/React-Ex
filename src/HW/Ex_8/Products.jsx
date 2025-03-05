// מאזין לרידקס

import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

export default function Products() {

    const products = useSelector((store)=>store)

  return (
    <div style={{border:"1px solid blue"}}>
        <h1>Current Products in Order</h1>
        {products.length > 0 ? (products.map((e)=>(<div key={e.id}><Product id = {e.id}/></div>))): "No products available"}
    </div>
  )
}

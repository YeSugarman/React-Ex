import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Product(props) {
    const dispatch = useDispatch()

    const products = useSelector((store)=>store)
    const product = products.filter((e)=>e.id===props.id)
    
    const removeRedux=()=>{
        const action = {type: "REMOVE", payload:product[0].id}
        dispatch(action)
    }
  return (
    <div style={{border:"1px solid green"}}>
        <h3>Product Data</h3>        
        Name: {product[0].name}<br/>
        Price: {product[0].price}<br/>

        <button onClick={removeRedux}>Remove</button>
    </div>
  )
}

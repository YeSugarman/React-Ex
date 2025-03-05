// משנה את הרידקס

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function AddProduct() {
    const dispatch = useDispatch()

    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [price,setPrice]=useState(0)

    const addRedux = ()=>{
        setId(id+1)        
        const action = {type: "ADD", payload:{id:id,name:name,price:price}}
        dispatch(action)// קורא לרידקס        
        setName("")
        setPrice(0)
    }

  return (
    <div style={{border: "1px solid red"}}>
        <h1>order New Product</h1>
        Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
        Price: <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/> <br/>
        <button onClick={addRedux}>Add</button>
    </div>
  )
}

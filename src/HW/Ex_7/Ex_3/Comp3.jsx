import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Comp3() {

  const navigate = useNavigate()
  const [city,setCity]=useState("")

  const saveToStorage=()=>{
    localStorage.setItem("city",city)
    navigate("/comp4")
  }

  return (
    <div>
<       select onChange={(event) => {setCity(event.target.value)}} >
            <option></option>
            <option value="Haifa">Haifa</option>
            <option value="TLV">TLV</option>
            <option value="Jerusalem">Jerusalem</option>
        </select>    
        <button onClick={saveToStorage}>Next</button>
    </div>
  )
}
